import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from "react-bootstrap"


import Map from '../Components/Map/Map';


function SellerHome() {

    const zoom = 16
    const center = [51.505, -0.09]



    return (
        <>
            {/* <Jumbotron fluid>
                <Container>
                    <h1>Seller Home.</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron> */}




            <Map
                center={center}
                zoom={zoom}
                activeMarker={true}
                activeArea={false}
                activeSearch={true}
            />

        </>
    )
}
export default SellerHome