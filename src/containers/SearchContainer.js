import React from 'react';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/fetchReps';

class SearchContainer extends React.Component {
    render(){
        return (
            <Search fetchReps={this.props.fetchReps}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReps: (address) => dispatch(fetchReps(address))
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);