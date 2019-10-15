import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SearchContainer from './containers/SearchContainer';
import LoginInput from './components/LoginInput';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

const history = createBrowserHistory();

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/reps" render={routerProps => <SearchContainer {...routerProps} />} />
          <Route path="/login" render={routerProps => <LoginInput {...routerProps} />} />
        </div>
      </Router>
    );
  }
}

export default App;
