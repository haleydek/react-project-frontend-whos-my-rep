import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateLink = ({ loggedIn, ...props }) => {    
    return (
        loggedIn
            ? <NavLink { ...props } />
            : ""
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.user.loggedIn,
    }
}

export default connect(mapStateToProps)(PrivateLink);