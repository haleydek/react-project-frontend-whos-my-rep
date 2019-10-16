import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';

class BadgesContainer extends React.Component{
    render(){
        return (
            <div className="badges">
                {this.props.badges.map(badge => (
                    <Badge key={badge.id} id={badge.id} content={badge.content} />)
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        badges: state.badges.badges
    }
}

export default connect(mapStateToProps)(BadgesContainer);