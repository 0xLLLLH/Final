import Auth from '../Auth/Auth';
import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';
import Question from '../Question/Question';

export default [
    {
        path: '/question/:questionId',
        main: Question
    },
    {
        path: '/:tab',
        main: Auth
    },
    {
        path: '/todos',
        exact: true,
        main: TodoList,
        auth: true
    },
    {
        path: '/',
        exact: true,
        main: Index
    },
];
