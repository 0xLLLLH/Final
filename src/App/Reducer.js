import { combineReducers } from 'redux';

import TodoList from '../TodoList/TodoListReducer';
import Index from '../Index/IndexReducer';
import Question from '../Question/QuestionReducer';
import Auth from '../Auth/AuthReducer';

import { ActionTypes } from './AppActions';

const account = (state, action) => {
    switch (action.type) {
    case ActionTypes.fetchUserData:
        return {
            ...action.data,
            isLogedIn: true,
        };
    default:
        return state || {
            isLogedIn: false
        };
    }
};

const message = (state, action) => {
    if (action.type === ActionTypes.showMsg) {
        const { type, msg } = action.data;
        return {
            type,
            msg
        };
    }
    return {
        type: null
    };
};

export default combineReducers({
    account,
    message,
    TodoList,
    Question,
    Auth,
    Index
});
