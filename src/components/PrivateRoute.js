import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ loggedIn, userId, ...props }) => {
    console.log("loggedIn", loggedIn);
    
    return (
        loggedIn
            ? <Route { ...props } />
            : <Redirect to="/login" />
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.user.loggedIn,
        userId: state.user.id
    }
}

export default connect(mapStateToProps)(PrivateRoute);