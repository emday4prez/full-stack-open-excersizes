import { createStore } from "react-redux";
import anecdoteReducer from "./reducers/anecdoteReducer";

const store = createStore(anecdoteReducer())

export default store;