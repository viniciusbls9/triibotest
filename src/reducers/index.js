import { combineReducers } from 'redux';
import ChannelReducer from './ChannelReducer';

export default combineReducers({
    channel: ChannelReducer
});