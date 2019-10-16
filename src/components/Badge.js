import React from 'react';

const Badge = (props) => {
    return (
        <div id={props.id}>
            <p>{props.content}</p>
        </div>
    )
}

export default Badge;