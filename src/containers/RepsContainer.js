import React from 'react';
import { connect } from 'react-redux';
import RepsList from '../components/RepsList';

class RepsContainer extends React.Component {
    render(){
        return (
            <RepsList repData={this.props.repData} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    
    return {
        repData: state
        // addressInput: state.addressInput,
        // divisions: state.divisions,
        // offices: state.offices,
        // officials: state.officials
    }
}

export default connect(mapStateToProps)(RepsContainer);