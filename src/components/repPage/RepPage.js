import React from 'react';
import ContactCard from './ContactCard';

const RepPage = ({ match, repsData }) => {
    const rep = repsData.reps[match.params.repId];

    console.log("rep:", rep);

    // still need getTitle(id) function to put title on page
    
    return (
        <div>
            <h1>{rep.name}</h1>
            <p>{rep.party}</p>
            <ContactCard
                phones={rep.phones || null}
                emails={rep.emails || null}
                address={rep.address || null}
                channels={rep.channels || null}
                urls={rep.urls || null}
            />
        </div>
    )
}

export default RepPage;