import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import User from '../components/User';
import Badges from '../components/Badges';
import { updateUsersBadges } from '../actions/updateUsersBadges';

class UserProfileContainer extends React.Component {
    render(){
        const { user, badges, match, updateUsersBadges } = this.props;

        // check if:
        // (1) user id is in localStorage AND
        // (2) user id from Redux store matches user id from the URL
        if (!!user.loggedIn && parseInt(match.params.id, 10) === parseInt(user.id, 10)) {

            return (
                <div className="user-profile-container">
                    <User
                        firstName={user.firstName}
                        email={user.email}
                    />
                    <Badges
                        badges={badges}
                        userBadgeIds={user.badgeIds}
                        userId={user.id}
                        updateUsersBadges={updateUsersBadges}
                    />
                </div>
            )

        } else {

            return <Redirect to="/login" />

        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        badges: state.badges.badges
    }
}

export default connect(mapStateToProps, { updateUsersBadges })(UserProfileContainer);