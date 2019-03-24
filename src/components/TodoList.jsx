import React, { useState } from "react";
import { List, Paper } from "@material-ui/core";
import ToDoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const initialTodos = [
  { id: 0, text: "laundry", done: false },
  { id: 1, text: "dishes", done: false },
  { id: 2, text: "shopping", done: false }
];

const addTodoFac = (todos, setTodos) => todo => setTodos([...todos, todo]);

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = addTodoFac(todos, setTodos);
  return (
    <Paper style={{ margin: "10%" }}>
      <List>
        <React.Fragment>
          {todos.map(({ id, text, done }) => (
            <ToDoItem key={id} text={text} done={done} id={id} />
          ))}
        </React.Fragment>
        <React.Fragment>
          <AddTodo onNew={addTodo} />
        </React.Fragment>
      </List>
    </Paper>
  );
};

export default TodoList;
