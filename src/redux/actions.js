export const addTodo = (data) => {
  return {
    type: "todoList/ADD_TODO",
    payload: data,
  };
};
