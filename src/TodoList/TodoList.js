import React from 'react';
import {connect} from 'react-redux';
import * as TodoActions from './TodoActions';

const mapStateToTodoListProps = state => ({
    todos: state.todos.filter(todo => (
            state.filter === 'ALL' ||
            (state.filter === 'COMPLETED' && todo.completed) ||
            (state.filter === 'INCOMPLETED' && !todo.completed)
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
        <TodoList />
    </div>
);

export default connect()(VisibleTodoList);
