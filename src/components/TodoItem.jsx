import React from "react";
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

const ToDoItem = ({ id, text, done, onDone, onUndone, onDelete }) => (
  <ListItem>
    <ListItemIcon>
      {done ? (
        <IconButton aria-label="done" onClick={() => onDone(id)}>
          <CheckCircleOutline />
        </IconButton>
      ) : (
        <IconButton aria-label="undone" onClick={() => onUndone(id)}>
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
);

export default ToDoItem;
