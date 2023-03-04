import React from 'react';
import { useTodos } from 'hooks';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodos();

  return (
    <>
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
    </>
  );
};

export default TodoList;
