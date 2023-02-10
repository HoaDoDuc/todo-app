export const addTodo = (data) => {
  return {
    type: "todoList/ADD_TODO",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/SEARCH_FILTER_CHANGE",
    payload: text,
  };
};
