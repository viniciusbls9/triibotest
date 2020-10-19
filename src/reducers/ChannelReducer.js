const initialState = {
    channelName: 'general',
    channelId: '403',
};

const ChannelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHANNELNAME':
            return { ...state, channelName: action.payload.channelName };
            break;

        case 'SET_CHANNELID':
            return { ...state, channelId: action.payload.channelId };
            break;
    }

    return state;
};

export default ChannelReducer;