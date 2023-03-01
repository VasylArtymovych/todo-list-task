import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
