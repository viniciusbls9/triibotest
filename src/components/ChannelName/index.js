import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import api from '../../services/api.json';

import './styles.css';

function Sidebar(props) {
    const [channelName, setChannelName] = useState([]);
    const [unRead, setUnRead] = useState([]);

    useEffect(() => {
        // api.messages.map(item => {
        //     if (item.is_unread) {
        //         setUnRead(item.is_unread);
        //     }
        // });


        // function agruparPor(objetoArray, propriedade) {
        //     return objetoArray.reduce(function (acc, obj) {
        //         let key = obj[propriedade];
        //         if (!acc[key]) {
        //             acc[key] = [];
        //         }
        //         acc[key].push(obj);
        //         return acc;
        //     }, {});
        // }

        // let grupodePessoas = agruparPor(abc, 'channel_id');




        // mapear.filter(item => {
        //     if(item) {
        //         return console.log(item);
        //     }
        // })




        setChannelName(api.channels);

    }, [props.channelId]);

    const handleChannelName = (channel) => {
        props.setChannelName(channel.name);
        props.setChannelId(channel.id);
    }

    return (
        <div className="sidebar-content">
            <h2>XYZ Company</h2>

            <h3>Channels</h3>

            {channelName.map(channel => (
                <div className="channel-name" key={channel.id}>
                    <button onClick={() => handleChannelName(channel)}>
                        <span># {channel.name}</span>
                        <div className="messages-unread">
                            <span>{unRead}</span>
                        </div>
                    </button>
                </div>
            ))}

        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        channelName: state.channel.channelName,
        channelId: state.channel.channelId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChannelName: (newChannelName) => dispatch({
            type: 'SET_CHANNELNAME',
            payload: { channelName: newChannelName }
        }),

        setChannelId: (newChannelId) => dispatch({
            type: 'SET_CHANNELID',
            payload: { channelId: newChannelId }
        }),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);