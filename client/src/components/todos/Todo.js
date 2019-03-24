import React from "react";

const Todo = ({ todo, importance, date }) => {
  return (
    <div>
      <div className="card card-body mb-3">
        <h4>{todo}</h4>
        <p>{importance}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Todo;
