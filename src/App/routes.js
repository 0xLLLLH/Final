import Auth from '../Auth/Auth';
import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';

export default [
    {
        path: '/',
        exact: true,
        sidebar: null,
        main: Index
    },
    {
        path: '/todos',
        exact: true,
        sidebar: null,
        main: TodoList,
        auth: true
    },
    {
        path: '/:tab',
        sidebar: null,
        main: Auth
    }
];
