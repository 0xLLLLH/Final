import Auth from '../Auth/Auth';
import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';
import Question from '../Question/Question';
import Home from '../Home/Home';

export default [
    {
        path: '/question/:questionId',
        main: Question
    },
    {
        path: '/home',
        exact: true,
        main: Home,
        auth: true
    },
    {
        path: '/todos',
        exact: true,
        main: TodoList,
        auth: true
    },
    {
        path: '/:tab',
        main: Auth
    },
    {
        path: '/',
        exact: true,
        main: Index
    },
];
