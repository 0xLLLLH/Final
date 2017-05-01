const STORAGE_KEY = 'state';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error('localStorage disabled.');    // eslint-disable-line no-console
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serializedState);
    } catch (e) {
        console.error('localStorage disabled.');    // eslint-disable-line no-console
    }
};
