import React from 'react';
import { NavLink } from 'react-router-dom';
import PrivateLink from './PrivateLink';

const NavBar = () => {

    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/reps">Search Reps</NavLink><br />
            <NavLink to="/login">Log In</NavLink><br />
            <PrivateLink to={`/users/${localStorage.userId}`}>My Profile</PrivateLink><br />
        </div>
    )
}

export default NavBar;