import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';
import { updateUsersBadges } from '../actions/updateUsersBadges';

class BadgesContainer extends React.Component{
    handleClick = (event) => {
        // Need action that sends a fetch request to '/users/:id' PATCH
        // Send user's id and badge that was clicked on (event.target.id)
        // In Rails API,
        //   Find or create users_badge with the user_id and badge_id
        //   If users_badge is found, delete the record.
        //   If users_badge is NOT found, create the record.        

        console.log("event's badge id", event.target.parentElement.id);

        // accepts user id and badge id as args
        // Badge component's id prop = badge id
        this.props.updateUsersBadges(this.props.userId, event.target.parentElement.id)
        
    }

    isUsersBadge = (badgeId) => {
        return this.props.userBadgeIds.includes(badgeId) ? true : false
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
                        handleClick={this.handleClick}
                    />)
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        badges: state.badges.badges,
        userBadgeIds: state.user.badgeIds,
        userId: state.user.id
    }
}

export default connect(mapStateToProps, { updateUsersBadges })(BadgesContainer);