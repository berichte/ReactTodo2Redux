import React /*, { useState } */ from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Add, Create, Clear } from "@material-ui/icons";

import TodoActions from "../redux/todo/actions";

// const newItemFac = (onNew, setText, setNewItem) => text => {
//   onNew({ id: Math.floor(Math.random() * 10000), text, done: false });
// setText("");
// setNewItem(false);
// };

// const undoFac = (setText, setNewItem) => () => {
//   setText("");
//   setNewItem(false);
// };

const AddToDo = ({
  newItem,
  addingTodoStart,
  onNew,
  textUpdate,
  text,
  cancel
}) => {
  // const [newItem, setNewItem] = useState(false);
  // const [text, textUpdate] = useState("");

  // const onNewItem = newItemFac(onNew /*, textUpdate, addingTodoStart*/);
  // const onUndo = undoFac(textUpdate, addingTodoStart);

  return newItem ? (
    <ListItem>
      <ListItemIcon>
        <IconButton
          aria-label="Add"
          onClick={() => {
            console.log("clicked cancel");
            cancel();
          }}
        >
          <Clear />
        </IconButton>
      </ListItemIcon>
      <ListItemText>
        <TextField
          id="text-input"
          label="text"
          value={text}
          onChange={e => textUpdate(e.target.value)}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton aria-label="Add" onClick={() => onNew(text)}>
          <Add />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ) : (
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label="Add" onClick={addingTodoStart}>
          <Create />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

const mapState = ({ todos }) => ({
  newItem: todos.addingTodo.active,
  text: todos.addingTodo.item.text
});

const mapDispatch = dispatch => ({
  addingTodoStart: () => dispatch(TodoActions.addingTodoStart()),
  textUpdate: text => dispatch(TodoActions.addingTodoTextUpdate(text)),
  cancel: () => dispatch(TodoActions.addingTodosCancel()),
  onNew: text => dispatch(TodoActions.addingTodosConfirm(text))
});
export default connect(
  mapState,
  mapDispatch
)(AddToDo);
