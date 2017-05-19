import { combineReducers } from 'redux';

import { ActionTypes } from './IndexActions';

const eventArray = (state, action) => {
    let newState = state || [];
    switch (action.type) {
    case ActionTypes.fetchEvent:
        return action.data.concat(state);
    case ActionTypes.loadMore:
        return state.concat(action.data);
    default:
        return state || [];
    }
};

export default combineReducers({
    eventArray
});
