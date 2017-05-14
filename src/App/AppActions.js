import * as api from './api';

export const ActionTypes = {
    fetchUserData: Symbol('action-fetch-user-data'),
    login: Symbol('action-account-login'),
    register: Symbol('action-account-register'),
    showMsg: Symbol('action-show-msg')
};

export const showMsg = data => ({
    type: ActionTypes.showMsg,
    data
});

export const fetchUserData = ({userId}) => ({
    type: ActionTypes.fetchUserData,
    data: {
        userId
    }
});

export const login = ({
    userName,
    password
}) =>
    api.login({
        userName,
        password
    }).then(
        response => fetchUserData(response),
        msg => showMsg({
            ...msg,
            type: 'error'
        })
    );

export const register = ({
    userName,
    password
}) =>
    api.register({
        userName,
        password
    }).then(
        response => fetchUserData(response),
        msg => showMsg({
            ...msg,
            type: 'error'
        })
    );
