import React, { useState } from "react";

const Select = (props) => {

    console.log(props.value);

    return (
        <>
            <select className="form-control" onChange={props.onChange}>
                <option>Seleción</option>
                <option>Plomería</option>
                <option>Gas</option>
                <option>Albañileria</option>
                <option>Pintura</option>
                <option>Jardineria</option>
            </select>
        </>
    );
};

export default Select;