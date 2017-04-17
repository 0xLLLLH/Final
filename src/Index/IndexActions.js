export const ActionTypes = {
    loginAccount: Symbol(),
    registerAccount: Symbol(),
    showError: Symbol()
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

export const showError = (msg) => ({
    type: ActionTypes.showError,
    data: {
        msg
    }
});