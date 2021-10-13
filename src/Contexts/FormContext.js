import React, { useContext, useRef, useState, useEffect } from 'react'
import StatesOfApplicacion from '../StatesOfApplication'

const Context = React.createContext()

export function FormContext() {
    return useContext(Context);
}

export function FormProvider({ children }) {

    const [stateEditor, setStateEditor] = useState("")

    const value = {
        stateEditor,
        setStateEditor
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}