import React from "react";
import { connect } from "react-redux";
import { List, Paper } from "@material-ui/core";
import ToDoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = ({ todos, addTodo, deleteTodo, doTodo }) => {
  return (
    <Paper style={{ margin: "10%" }}>
      <List>
        <React.Fragment>
          {todos.map(id => (
            <ToDoItem key={id} id={id} />
          ))}
        </React.Fragment>
        <React.Fragment>
          <AddTodo />
        </React.Fragment>
      </List>
    </Paper>
  );
};

const mapState = ({ todos }) => ({
  todos: todos.list.map(({ id }) => id)
});

export default connect(mapState)(TodoList);
