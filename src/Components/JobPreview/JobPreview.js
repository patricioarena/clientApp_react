import React, { useState, useEffect } from 'react';

export const JobPreview = (props) => {

    const stateEditorInnerHTML = () => {
        return { __html: `${props.description}` };
    }

    const stateSelectInnerHTML = () => {
        return { __html: `${props.title}` };
    }

    const stateCalendarInnerHTML = () => {
        {
            return (`${props.date.year}/${props.date.month}/${props.date.day}` != "undefined/undefined/undefined")
                ? `${props.date.year}/${props.date.month}/${props.date.day}`
                : ""
        }
    }

    // https://react-leaflet.js.org/docs/example-other-layers/
    // https://github.com/smeijer/leaflet-geosearch
    return (
        <>
            <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-briefcase" />
                            &nbsp;<a dangerouslySetInnerHTML={stateSelectInnerHTML()} />&nbsp;
                            <em>{props.em}</em>
                        </h3>
                    </div>
                    <div className="card-body">
                        <dl className="row">

                            <dt className="col-sm-4">Descripción</dt>
                            <dd className="col-sm-12" dangerouslySetInnerHTML={stateEditorInnerHTML()} />
                            <dt className="col-sm-4">Fecha a realizar</dt>
                            <dd className="col-sm-8">{stateCalendarInnerHTML()}</dd>
                            {/* <dd className="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                            <dt className="col-sm-4">Malesuada porta</dt>
                            <dd className="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd> */}

                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobPreview;
