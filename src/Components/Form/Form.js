import React, { useState, useEffect } from 'react';

import QuillEditor from '../QuillEditor/QuillEditor';
import JobPreview from '../JobPreview/JobPreview';
import Calendar from '../Calendar/Calendar';
import Select from '../Select/Select';

export const Form = () => {

    const em = "(Vista Previa)"
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const worklists = [ 'Seleción', 'Plomería', 'Gas', 'Albañileria', 'Pintura', 'Jardineria' ]

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

    const returnStates = () => {
        return [stateSelected, stateCalendar, stateEditorText]
    }

    return (
        <>
            <div className="row">

                <div className="col-md-6">
                    <div className="card card-warning">
                        <div className="card-header">
                            <h3 className="card-title">General Elements</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Trabajo a realizar</label>
                                            <Select
                                                onChange={event => handleChangeSelect(event.target.value)}
                                                collection = {worklists} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6" style={{paddingLeft:'34px'}}>
                                        <div className="form-group">
                                            <label>Date:</label>
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

                <JobPreview
                    description={stateEditorText}
                    title={stateSelected}
                    date={stateCalendar}
                    em={em}/>
            </div>
        </>
    )
}


export default Form;