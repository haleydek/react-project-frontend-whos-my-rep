import React from 'react';
import Rep from './Rep';

const SearchResults = (props) => {
    const { repsData } = props;

    const getTitles = (repId) => {
        const titlesObjArray = repsData.titles.filter(title => title.officialIndices.includes(repId));

        return titlesObjArray.map(titleObj => titleObj.name);
    }

    const renderReps = (repsData) => {
        return repsData.reps.map((rep, id) => {
            return <Rep key={id} rep={rep} repId={id} titles={getTitles(id)} />
        })
    }

    return (
        <div className="search-results">
            {renderReps(repsData)}
        </div>
    )
}

export default SearchResults;