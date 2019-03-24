import React, { Component } from "react";
import Todo from "./Todo";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios.get("/api/todos").then(response => {
      this.setState({ todos: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4 mb-2">Todo List</h1>
        {this.state.todos.map(todo => (
          <Todo key={todo._id} />
        ))}
      </div>
    );
  }
}
export default TodoList;
