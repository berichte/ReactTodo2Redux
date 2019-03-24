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

### Use Redux instead of component state
