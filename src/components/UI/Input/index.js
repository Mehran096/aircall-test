import React from 'react'

const Input = (props) => {
    return (
        <div classNameName="mb-3">
                    <label for="exampleInputEmail1" className="form-label">{props.label}</label>
                    <input type={props.type} 
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    />
                    <div id="emailHelp" className="form-text">{props.errorMessage}</div>
        </div>
    )
}

export default Input
