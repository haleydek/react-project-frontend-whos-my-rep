import React from 'react';
import RepTitle from './RepTitle';

const RepsList = (props) => {
    const { repsData } = props;

    console.log("RepsList props:", repsData);

    const getRepsWithTitle = (title) => {
        console.log("title in getRepsWithTitle:", title);
        
        return repsData.reps.filter((rep, index) => {
            if (title.officialIndices.includes(index)) {
                return rep
            }
        })
    };



    return (
        <div>
            {repsData.titles.map(title => <RepTitle title={title} reps={getRepsWithTitle(title)}/> )}
        </div>
    )
}

export default RepsList;