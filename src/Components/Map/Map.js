import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle, useMap } from 'react-leaflet';
import { Marker as LeafletMarker, icon } from 'leaflet'

import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import { Button } from 'react-bootstrap';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';
import './Map.css'

LeafletMarker.prototype.options.icon = icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

const DraggableMarker = (props) => {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(props.center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marker is draggable'
                        : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}

const InfluenceArea = (props) => {
    const [position, setPosition] = useState(props.center)
    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <Circle
            center={position}
            pathOptions={fillBlueOptions}
            radius={300} />
    )
}

const SearchControl = (props) => {
    const map = useMap();

    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider: props.provider,
        marker: props.marker
    });

    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};

// export const DisplayPosition = ({ map }) => {

//     const onClick = useCallback(() => {
//         center = [map.getCenter().lat, map.getCenter().lng]
//         console.log(center);
//     }, [map])


//     return (
//         <>
//             <Button onClick={onClick}>Guardar mapa</Button>
//         </>
//     )
// }

export const Map = (props) => {

    const zoom = props.zoom
    const center = props.center
    const provider = new OpenStreetMapProvider();

    //  const displayMap = useMemo(() => (

    const displayMap = () => {
        return (
            <>
                <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} editable={true}>

                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {
                        (props.activeArea)
                            ? <InfluenceArea center={center} />
                            : <></>
                    }

                    {
                        (props.activeMarker)
                            ? <DraggableMarker center={center} />
                            : <></>
                    }

                    {
                        (props.activeSearch)
                            ? <SearchControl
                                provider={provider}
                                showMarker={true}
                                showPopup={false}
                                popupFormat={({ query, result }) => result.label}
                                maxMarkers={3}
                                retainZoomLevel={false}
                                animateZoom={true}
                                autoClose={false}
                                searchLabel={"Enter address, please"}
                                keepResult={true}
                                marker={Marker} />
                            : <></>
                    }

                <Button
                        className=" "
                    >polygon</Button>



                </MapContainer>
            </>
        )
    }

    // ),
    //     [],
    // )

    // return (
    //     <>
    //         {map ? <DisplayPosition map={map} /> : null}
    //         {displayMap}
    //     </>
    // )

    return displayMap()
};



export default Map;