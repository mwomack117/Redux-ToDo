import React, { Component } from "react";
import Moment from "react-moment";
import "./todo.css";
import { deleteTodo } from "../../redux/actions/todoActions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    const { todo, importance, date } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            <h2 className="text-primary">
              {todo}
              <i
                onClick={() => this.props.deleteTodo(this.props.id)}
                className="fas fa-times"
              />
            </h2>
          </div>
          <p className="importance">
            {importance} {date}
          </p>
          {/* <Moment format="DD/MM">{this.props.date} </Moment> */}
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
  { deleteTodo }
)(Todo);
