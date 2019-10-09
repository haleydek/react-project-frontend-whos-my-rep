import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchReps } from './actions/fetchReps';

export const GOOGLE_API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_API_KEY}&address=`;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchReps(55408);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchReps: (address) => dispatch(fetchReps(address))
  }
}

export default connect(null, mapDispatchToProps)(App);
