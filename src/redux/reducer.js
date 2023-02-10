// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
//     { id: 2, name: "Learn React", completed: true, priority: "Medium" },
//     { id: 3, name: "Learn JS", completed: false, priority: "Low" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/ADD_TODO":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     case "filters/SEARCH_FILTER_CHANGE":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default rootReducer;

// * ------------------------------

import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

import { combineReducers } from "@reduxjs/toolkit";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
