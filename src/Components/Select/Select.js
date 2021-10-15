import React, { useState } from "react";

const Select = (props) => {

    return (
        <>
            <select className="form-control" onChange={props.onChange}>
                {
                    props.collection.map(item => (<option key={item}>{item}</option>))
                }
            </select>
        </>
    );
};

export default Select;