import React from 'react';

const Button = (props) => {
    console.log("button props", props)
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;