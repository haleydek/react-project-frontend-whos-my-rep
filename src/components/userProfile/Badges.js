import React from 'react';
import Badge from './Badge';
import BadgeHeader from './BadgeHeader';

const Badges = (props) => {

    const handleClick = (event) => {
        // Need action that sends a fetch request to '/users/:id' PATCH
        // Send user's id and id of badge that was clicked on (event.target.parentElement.id)
        // In Rails API,
        //   Find users_badge with the user_id and badge_id
        //   If users_badge is found, delete the record.
        //   If users_badge is NOT found, create the record.        

        console.log("event's badge id", event.target.parentElement.id);

        // accepts user id and badge id as args
        // Badge component's id prop = badge id
        props.updateUsersBadges(props.userId, event.target.parentElement.id)
    }

    const isUsersBadge = (badgeId) => {
        return props.userBadgeIds.includes(badgeId) ? true : false
    }

    return (
        <div className="badges">
            <BadgeHeader />
            {props.badges.map(badge => (
                <Badge
                    key={badge.id}
                    id={badge.id}
                    content={badge.content}
                    isUsersBadge={isUsersBadge(badge.id)}
                    handleClick={handleClick}
                />)
            )}
        </div>
    )
}

export default Badges;