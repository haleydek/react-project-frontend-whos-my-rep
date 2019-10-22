import React from 'react';

const Badge = (props) => {
    return (
        <div id={props.id} onClick={props.handleClick}>
            <p>{props.content} - {`${props.isUsersBadge}`}</p>
        </div>
    )
}

export default Badge;