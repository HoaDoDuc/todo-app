// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
//   { id: 2, name: "Learn React", completed: true, priority: "Medium" },
//   { id: 3, name: "Learn JS", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/ADD_TODO":
//       return [...state.todoList, action.payload];

//     default:
//       return state;
//   }
// };

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
  { id: 2, name: "Learn React", completed: true, priority: "Medium" },
  { id: 3, name: "Learn JS", completed: false, priority: "Low" },
];

export const TodoSlice = createSlice({
  initialState,
  name: "todoList",
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
