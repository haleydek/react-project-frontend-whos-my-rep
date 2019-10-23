import React from 'react';
import Badge from './Badge';
import BadgeHeader from './BadgeHeader';

class Badges extends React.Component {
    state = {
        sort: false
    }

    handleClick = (event) => {
        // Need action that sends a fetch request to '/users/:id' PATCH
        // Send user's id and id of badge that was clicked on (event.target.parentElement.id)
        // In Rails API,
        //   Find users_badge with the user_id and badge_id
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

    sortBadges = (a, b) => {
        if (this.isUsersBadge(a.id) === this.isUsersBadge(b.id)) {
            // sort strings alphabetically
            return a.content.localeCompare(b.content)
        }
        else if (this.isUsersBadge(a.id) === true){
            return -1
        }
        else if (this.isUsersBadge(a.id) === false){
            return 1
        }
    }

    getBadges = (badges) => {
        const badgesCopy = [...badges];

        return this.state.sort ? badgesCopy.sort(this.sortBadges) : badges;
    }

    render() {

        return (
            <div className="badges">
                <BadgeHeader />
                <button onClick={event => this.setState({ sort: !this.state.sort })}>
                    {this.state.sort ? "Unsort" : "Sort"}
                </button>
                {this.getBadges(this.props.badges).map(badge => (
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

export default Badges;