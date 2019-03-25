import React, { Component } from "react";
import Moment from "react-moment";
import "./todo.css";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = event => {
    event.preventDefault();

    axios
      .get(`/api/todos/task/${this.props._id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { todo, importance, date, _id } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            <h2 className="text-primary">
              {todo}
              <i onClick={this.handleDelete} className="fas fa-times" />
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

export default Todo;
