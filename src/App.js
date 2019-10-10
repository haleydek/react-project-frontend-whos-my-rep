import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SearchContainer from './containers/SearchContainer';
import RepsContainer from './containers/RepsContainer';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SearchContainer />
        <RepsContainer />
      </div>
    );
  }
}

export default connect()(App);
