import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/reps">Search Reps</NavLink><br />
            <NavLink to="/login">Log In</NavLink><br />
        </div>
    )
}

export default NavBar;