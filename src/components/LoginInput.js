import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUser';

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
        event.preventDefault();

        this.props.fetchUser(this.state);

        this.setState({
            email: ''
        })
    }

    render(){
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

export default connect(null, { fetchUser })(LoginInput);