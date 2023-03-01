import { useContext } from 'react';
import { todosContext } from 'store/Provider';

export const useTodos = () => useContext(todosContext);
