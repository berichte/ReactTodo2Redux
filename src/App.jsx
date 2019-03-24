import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>ToDo</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
