const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
  { id: 2, name: "Learn React", completed: true, priority: "Medium" },
  { id: 3, name: "Learn JS", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/ADD_TODO":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
