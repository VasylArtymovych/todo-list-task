import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks/modal';
import React from 'react';
import { ActionTypes, IDispatch, ITodo } from 'types';

interface TodoItemProps {
  todo: ITodo;
  dispatch: IDispatch;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, dispatch }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleChangeStatus = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch({ type: ActionTypes.TOGGLE_STATUS, payload: todo });
  };

  return (
    <>
      <tr onClick={openModal}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.text}</td>
        <td>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => {}}
            onClick={handleChangeStatus}
          />
        </td>
      </tr>

      <Modal isOpen={isOpen} onCloseModal={closeModal} content={todo} />
    </>
  );
};

export default TodoItem;
