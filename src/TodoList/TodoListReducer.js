import {combineReducers} from 'redux';

const todoReducer = (todos, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        if (!todos) {
            return [
                {
                    ...action.todo,
                    completed: false
                }
            ];
        }
        return [
            Object.assign({
                completed: false
            }, action.todo),
            ...todos
        ];
    case 'TOGGLE_TODO':
        return todos.map((todo) => {
            return todo.id === action.id ? {
                ...todo,
                completed: !todo.completed
            } : todo;
        });
    default:
        return todos || [];
    }
};

const filterReducer = (filter, action) => {
    switch (action.type) {
    case 'FILTER_ALL':
        return 'ALL';
    case 'FILTER_COMPLETED':
        return 'COMPLETED';
    case 'FILTER_INCOMPLETED':
        return 'INCOMPLETED';
    default:
        return 'ALL';
    }
};

const todoListReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default todoListReducer;
