import { createContext, useReducer, Dispatch } from 'react';
import { ITodo, IState, TodoActions, ActionTypes } from 'types';

function todosReducer(state: IState, action: TodoActions): IState {
  switch (action.type) {
    case ActionTypes.CREATE:
      let todo: ITodo = {
        id: state.id,
        title: action.payload.title,
        text: action.payload.text,
        status: false,
      };
      return { todos: [...state.todos, todo], id: state.id++ };

    case ActionTypes.TOGGLE_STATUS:
      let updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
      );
      return { ...state, todos: updatedTodos };

    default:
      throw new Error('Unknown action type.');
  }
}

const initialState = {
  todos: [],
  id: 0,
};

interface ProviderProps {
  children: React.ReactNode;
}

let todosContext = createContext<{
  state: IState;
  dispatch: Dispatch<TodoActions>;
}>({
  state: { ...initialState },
  dispatch: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <todosContext.Provider value={{ state, dispatch }}>
      {children}
    </todosContext.Provider>
  );
};

export default Provider;
export { todosContext };
