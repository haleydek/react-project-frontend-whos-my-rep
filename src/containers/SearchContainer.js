import React from 'react';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/fetchReps';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import RepPage from '../components/repPage/RepPage';
import { Route } from 'react-router-dom';

class SearchContainer extends React.Component {
    render(){
        const { match, fetchReps, repsData } = this.props;

        console.log("SearchContainer match:", match);

        return (
            <React.Fragment>
                <Route
                    exact path={match.url}
                    render={() => (
                        <div className="search-container">
                            <SearchInput fetchReps={fetchReps}/>
                            <SearchResults repsData={repsData}/>
                        </div>
                    )}
                />

                <Route
                    path={`${match.url}/:repId`}
                    render={routerProps => (
                        <RepPage repsData={repsData} {...routerProps} />
                    )}
                />
            </React.Fragment>
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