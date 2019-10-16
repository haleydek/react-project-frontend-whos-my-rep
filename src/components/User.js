import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import BadgesContainer from '../containers/BadgesContainer';

class User extends React.Component {
    render(){
        const { user } = this.props;
        const { match } = this.props;

        if (!!user.loggedIn && parseInt(match.params.id, 10) === parseInt(user.id, 10)) {
            return (
                <div>
                    <h2>{user.firstName}</h2>
                    <p>{user.email}</p>
                    <BadgesContainer />
                </div>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User);