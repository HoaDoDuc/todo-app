// export const todoListSelector = (state) => state.todoList;
export const todoListSelector = (state) => {
  const searchText = filtersSelector(state);
  const filteredTodoList = state.todoList.filter((todo) =>
    todo.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredTodoList;
};

export const filtersSelector = (state) => state.filters.search;

// * ------------------------------

// import { createSelector } from "reselect";

// export const filtersSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => state.todoList;

// export const todosRemainingSelector = createSelector(
//   todoListSelector,
//   filtersSelector,
//   (todoList, searchText) => {
//     const filteredTodoList = todoList.filter((todo) =>
//       todo.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     return filteredTodoList;
//   }
// );
