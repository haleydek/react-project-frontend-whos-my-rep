import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUser';
import { Route } from 'react-router-dom';

class LoginContainer extends React.Component {
    render(){
        console.log("LoginContainer match:", this.props.match);

        return (
            <div>
                <Route 
                    exact path={this.props.match.url}
                    render={() => (
                        <React.Fragment>
                            <LoginInput fetchUser={this.props.fetchUser} />
                            <User user={this.props.user} />
                        </React.Fragment>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("LoginContainer state:", state);

    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (formData) => dispatch(fetchUser(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);