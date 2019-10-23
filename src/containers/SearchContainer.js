import React from 'react';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/fetchReps';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { Route } from 'react-router-dom';

class SearchContainer extends React.Component {
    render(){
        const { fetchReps, repsData } = this.props;

        return (
            <div className="search-container">
                <SearchInput fetchReps={fetchReps}/>
                <SearchResults repsData={repsData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)

    return {
        repsData: state.repsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReps: (address) => dispatch(fetchReps(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);