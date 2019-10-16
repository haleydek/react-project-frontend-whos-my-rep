import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class User extends React.Component {
    render(){
        const { user } = this.props;

        return (
            <div id={user.id} >
                <h2>{user.firstName}</h2>
                <p>{user.email}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User);