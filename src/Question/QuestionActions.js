import * as api from './api';

import { showMsg } from '../App/AppActions';

export const ActionTypes = {
    fetchAnswer: Symbol('FETCH_ANSWER'),
    fetchQuestion: Symbol('FETCH_QUESTION'),
    switchSortRule: Symbol('SWITCH_SORT_RULE'),
    loadMore: Symbol('LOAD_MORE'),
    toggleFollow: Symbol('toggleFollow'),
    upvote: Symbol('upvote'),
    devote: Symbol('devote'),
    loadComment: Symbol('loadComment'),
    hideComment: Symbol('hideComment'),
};

const fetchQuestion = (response) => ({
    type: ActionTypes.fetchQuestion,
    data: response
});

const fetchAnswer = (response) => ({
    type: ActionTypes.fetchAnswer,
    data: response
});

export const upvote = ({
    answerId
}) => ({
    type: ActionTypes.upvote,
    data: {
        answerId
    }
});

export const devote = ({
    answerId
}) => ({
        type: ActionTypes.devote,
        data: {
            answerId
        }
    });

export const switchSortRule = () => ({
    type: ActionTypes.switchSortRule
});

export const toggleFollow = () => ({
    type: ActionTypes.toggleFollow
});

export const loadQuestion = ({
    questionId
}) =>  api.loadQuestion({
        questionId
    }).then(
        (response) => fetchQuestion(response),
        msg => showMsg({
            ...msg,
            type: 'error'
        })
        );

export const loadAnswers = ({
    questionId
}) => api.loadAnswers({
        questionId
    }).then(
        (response) => fetchAnswer(response),
        msg => showMsg({
            ...msg,
            type: 'error'
        })
    );

export const loadMore = ({
    questionId
}) => api.loadAnswers({
        questionId
    }).then((response) => ({
        type: ActionTypes.loadMore,
        data: response
    }));

export const loadComment = ({
    answerId
}) =>
    api.loadComments({
        answerId
    }).then((response) => ({
        type: ActionTypes.loadComment,
        data: {
            answerId,
            comments: response
        }
    }));

export const hideComment = ({
    answerId
}) => ({
    type: ActionTypes.hideComment,
    data: {
        answerId
    }
});
