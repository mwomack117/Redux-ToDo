import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/pages/NotFound";
import AddTodo from "./components/todos/AddTodo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/add" component={AddTodo} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
