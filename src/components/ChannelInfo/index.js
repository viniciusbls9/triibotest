import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';

function ChannelInfo(props) {

    return (
        <div className="header-content">
            <h1># {props.channelName}</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        channelName: state.channel.channelName,
        channelId: state.channel.channelId,
    };
}

export default connect(mapStateToProps)(ChannelInfo);