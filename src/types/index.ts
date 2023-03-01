import { Dispatch } from 'react';

export interface ITodo {
  id: number;
  title: string;
  text: string;
  status: boolean;
}

export interface IState {
  todos: ITodo[];
  id: number;
}

export interface IAddTodo {
  title: string;
  text: string;
}

export enum ActionTypes {
  CREATE = 'CREATE',
  TOGGLE_STATUS = 'TOGGLE_STATUS',
}

export type TodoActions =
  | { type: ActionTypes.CREATE; payload: IAddTodo }
  | { type: ActionTypes.TOGGLE_STATUS; payload: ITodo };

export type IDispatch = Dispatch<TodoActions>;
export interface ITodosContext {
  state: IState;
  dispatch: IDispatch;
}
