import React from 'react';

class SearchInput extends React.Component {
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
            <div className="search-input">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your address to find your representatives</label>
                    <input type="text" value={this.state.address} onChange={this.handleChange} placeholder="Your address..."/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchInput;