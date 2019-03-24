const initialState = [
  { id: 0, text: "laundry", done: false },
  { id: 1, text: "dishes", done: false },
  { id: 2, text: "shopping", done: false }
];
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default TodoReducer;
