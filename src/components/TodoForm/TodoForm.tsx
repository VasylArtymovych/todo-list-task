import React, { useState } from 'react';
import { useTodos } from 'hooks';
import { ActionTypes } from 'types';
import { inputStyle } from 'utils';

const TodoForm: React.FC = () => {
  const [formData, setFormData] = useState({ title: '', text: '' });
  const [error, setError] = useState(false);
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };
    const title = target.title.value;
    const text = target.description.value;
    setFormData({ title, text });

    if (title.length === 0 || text.length === 0) {
      setError(true);
    } else {
      const todoData = {
        title,
        text,
      };
      dispatch({ type: ActionTypes.CREATE, payload: todoData });
      setError(false);
      form.reset();
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
          name="title"
          id="title"
          placeholder="Enter title"
          className="input"
          style={{ border: inputStyle(error, formData.title) }}
        />
        {error && formData.title.length === 0 ? (
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
          name="description"
          placeholder="Enter description"
          className="input"
          style={{ border: inputStyle(error, formData.text) }}
        />
        {error && formData.text.length === 0 ? (
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
