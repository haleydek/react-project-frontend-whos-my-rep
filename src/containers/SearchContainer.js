import React from 'react';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/fetchReps';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

class SearchContainer extends React.Component {
    render(){
        return (
            <div>
                <SearchInput fetchReps={this.props.fetchReps}/>
                <SearchResults repsData={this.props.repsData}/>
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