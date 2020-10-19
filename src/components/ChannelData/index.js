import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Message from '../Message';
import api from '../../services/api.json';
import './styles.css';

function ChannelData(props) {

    const [messages, setMessages] = useState(api.messages);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        function agruparPor(objetoArray, propriedade) {
            return objetoArray.reduce(function (acc, obj) {
                let key = obj[propriedade];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {});
        }
    
        let grupodePessoas = agruparPor(api.messages, 'channel_id');
        let id = agruparPor(api.users, 'id');
        
        setUsers(api.users);

        setMessages(grupodePessoas[props.channelId]);

    }, [props.channelId]);

    return (
        <div className="messages-content">
            <div className="messages">
                <div className="message">
                    {Object.values(messages).map((message) => (
                        <Message messages={message} key={message.id} username={users} />
                    ))}
                </div>
            </div>

            <div className="input-wrapper">
                <input type="text" placeholder="Message Channel" />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        channelId: state.channel.channelId,
    };
}

export default connect(mapStateToProps)(ChannelData);