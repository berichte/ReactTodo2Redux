import React, { memo /*useState*/ } from "react";
import { connect } from "react-redux";
import { List, Paper } from "@material-ui/core";
import ToDoItem from "./TodoItem";
import AddTodo from "./AddTodo";

// import TodoActions from "../redux/todo/actions";

// const initialTodos = [
//   { id: 0, text: "laundry", done: false },
//   { id: 1, text: "dishes", done: false },
//   { id: 2, text: "shopping", done: false }
// ];

// const addTodoFac = (todos, setTodos) => todo => setTodos([...todos, todo]);
// const deleteFac = (todos, setTodos) => deleteId =>
//   setTodos(todos.filter(({ id }) => deleteId !== id));
// const doFac = (todos, setTodos) => (id, done) =>
//   setTodos(todos.map(item => (item.id === id ? { ...item, done } : item)));

const TodoList = ({ todos, addTodo, deleteTodo, doTodo }) => {
  // const [_t, setTodos] = useState(initialTodos);
  // const addTodo = addTodoFac(todos, setTodos);
  // const deleteTodo = deleteFac(todos, setTodos);
  // const doTodo = doFac(todos, setTodos);
  return (
    <Paper style={{ margin: "10%" }}>
      <List>
        <React.Fragment>
          {todos.map((/*{*/ id /*, text, done  }*/) => (
            <ToDoItem key={id} id={id} />
          ))}
        </React.Fragment>
        <React.Fragment>
          <AddTodo /* onNew={addTodo} */ />
        </React.Fragment>
      </List>
    </Paper>
  );
};

const mapState = ({ todos }) => ({
  todos: todos.list.map(({ id }) => id)
});

// const mapDispatch = dispatch => ({
//   addTodo: todo => dispatch(TodoActions.addingTodosConfirm(todo)),
//   deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
//   doTodo: (id, done) =>
//     done
//       ? dispatch(TodoActions.checkTodo(id))
//       : dispatch(TodoActions.uncheckTodo(id))
// });

export default connect(
  mapState
  // mapDispatch
)(memo(TodoList));
