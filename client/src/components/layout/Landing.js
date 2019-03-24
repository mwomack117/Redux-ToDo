import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div style={style}>
        <h1 className="mb-3">Hello, Michael 🤚</h1>
        <h3 className="mb-3">You look great today.</h3>
        <h3 className="lead mb-3">Ready to knock off some of these Todos!?!</h3>
        <Link to={"/add"}>
          <button className="btn btn-dark btn-md">Add a ToDo</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
