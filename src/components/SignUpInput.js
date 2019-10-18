import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signup';

class SignUpInput extends React.Component {
    state = {
        email: '',
        firstName: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.login(this.state, this.props.history)

        this.setState({
            email: '',
            firstName: ''
        })
    }

    render(){
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit} >
                    <label>Email</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleChange} /><br />
                    <label>First Name</label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }

}

export default connect(null, { signup })(SignUpInput);