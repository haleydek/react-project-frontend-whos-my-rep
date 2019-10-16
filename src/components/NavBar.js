import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';
import Button from './Button';

class NavBar extends React.Component {

    handleClick = (event) => {
        localStorage.clear();
        this.props.logout();
    }

    render(){
        const { loggedIn, userId } = this.props;

        if (loggedIn === true) {
            return (
                <div className="nav">
                    <NavLink to="/">Home</NavLink><br />
                    <NavLink to="/reps">Search Reps</NavLink><br />
                    <NavLink to={`/users/${userId}`}>My Profile</NavLink><br />
                    <Button text="Log Out" onClick={this.handleClick} /><br />
                </div>
            )
        }
        return (
            <div className="nav">
                <NavLink to="/">Home</NavLink><br />
                <NavLink to="/reps">Search Reps</NavLink><br />
                <NavLink to="/login">Log In</NavLink><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.user.loggedIn,
        userId: state.user.id
    }
}

export default connect(mapStateToProps, { logout })(NavBar);