import { ActionTypes } from "./actions";

const {
  ADDING_TODO_CANCEL,
  ADDING_TODO_CONFIRM,
  ADDING_TODO_START,
  ADDING_TODO_TEXT_UPDATE,
  DELETE_TODO,
  CHECK_TODO,
  UNCHECK_TODO
} = ActionTypes;

const initalAddingTodo = () => ({
  active: false,
  item: {
    text: "",
    done: false
  }
});

const initialState = {
  addingTodo: initalAddingTodo(),
  list: [
    { id: 0, text: "laundry", done: false },
    { id: 1, text: "dishes", done: false },
    { id: 2, text: "shopping", done: false }
  ]
};
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TODO_CONFIRM: {
      return {
        ...state,
        list: [...state.list, action.todo],
        addingTodo: initalAddingTodo()
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        list: state.list.filter(({ id }) => action.id !== id)
      };
    }
    case CHECK_TODO: {
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.id ? { ...item, done: true } : item
        )
      };
    }
    case UNCHECK_TODO: {
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.id ? { ...item, done: false } : item
        )
      };
    }
    case ADDING_TODO_START: {
      return {
        ...state,
        addingTodo: { ...state.addingTodo, active: true }
      };
    }
    case ADDING_TODO_TEXT_UPDATE: {
      return {
        ...state,
        addingTodo: {
          ...state.addingTodo,
          item: { ...state.addingTodo.item, text: action.text }
        }
      };
    }
    case ADDING_TODO_CANCEL: {
      return {
        ...state,
        addingTodo: initalAddingTodo()
      };
    }
    default:
      return state;
  }
};

export default TodoReducer;
