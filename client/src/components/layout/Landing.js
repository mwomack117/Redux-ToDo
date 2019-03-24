import React, { Component } from "react";
import { Link } from "react-router-dom";
import Todo from "../todos/Todo";
import axios from "axios";

class Landing extends Component {
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
    const style = {
      textAlign: "center"
    };
    const { todos } = this.state;
    return (
      <React.Fragment>
        <div style={style}>
          <h1 className="mb-3">Hello, Michael 🤚</h1>
          <h3 className="mb-3">You look great today.</h3>
          <h3 className="lead mb-3">
            Ready to knock off some of these Todos!?!
          </h3>
          <Link to={"/add"}>
            <button className="btn btn-dark btn-md">Add a ToDo</button>
          </Link>
        </div>
        <div>
          <h1 className="display-4 mb-2">Todo List</h1>
          {this.state.todos.map(todo => (
            <Todo
              // key={todos_id}
              todo={todo.todo}
              date={todo.date}
              importance={todo.importance}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
