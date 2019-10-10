import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SearchContainer from './containers/SearchContainer';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SearchContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state: ", state)
  return {
    reps: state
  }
}

export default connect(mapStateToProps)(App);
