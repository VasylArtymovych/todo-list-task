import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks/modal';
import React, { memo } from 'react';
import { ActionTypes, IDispatch, ITodo } from 'types';

interface TodoItemProps {
  todo: ITodo;
  dispatch: IDispatch;
}

// Use memo to prevent render all todos when add or delete one!!!
const TodoItem: React.FC<TodoItemProps> = memo(({ todo, dispatch }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleChangeStatus = () => {
    dispatch({ type: ActionTypes.TOGGLE_STATUS, payload: todo });
  };

  return (
    <>
      <tr data-id={todo.id} onClick={openModal}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.text}</td>
        <td>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={handleChangeStatus}
            onClick={(e: React.SyntheticEvent) => {
              e.stopPropagation();
            }}
          />
        </td>
      </tr>

      <Modal isOpen={isOpen} onCloseModal={closeModal} content={todo} />
    </>
  );
});

export default TodoItem;
