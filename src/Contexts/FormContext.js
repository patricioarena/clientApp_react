import React, { useContext, useRef, useState, useEffect } from 'react'
import StatesOfApplicacion from '../StatesOfApplication'

const Context = React.createContext()

export function FormContext() {
    return useContext(Context);
}

export function FormProvider({ children }) {

    const [stateEditor, setStateEditor] = useState("")
    const [stateCalendar, setStateCalendar] = useState("")
    const [stateSelect, setStateSelect] = useState("")

    const value = {
        stateEditor,
        stateCalendar,
        stateSelect,
        setStateEditor,
        setStateCalendar,
        setStateSelect
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}