# Redux

## setup

1. checkout example app at https://github.com/berichte/ReactTodo2Redux.git
   ```
   git clone https://github.com/berichte/ReactTodo2Redux.git
   ```
2. install dependencies
   ```
   yarn install
   ```
3. start app

   ```
   yarn start
   ```

4. install react developer tools to chrome
   https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

5. activate option 'Highlight Updates' in react dev tools

## Task

Our next task in the awsome Todo list app is to add a counter about how many Tasks have been completed. The counter should even take into account already deleted tasks.

## Add Redux

1. install packages

```
yarn add react-redux
yarn add redux-devtools
```

2. add file ./src/store.js
3. add file ./src/reducers.js
4. add file ./src/actions.js

```javascript
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
```

5. add Provider to index.js, around `<App />`

Alternatively checkout redux1 branch

### Use Redux instead of component state in TodoList

1. add connect to TodoList
   ```
   import { connect } from 'react-redux';
   ```
2. add mapState for todos.list
3. add mapDispatch
4. add action addTodo to mapDispatch and reducer
5. add action deleteTodo to mapDis and reducer
6. add action doTodo to mapDis and reducer

### Use Redux instead of component state in AddTodo

1. add connect
2. add mapState

```javascript
const initialState = {
  addingTodo: {
    active: false,
    item: {
      text: "",
      done: false
    }
  },
  items: []
};
```

3. add mapDispatch
   1. addingTodoStart
   2. textUpdate
   3. cancel
4. bug because onNewItem triggers addNew and textUpdate

### optimize usage

1. ADDING_TODO_CONFIRM in AddingTodo component (use text instead of todo, update action and reducer)
2. connect TodoItem
   1. only prop will be id (TodoList)
   2. map item to TodoItem
   3. copy dispatch props from list to item
3. Still renders everything always 🤔(maybe because of material-ui)
4. use React.memo() for functional components
