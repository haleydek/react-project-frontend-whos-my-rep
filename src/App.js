import './stylesheets/App.scss';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import HeaderContainer from './containers/HeaderContainer';
import SearchContainer from './containers/SearchContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import RepContainer from './containers/RepContainer';
import Home from './components/Home';
import LoginInput from './components/LoginInput';
import SignUpInput from './components/SignUpInput';
import { fetchUser } from './actions/fetchUser';
import { fetchBadges } from './actions/fetchBadges';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

const history = createBrowserHistory();

class App extends React.Component {

  componentDidMount(){
    this.props.fetchBadges();

    if (localStorage.userId){
      this.props.fetchUser(localStorage.userId, history)
    } else {
      history.push("/login")
    }
  }

  render() {
    return (
      <Router history={history}>
          <HeaderContainer />
          <div className="content-area">
            <Route path="/users/:id" render={routerProps => <UserProfileContainer {...routerProps} />} />
            <Route path="/reps/:repId" render={routerProps => <RepContainer {...routerProps} />} />
            <Route exact path="/reps" render={routerProps => <SearchContainer {...routerProps} />} />
            <Route exact path="/login" render={routerProps => <LoginInput {...routerProps} />} />
            <Route exact path="/signup" render={routerProps => <SignUpInput {...routerProps} />} />
            <Route exact path="/" render={routerProps => <Home {...routerProps} />} />
          </div>
      </Router>
    );
  }
}

export default connect(null, { fetchUser, fetchBadges })(App);
