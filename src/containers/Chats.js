import React, { Component } from 'react';
import store from '../store';
import './Chats.css';
import { deleteMessage, editMessage, setEditValue } from '../actions';

const Chat = ({ message }) => {
    const { text, is_user_msg, number } = message;
    const activeUserId = store.getState().activeUserId;
    return (
        <div className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
            <div>{text}</div>
            <div className="delete"><span onClick={handleDeleteClick.bind(null, number, activeUserId)}><i className="fa fa-times-circle-o"></i></span></div>
            <div className="edit"><span onClick={handleEditClick.bind(null, number, text, activeUserId)}><i className="fa fa-pencil"></i></span></div>
        </div>
    )
}

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
        </div>
        )
    }
}

function handleDeleteClick(message_number, user_id) {
    store.dispatch(deleteMessage(message_number, user_id));
}

function handleEditClick(message_number, text, user_id) {
    store.dispatch(setEditValue(message_number));
    store.dispatch(editMessage(message_number, text, user_id));
}

export default Chats;