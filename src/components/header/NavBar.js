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
                    <NavLink to="/">HOME</NavLink><br />
                    <NavLink to="/reps">FIND MY REPS</NavLink><br />
                    <NavLink to={`/users/${userId}`}>PROFILE</NavLink><br />
                    <Button text="Log Out" onClick={this.handleClick} /><br />
                </nav>
            )
        }
        return (
            <nav>
                <NavLink to="/">HOME</NavLink><br />
                <NavLink to="/reps">FIND MY REPS</NavLink><br />
                { location.pathname === "/login"
                    ? <NavLink to="/signup">SIGN UP</NavLink>
                    : <NavLink to="/login">LOG IN</NavLink>
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