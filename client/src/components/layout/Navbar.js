import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link
            style={{
              fontSize: "1.6em"
            }}
            className="navbar-brand mr-auto"
            to="/"
          >
            Mern Todo App
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
