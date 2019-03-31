import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Todo from "../todos/Todo";
import { connect } from "react-redux";
import { getTodos } from "../../redux/actions/todoActions";

class Landing extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div>
        <div style={style}>
          <h1 className="mb-3">Hello, Michael 🤚</h1>
          <h3 className="mb-3">You look great today.</h3>
          <h3 className="lead mb-3">
            Ready to knock off some of these Todos!?!
          </h3>
          <h4>Today's Date:</h4>
          <h3 className="text-primary">
            {moment().format("MMMM Do YYYY, h:mm")}
          </h3>
          <Link to={"/add"}>
            <button className="btn btn-dark btn-md mb-4">Add a ToDo</button>
          </Link>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <h1 className="display-4 mb-2 text-center text-primary">Todo List</h1>
          {this.props.todos.todos.map(todo => (
            <Todo
              key={todo._id}
              todo={todo.todo}
              id={todo._id}
              date={todo.date}
              importance={todo.importance}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { getTodos }
)(Landing);
