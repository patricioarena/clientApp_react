import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap"
import { FormContext } from "../../Contexts/FormContext"

import QuillEditor from '../QuillEditor/QuillEditor';
import Calendar from '../Calendar/Calendar';
import Select from '../Select/Select';



export const Form = () => {
    const { stateEditor } = FormContext()

    const [stateSelected, setStateSelected] = useState(null);
    const [stateCalendar, setStateCalendar] = useState(null);


    const handleChangeSelect = (event) => {
        {
            (event != "Seleción")
                ? setStateSelected(event)
                : setStateSelected("")
        }
    };


    // Pasar al componente Vista Previa
    const stateEditorInnerHTML = () => {
        return { __html: `${stateEditor}` };
    }

    // Pasar al componente Vista Previa
    const stateSelectInnerHTML = () => {
        return { __html: `${stateSelected}` };
    }

    return (
        <>
            <div className="row">

                <div className="col-md-6">
                    <div className="card card-warning">
                        <div className="card-header">
                            <h3 className="card-title">General Elements</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <form>
                                <div className="row">

                                <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Trabajo a realizar</label>
                                            <Select onChange={event => handleChangeSelect(event.target.value)} value="pepe"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Date:</label>
                                            <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                                <Calendar onChange ={setStateCalendar} value={stateCalendar}/>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <QuillEditor placeholder={"Descripción del trabajo"} />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                {/* Pasar al componente Vista Previa */}
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-briefcase" />
                                &nbsp;<a dangerouslySetInnerHTML={stateSelectInnerHTML()} />&nbsp;
                                <em>(Vista Previa)</em>
                            </h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <dl className="row">

                                <dt className="col-sm-4">Descripción</dt>
                                <dd className="col-sm-12" dangerouslySetInnerHTML={stateEditorInnerHTML()} />
                                <dt className="col-sm-4">Tipo</dt>
                                <dd className="col-sm-10">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd className="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt className="col-sm-4">Malesuada porta</dt>
                                <dd className="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>

                            </dl>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
            </div>
        </>
    )
}


export default Form;