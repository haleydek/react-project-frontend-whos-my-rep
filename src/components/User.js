import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import BadgesContainer from '../containers/BadgesContainer';

class User extends React.Component {
    render(){
        const { user } = this.props;

        return (
            <div>
                <h2>{user.firstName}</h2>
                <p>{user.email}</p>
                <BadgesContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User);