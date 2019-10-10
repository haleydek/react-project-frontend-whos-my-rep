import React from 'react';

class Search extends React.Component {
    state = {
        address: ''
    }

    handleChange = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.fetchReps(this.state.address);

        this.setState({
            address: ''
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.address} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}