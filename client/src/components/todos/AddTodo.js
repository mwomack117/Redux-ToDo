import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todo: "",
    importance: ""
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
                {/* <form>
                    <div className="form-group row">
                      <label htmlFor="name" className="col-form-label col-md-3">
                        Todo
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="todo"
                          name="todo"
                          value={this.state.name}
                        />
                      </div>
                    </div>

                    
                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form> */}
                <form>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-md-4 col-form-label">
                      Email
                    </label>
                    <div class="col-md-8">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-md-4 pt-0">
                        Importance
                      </legend>
                      <div class="col-md-8">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                          />
                          <label class="form-check-label" for="gridRadios1">
                            First radio
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                          <label class="form-check-label" for="gridRadios2">
                            Second radio
                          </label>
                        </div>
                        <div class="form-check disabled">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios3"
                            value="option3"
                          />
                          <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
