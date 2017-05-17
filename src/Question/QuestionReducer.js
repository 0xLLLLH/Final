import { combineReducers } from 'redux';

import { ActionTypes } from './QuestionActions';

const question = (state, action) => {
    if (action.type === ActionTypes.fetchQuestion) {
        return action.data;
    }
    if (action.type === ActionTypes.toggleFollow) {
        return {
            ...state,
            followed: !state.followed
        }
    }
    return state || {};
};

const sortRule = (state, action) => {
    if (action.type === ActionTypes.switchSortRule) {
        return state === 'TIME' ? 'LIKE' : 'TIME'
    }
    return state || 'LIKE';
}

const answerList = (state, action) => {
    let newState = state || [];
    switch (action.type) {
    case ActionTypes.fetchAnswer:
        return action.data;
    case ActionTypes.loadMore:
        return state.concat(action.data);
    case ActionTypes.upvote:
        return state.map((answer) => (
            answer.id === action.data.answerId && !answer.liked ? {
                ...answer,
                upvote: answer.upvote + 1,
                liked: true,
                disliked: false
            } : answer
        ));
    case ActionTypes.devote:
        return state.map((answer) => (
            answer.id === action.data.answerId ? {
                ...answer,
                upvote: answer.liked ? answer.upvote - 1 : answer.upvote,
                liked: false,
                disliked: true
            } : answer
        ));
    case ActionTypes.loadComment:
        return state.map((answer) => (
            answer.id === action.data.answerId ? {
                ...answer,
                comments: action.data.comments,
            } : answer
        ));
    case ActionTypes.hideComment:
        return state.map((answer) => (
            answer.id === action.data.answerId ? {
                ...answer,
                comments: null,
            } : answer
        ));
    default:
        return state || [];
    }
};

export default combineReducers({
    sortRule,
    question,
    answerList
});
