import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as TodoActions from './TodoActions';

const mapStateToTodoListProps = ({ TodoList }) => ({
    todos: TodoList.todos.filter(todo => (
            TodoList.filter === 'ALL' ||
            (TodoList.filter === 'COMPLETED' && todo.completed) ||
            (TodoList.filter === 'INCOMPLETED' && !todo.completed)
        ))
});
const mapDispatchToTodoListProps = dispatch => ({
    onItemClick: id => dispatch(TodoActions.ToggleTodo(id))
});
const TodoListRenderer = ({todos, onItemClick}) => (
    <ul>
        {todos
            .map(todo => (
                <li
                    onClick={() => {
                        onItemClick(todo.id);
                    }}
                    key={todo.id}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                >{todo.text}</li>
            ))
        }
    </ul>
);
const TodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoListRenderer);

const VisibleTodoList = ({dispatch}) => (
    <div>
        <input
            type="text"
            placeholder="something to do"
            onChange={(e) => {
                this.inputText = e.target.value;
            }}
        />
        <button
            onClick={
                (e) => {
                    dispatch(TodoActions.AddTodo(this.inputText));
                }
            }
        >Add</button>
        <div>
            <a
                onClick={() => {
                    dispatch({
                        type: 'FILTER_ALL'
                    });
                }}
            >ALL</a>;
            <a
                onClick={() => {
                    dispatch({
                        type: 'FILTER_COMPLETED'
                    });
                }}
            >COMPLETED</a>;
            <a
                onClick={() => {
                    dispatch({
                        type: 'FILTER_INCOMPLETED'
                    });
                }}
            >INCOMPLETED</a>
        </div>
        <Link to="/">Go Back Home</Link>
        <TodoList />
    </div>
);

export default connect()(VisibleTodoList);
