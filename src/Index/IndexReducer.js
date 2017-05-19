import { combineReducers } from 'redux';

import { ActionTypes } from './IndexActions';

const eventArray = (state, action) => {
    let newState = state || [];
    switch (action.type) {
    case ActionTypes.fetchEvent:
    case ActionTypes.loadMore:
        return action.data;
    default:
        return newState;
    }
};

export default combineReducers({
    eventArray
});
