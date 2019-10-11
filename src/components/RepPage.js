import React from 'react';

const RepPage = ({ match, repsData }) => {
    const rep = repsData.reps[match.params.repId];

    console.log("rep:", rep);

    // still need getTitle(id) function to put title on page
    
    return (
        <div>
            <h1>{rep.name}</h1>
            <p>{rep.party}</p>
            {rep.phones ? rep.phones.map(phone => <li>{phone}</li>) : ""}
            {rep.address? rep.address.map(addr => <address>{Object.values(addr).filter(Boolean).join(", ")}</address>) : ""}
            {rep.channels ? rep.channels.map(channel => <li>{channel.type}: {channel.id}</li>) : ""}
            {rep.urls ? rep.urls.map(url => <a href={url} />) : ""}
        </div>
    )
}

export default RepPage;