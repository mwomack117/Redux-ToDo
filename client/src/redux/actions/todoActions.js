import { ADD_TODO, DELETE_TODO, GET_TODOS } from "./types";
import axios from "axios";

export const addTodo = todo => async dispatch => {
  const res = await axios.post("/api/todos", todo);
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
};

export const getTodos = () => async dispatch => {
  const res = await axios.get("/api/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`/api/todos/task/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};
