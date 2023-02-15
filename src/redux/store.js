import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    todoList: todoListReducer,
  },
});

export default store;
