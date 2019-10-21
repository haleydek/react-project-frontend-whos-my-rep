import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';

class BadgesContainer extends React.Component{
    handleClick = (event) => {
        // Need action that sends a fetch request to '/users/:id' PATCH
        // Send user's id and badge that was clicked on (event.target.id)
        // In Rails API,
        //   Find or create users_badge with the user_id and badge_id
        //   If users_badge is found, delete the record.
        //   If users_badge is NOT found, create the record.
    }

    isUsersBadge = (badgeId) => {
        return this.props.usersBadgeIds.includes(badgeId) ? "yes" : "no"
    }

    render(){
        return (
            <div className="badges">
                {this.props.badges.map(badge => (
                    <Badge
                        key={badge.id}
                        id={badge.id}
                        content={badge.content}
                        isUsersBadge={this.isUsersBadge(badge.id)}
                    />)
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        badges: state.badges.badges,
        usersBadgeIds: state.user.badgeIds
    }
}

export default connect(mapStateToProps)(BadgesContainer);