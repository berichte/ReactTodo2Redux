import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Done, DoneOutline } from "@material-ui/icons";

const ToDoItem = ({ id, text, done }) => (
  <ListItem>
    <ListItemIcon>{done ? <Done /> : <DoneOutline />}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default ToDoItem;
