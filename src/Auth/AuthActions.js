export const ActionTypes = {
    switchTab: Symbol('action-switch-tab')
};

export const switchTab = ({ tab }) => ({
    type: ActionTypes.switchTab,
    data: {
        tab
    }
});
