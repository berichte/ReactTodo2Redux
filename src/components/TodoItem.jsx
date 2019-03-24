import React, { memo } from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import {
  RadioButtonUnchecked,
  CheckCircleOutline,
  Delete
} from "@material-ui/icons";

import TodoActions from "../redux/todo/actions";

const ToDoItem = ({ id, text, done, onDone, onUndone, onDelete }) => (
  <ListItem>
    <ListItemIcon>
      {done ? (
        <IconButton aria-label="done" onClick={() => onUndone(id)}>
          <CheckCircleOutline />
        </IconButton>
      ) : (
        <IconButton aria-label="undone" onClick={() => onDone(id)}>
          <RadioButtonUnchecked />
        </IconButton>
      )}
    </ListItemIcon>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => onDelete(id)}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  // <div>
  //   {done ? (
  //     <span onClick={() => onUndone(id)}>Done</span>
  //   ) : (
  //     <span onClick={() => onDone(id)}>Todo</span>
  //   )}

  //   <span> {text}</span>
  // </div>
);

const mapState = ({ todos }, { id }) => {
  const item = todos.list.find(item => item.id === id);
  return item;
};

const mapDispatch = dispatch => ({
  deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
  onDone: id => dispatch(TodoActions.checkTodo(id)),
  onUndone: id => dispatch(TodoActions.uncheckTodo(id))
});

export default connect(
  mapState,
  mapDispatch
)(memo(ToDoItem));
