import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField
} from "@material-ui/core";
import { Add, Create } from "@material-ui/icons";

const AddToDo = ({ onNew }) => {
  const [newItem, setNewItem] = useState(false);
  const [text, setText] = useState("");
  const onNewItem = text => {
    onNew({ id: Math.floor(Math.random() * 10000), text, done: false });
    setText("");
    setNewItem(false);
  };
  return newItem ? (
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label="Add" onClick={() => onNewItem(text)}>
          <Add />
        </IconButton>
      </ListItemIcon>
      <ListItemText>
        <TextField
          id="text-input"
          label="text"
          value={text}
          onChange={e => setText(e.target.value)}
          // margin='normal'
        />
      </ListItemText>
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
