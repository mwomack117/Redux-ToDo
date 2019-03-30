import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  TOGGLE_TODO
} from "../actions/types";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    default:
      return state;
  }
}
