import { createStore } from "redux";
import todoApp from "./reducers";
const store = createStore(
  todoApp /* preloadedState */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
