import React from 'react';
import "./User.css";
import store from '../store';
import { setActiveUserId } from '../actions';

const User = ({ user }) => {
    const { name, profile_pic, status } = user;
    return (
        /* use bind to pass the arguments list back to the listener */
        <div className="User" onClick={handleUserClick.bind(null, user)}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    )
}

/*ES6 destructuring syntax to grab the user_id from the user argument*/
function handleUserClick({ user_id }) {
    store.dispatch(setActiveUserId(user_id));
}

export default User;