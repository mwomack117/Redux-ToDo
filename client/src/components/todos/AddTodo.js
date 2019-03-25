import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import RadioFormInput from "../common/RadioFormInput";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

class AddTodo extends Component {
  state = {
    todo: "",
    importance: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { todo, importance } = this.state;

    if (todo === "") {
      this.setState({ errors: { todo: "Todo is required" } });
      setTimeout(() => {
        this.toggleError();
      }, 3000);
      return;
    }
    if (importance === "") {
      this.setState({ errors: { importance: "Pick level of importance" } });
      setTimeout(() => {
        this.toggleError();
      }, 3000);
      return;
    }

    const newTodo = {
      todo,
      importance
    };

    this.props.addTodo(newTodo);

    // axios
    //   .post("/api/todos", newTodo)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // Clear State
    this.setState({
      todo: "",
      importance: "",
      errors: {}
    });
  };

  toggleError() {
    this.setState({ errors: {} });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onChangeRadio = e => {
    this.setState({
      importance: e.target.value
    });
  };

  render() {
    const style = {
      width: "70%",
      margin: "0 auto",
      marginTop: "30px",
      opacity: "0.7"
    };
    return (
      <div className="add-todo">
        <div className="dark-overlay">
          <div className="container">
            <div className="card" style={style}>
              <h3 className="card-title text-center mt-3">Add a todo</h3>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <div>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.todo
                        })}
                        placeholder="Add your todo"
                        name="todo"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {this.state.errors && (
                        <div className="invalid-feedback">
                          {this.state.errors.todo}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <div>
                      <legend className="form-label pt-0">Importance</legend>
                      <div>
                        <RadioFormInput
                          type="radio"
                          name="radio"
                          onChange={this.onChangeRadio}
                          value="Kinda Important"
                        />
                        <RadioFormInput
                          type="radio"
                          name="radio"
                          onChange={this.onChangeRadio}
                          value="Pretty Important"
                        />
                        <RadioFormInput
                          type="radio"
                          name="radio"
                          onChange={this.onChangeRadio}
                          value="VERY IMPORTANT!"
                        />

                        {this.state.errors && (
                          <p className="text-danger">
                            {this.state.errors.importance}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
