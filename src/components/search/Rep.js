import React from 'react';
import { Link } from 'react-router-dom';

const Rep = (props) => {
    console.log("titles:", props.titles);

    return (
        <div id={props.repId} className="rep">
            <h2>{props.titles.join(", ")}</h2>
            <h3><Link key={props.repId} to={`/reps/${props.repId}`} >{props.rep.name}</Link></h3>
        </div>
    )
}

export default Rep;