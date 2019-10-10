import React from 'react';

const RepTitle = (props) => {
    console.log("RepTitle props:", props);

    return (
        <div className="rep">
            <h3>{props.title.name}</h3>
            
        </div>
    )
}

export default RepTitle;