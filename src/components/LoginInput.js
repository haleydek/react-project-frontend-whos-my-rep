import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { withRouter } from 'react-router-dom';

class LoginInput extends React.Component {
    state = {
        email: ''
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log("history prop:", this.props.history)

        event.preventDefault();

        this.props.login(this.state, this.props.history)

        this.setState({
            email: ''
        })
    }

    render(){
        console.log("login props:", this.props.history)
        return (
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' value={this.state.email} onChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { login })(LoginInput));