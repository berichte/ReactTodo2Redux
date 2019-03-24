export const ActionTypes = {
  DELETE_TODO: "todo/DELETE",
  CHECK_TODO: "todo/CHECK_TODO",
  UNCHECK_TODO: "todo/UNCHECK_TODO",
  ADDING_TODO_START: "todo/ADDING_TODO_START",
  ADDING_TODO_TEXT_UPDATE: "todo/ADDING_TODO_TEXT_UPDATE",
  ADDING_TODO_CANCEL: "todo/ADDING_TODO_CANCEL",
  ADDING_TODO_CONFIRM: "todo/ADDING_TODO_CANCEL"
};

const deleteTodo = id => ({
  type: ActionTypes.DELETE_TODO,
  id
});

const checkTodo = id => ({
  type: ActionTypes.CHECK_TODO,
  id
});

const uncheckTodo = id => ({
  type: ActionTypes.UNCHECK_TODO,
  id
});

const addingTodoStart = () => ({
  type: ActionTypes.ADDING_TODO_START
});

const addingTodoTextUpdate = text => ({
  type: ActionTypes.ADDING_TODO_TEXT_UPDATE,
  text
});

const addingTodosCancel = () => ({
  type: ActionTypes.ADDING_TODO_CANCEL
});

const addingTodosConfirm = text => ({
  type: ActionTypes.ADDING_TODO_CONFIRM,
  text
});

export default {
  deleteTodo,
  checkTodo,
  uncheckTodo,
  addingTodoStart,
  addingTodoTextUpdate,
  addingTodosCancel,
  addingTodosConfirm
};
