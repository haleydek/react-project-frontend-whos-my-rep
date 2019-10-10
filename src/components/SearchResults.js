import React from 'react';
import Rep from './Rep';

const SearchResults = (props) => {
    const { repsData } = props;

    console.log("SearchResults props:", repsData);

    return (
        <div>
            {repsData.reps.map((rep, id) => <Rep key={id} rep={rep} repId={id}/>)}
        </div>
    )

    // const getRepsWithTitle = (title) => {
    //     console.log("title in getRepsWithTitle:", title);
        
    //     return repsData.reps.filter((rep, index) => {
    //         if (title.officialIndices.includes(index)) {
    //             return rep
    //         }
    //     })
    // };



    // return (
    //     <div>
    //         {repsData.titles.map(title => <Rep title={title} reps={getRepsWithTitle(title)}/> )}
    //     </div>
    // )
}

export default SearchResults;