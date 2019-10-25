import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/logout';
import Button from '../Button';

class NavBar extends React.Component {

    handleClick = (event) => {
        localStorage.clear();
        this.props.logout();
    }

    render(){
        const { loggedIn, userId, location } = this.props;

        if (loggedIn === true) {
            return (
                <nav>
                    <NavLink to="/">Home</NavLink><br />
                    <NavLink to="/reps">Search Reps</NavLink><br />
                    <NavLink to={`/users/${userId}`}>My Profile</NavLink><br />
                    <Button text="Log Out" onClick={this.handleClick} /><br />
                </nav>
            )
        }
        return (
            <nav>
                <NavLink to="/">Home</NavLink><br />
                <NavLink to="/reps">Search Reps</NavLink><br />
                { location.pathname === "/login"
                    ? <NavLink to="/signup">Sign Up</NavLink>
                    : <NavLink to="/login">Log In</NavLink>
                }
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.user.loggedIn,
        userId: state.user.id
    }
}

export default withRouter(connect(mapStateToProps, { logout })(NavBar));