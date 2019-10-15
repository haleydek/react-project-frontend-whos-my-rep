import React from 'react';

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
            <form onSubmit={this.handleSubmit} >
                <input type='text' value={this.state.email} onChange={this.handleChange} />
                <input type='submit' />
            </form>
        )
    }
}

export default LoginInput;