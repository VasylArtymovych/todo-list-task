import { useTodos } from 'hooks';
import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
  const { state, dispatch } = useTodos();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
