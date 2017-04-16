let nextIndex = 0;
export const AddTodo = (text) => {
    const action = {
        type: 'ADD_TODO',
        todo: {
            id: nextIndex,
            text
        }
    };
    nextIndex += 1;
    return action;
};

export const ToggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});
