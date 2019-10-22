import React from 'react';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/fetchReps';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/SearchResults';
import RepPage from '../components/search/RepPage';
import { Route } from 'react-router-dom';

class SearchContainer extends React.Component {
    render(){
        console.log("SearchContainer match:", this.props.match);

        return (
            <div>
                <Route
                    exact path={this.props.match.url}
                    render={() => (
                        <React.Fragment>
                            <SearchInput fetchReps={this.props.fetchReps}/>
                            <SearchResults repsData={this.props.repsData}/>
                        </React.Fragment>
                    )}
                />

                <Route
                    path={`${this.props.match.url}/:repId`}
                    render={routerProps => (
                        <RepPage repsData={this.props.repsData} {...routerProps} />
                    )}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)

    return {
        repsData: state.repsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReps: (address) => dispatch(fetchReps(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);