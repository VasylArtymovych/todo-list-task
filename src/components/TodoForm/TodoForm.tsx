import React, { useState } from 'react';
import { useTodos } from 'hooks';
import { ActionTypes } from 'types';
import { titleInputStyle, descrInputStyle } from 'utils';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length === 0 || text.length === 0) {
      setError(true);
    } else {
      const todoData = {
        title,
        text,
      };
      dispatch({ type: ActionTypes.CREATE, payload: todoData });
      setTitle('');
      setText('');
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputWraper">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Enter title"
          className="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          style={{ border: titleInputStyle(error, title) }}
        />
        {error && title.length === 0 ? (
          <p className="error">This field is empty</p>
        ) : (
          ''
        )}
      </div>

      <div className="inputWraper">
        <label htmlFor="title" className="label">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={text}
          placeholder="Enter description"
          className="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
          style={{ border: descrInputStyle(error, text) }}
        />
        {error && text.length === 0 ? (
          <p className="error">This field is empty</p>
        ) : (
          ''
        )}
      </div>

      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
