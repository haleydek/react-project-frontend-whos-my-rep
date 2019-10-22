import React from 'react';

const User = (props) => {
    return (
        <div className="user-info">
            <h2>{props.firstName}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default User;