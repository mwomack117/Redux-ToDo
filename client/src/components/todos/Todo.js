import React, { Component } from "react";
import "./todo.css";
import { deleteTodo } from "../../redux/actions/todoActions";
import { connect } from "react-redux";
import moment from "moment";
import classnames from "classnames";

class Todo extends Component {
  render() {
    const { todo, importance, date } = this.props;
    const colorLevel = classnames("importance", {
      "text-danger": importance === "VERY IMPORTANT!",
      "text-warning": importance === "Pretty Important"
    });
    return (
      <div>
        <div className="card mb-3" style={{ width: "70%", margin: "0 auto" }}>
          <div className="card-header">
            <h2 className="text-primary">
              {todo}
              <i
                onClick={() => this.props.deleteTodo(this.props.id)}
                className="fas fa-times float-right text-danger"
                style={{ fontSize: "35px" }}
              />
            </h2>
          </div>
          <p className={colorLevel}>
            {importance} Date Added: {moment(date).format("MMM do YY")}
          </p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   todos: state.todos
// });

export default connect(
  null,
  { deleteTodo }
)(Todo);
