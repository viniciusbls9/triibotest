import React from 'react';

import './styles.css';

function Message({ messages, username }) {

    return (
        <>
            <div className="message-content">
                <div className="message-title">
                    <span className="username">{messages.user_id}</span>
                    <span className="date">{messages.timestamp}</span>
                </div>
                <p>{messages.content}</p>
            </div>
        </>
    );
}

export default Message;