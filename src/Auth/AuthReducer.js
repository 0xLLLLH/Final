import { combineReducers } from 'redux';

import { ActionTypes } from './AuthActions';

const tab = (state, action) => {
    if (action.type === ActionTypes.switchTab) {
        return action.data.tab || 'signin';
    }
    return 'signin';
};

export default combineReducers({
    tab
});
