import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SearchContainer from './containers/SearchContainer';
import LoginInput from './components/LoginInput';
import User from './components/User';
import { fetchUser } from './actions/fetchUser';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

const history = createBrowserHistory();

class App extends React.Component {

  componentDidMount(){
    if (localStorage.userId){
      this.props.fetchUser(localStorage.userId, history)
    } else {
      history.push("/login")
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar />
          <Route path="/users/:id" render={routerProps => <User {...routerProps} />} />
          <Route exact path="/" render={routerProps => <Home {...routerProps} />} />
          <Route path="/reps" render={routerProps => <SearchContainer {...routerProps} />} />
          <Route path="/login" render={routerProps => <LoginInput {...routerProps} />} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchUser })(App);
