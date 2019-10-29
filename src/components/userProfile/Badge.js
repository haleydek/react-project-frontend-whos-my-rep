import React from 'react';

const Badge = (props) => {
    return (
        <div id={props.id} className="badge" onClick={props.handleClick}>
            <div className={`checkmark ${props.isUsersBadge ? "on" : "off"}`}></div>
            <p>{props.content}</p>
        </div>
    )
}

export default Badge;