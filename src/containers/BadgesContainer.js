import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';

class BadgesContainer extends React.Component{
    render(){
        return (
            this.props.badges.map(badge => (
                <Badge key={badge.id} id={badge.id} content={badge.content} />)
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        badges: state.badges.badges
    }
}

export default connect(mapStateToProps)(BadgesContainer);