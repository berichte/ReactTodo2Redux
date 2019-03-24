import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Add, Create, Clear } from "@material-ui/icons";

const newItemFac = (onNew, setText, setNewItem) => text => {
  onNew({ id: Math.floor(Math.random() * 10000), text, done: false });
  setText("");
  setNewItem(false);
};

const undoFac = (setText, setNewItem) => () => {
  setText("");
  setNewItem(false);
};

const AddToDo = ({ onNew }) => {
  const [newItem, setNewItem] = useState(false);
  const [text, setText] = useState("");

  const onNewItem = newItemFac(onNew, setText, setNewItem);
  const onUndo = undoFac(setText, setNewItem);

  return newItem ? (
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label="Add" onClick={onUndo}>
          <Clear />
        </IconButton>
      </ListItemIcon>
      <ListItemText>
        <TextField
          id="text-input"
          label="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton aria-label="Add" onClick={() => onNewItem(text)}>
          <Add />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ) : (
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label="Add" onClick={() => setNewItem(!newItem)}>
          <Create />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default AddToDo;
