export const ActionTypes = {
    loginAccount: Symbol('action-login-account'),
    registerAccount: Symbol('action-register-account'),
    showError: Symbol('action-showError')
};

export const loginAccount = (userName, password) => ({
    type: ActionTypes.loginAccount,
    data: {
        userName,
        password
    }
});
export const registerAccount = (userName, password) => ({
    type: ActionTypes.registerAccount,
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
