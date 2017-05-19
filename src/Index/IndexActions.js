import * as api from './api';

import {showMsg} from '../App/AppActions';

export const ActionTypes = {
    fetchEvent: Symbol('FETCH_EVENT'),
    loadMore: Symbol('LOAD_MORE'),
    showComplete: Symbol('SHOW_COMPLETE'),
};

const fetchEvent = (response) => ({
    type: ActionTypes.fetchEvent,
    data: response
});

export const load = ({
    userId
}) => api.loadEvents({
        userId
    }).then(
        (response) => fetchEvent(response),
        msg => showMsg({
            ...msg,
            type: 'error'
        })
    );

export const loadMore = ({
    userId
}) => api.loadMore({
        userId
    }).then((response) => ({
        type: ActionTypes.loadMore,
        data: response
    }));

export const showComplete = ({
    userId
}) => ({
    type: ActionTypes.showComplete,
    data: {
        userId
    }
});