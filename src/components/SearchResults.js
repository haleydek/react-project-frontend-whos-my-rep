import React from 'react';
import Rep from './Rep';

const SearchResults = (props) => {
    const { repsData } = props;

    const getTitles = (repId) => {
        const titlesObjArray = repsData.titles.filter(title => title.officialIndices.includes(repId));

        return titlesObjArray.map(titleObj => titleObj.name);
    }

    return (
        <div>
            {repsData.reps.map((rep, id) => <Rep key={id} rep={rep} repId={id} titles={getTitles(id)} />)}
        </div>
    )
}

export default SearchResults;