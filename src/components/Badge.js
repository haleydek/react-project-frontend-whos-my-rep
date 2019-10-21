import React from 'react';

const Badge = (props) => {
    return (
        <div id={props.id}>
            <p>{props.content} - {props.isUsersBadge}</p>
        </div>
    )
}

export default Badge;