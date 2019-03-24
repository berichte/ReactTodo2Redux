import { ActionTypes } from "./actions";

const {
  // ADDING_TODO_CANCEL,
  ADDING_TODO_CONFIRM,
  // ADDING_TODO_START,
  // ADDING_TODO_TEXT_UPDATE,
  DELETE_TODO,
  CHECK_TODO,
  UNCHECK_TODO
} = ActionTypes;

const initialState = {
  list: [
    { id: 0, text: "laundry", done: false },
    { id: 1, text: "dishes", done: false },
    { id: 2, text: "shopping", done: false }
  ]
};
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TODO_CONFIRM: {
      console.log("adding todo", action, state);
      return {
        ...state,
        list: [...state.list, action.todo]
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
    default:
      return state;
  }
};

export default TodoReducer;
