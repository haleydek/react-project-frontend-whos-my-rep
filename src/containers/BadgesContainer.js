import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';

const BadgesContainer = (props) => {
        console.log("badges container props:", props);
        return (
            props.badges.map(badge => <Badge key={badge.id} id={badge.id} content={badge.content} />)
        )
}

const mapStateToProps = (state) => {
    console.log("badges container state:", state);
    return {
        badges: state.badges.badges
    }
}

export default connect(mapStateToProps)(BadgesContainer);