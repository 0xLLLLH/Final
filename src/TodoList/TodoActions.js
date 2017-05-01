import v4 from 'uuid/v4';

export const AddTodo = (text) => {
    const action = {
        type: 'ADD_TODO',
        todo: {
            id: v4(),
            text
        }
    };
    return action;
};

export const ToggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});
