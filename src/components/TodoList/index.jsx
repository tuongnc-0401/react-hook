import PropTypes from 'prop-types';
import React from 'react';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}



function TodoList(props) {
        const {todos, onTodoClick} = props;

        function handleTodoList(todo) {
            if (onTodoClick) {
                onTodoClick(todo);
            }
        }

    return (
        <div>
            <ul className="todo-list">
                {
                    todos.map(todo =>(
                        <li 
                        key={todo.id}
                        onClick={() => handleTodoList(todo)}
                        >
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;