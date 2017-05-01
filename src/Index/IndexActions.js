export const ActionTypes = {
    login: Symbol('action-account-login'),
    registerAccount: Symbol('action-account-register'),
    showError: Symbol('action-showError')
};

export const login = (userName, password) => ({
    type: ActionTypes.login,
    data: {
        userName,
        password
    }
});
export const register = (userName, password) => ({
    type: ActionTypes.register,
    data: {
        userName,
        password
    }
});

export const showError = msg => ({
    type: ActionTypes.showError,
    data: {
        msg
    }
});
