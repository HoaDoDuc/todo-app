import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    todoList: todoListReducer,
  },
});

export default store;
