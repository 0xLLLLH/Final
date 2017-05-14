import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';

export default [
    {
        path: '/',
        exact: true,
        nav: false,
        sidebar: null,
        main: Index
    },
    {
        path: '/:tab',
        nav: false,
        sidebar: null,
        main: Index
    },
    {
        path: '/todos',
        nav: true,
        sidebar: null,
        main: TodoList
    }
];
