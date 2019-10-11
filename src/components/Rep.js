import React from 'react';

const Rep = (props) => {
    console.log("titles:", props.titles);

    return (
        <div id={props.repId} className="rep">
            <h2>{props.titles.join(", ")}</h2>
            <h3>{props.rep.name}</h3>
        </div>
    )
}

export default Rep;