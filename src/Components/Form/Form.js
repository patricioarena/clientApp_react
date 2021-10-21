import React, { useState, useEffect } from 'react';

import QuillEditor from '../QuillEditor/QuillEditor';
import JobPreview from '../JobPreview/JobPreview';
import Calendar from '../Calendar/Calendar';
import Select from '../Select/Select';


export const Form = () => {

    const centerMap = [51.505, -0.09]
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const worklists = ['Seleción', 'Plomería', 'Gas', 'Albañileria', 'Pintura', 'Jardineria']

    const [stateSelected, setStateSelected] = useState("");
    const [stateCalendar, setStateCalendar] = useState("");
    const [stateEditorText, setStateEditorText] = useState(text);

    const handleChangeSelect = (event) => {
        {
            (event != "Seleción")
                ? setStateSelected(event)
                : setStateSelected("")
        }
    };

    const handleChangeEditorText = (event) => {
        setStateEditorText(event);
    };

    const handleChangeCalendar = (event) => {
        setStateCalendar(event);
    };

    return (
        <>
            <div className="row">

                <div className="col-md">
                    <div className="card card-warning">
                        <div className="card-header">
                            <h3 className="card-title">
                            <i className="fas fa-edit" />
                            &nbsp;&nbsp;<a>Crear publicación</a>
                            </h3>
                        </div>
                        <div className="card-body">
                            <form>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Trabajo a realizar</label>
                                        <div className="form-group">
                                            <Select
                                                onChange={event => handleChangeSelect(event.target.value)}
                                                collection={worklists} />
                                        </div>
                                    </div>

                                    <div className="col-sm-4"  >
                                        <label>Fecha a realizar</label>
                                        <div className="form-group">
                                            <Calendar
                                                onChange={event => handleChangeCalendar(event)}
                                                value={stateCalendar} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <QuillEditor
                                                onChange={event => handleChangeEditorText(event)}
                                                placeholder={"Descripción del trabajo"}
                                                value={stateEditorText} />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">

                <JobPreview
                    description={stateEditorText}
                    title={stateSelected}
                    date={stateCalendar}
                    preview={true}
                    centerMap={centerMap}/>

            </div>


        </>
    )
}


export default Form;