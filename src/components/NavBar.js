import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/reps">Search Reps</NavLink>
        </div>
    )
}

export default NavBar;