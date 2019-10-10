import React from 'react';
import { connect } from 'react-redux';
import RepsList from '../components/RepsList';

class RepsContainer extends React.Component {

    render(){
        return (
            <div className="reps-container">
                <RepsList repsData={this.props.repsData || ''} />
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

export default connect(mapStateToProps)(RepsContainer);