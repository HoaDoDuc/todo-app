import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  search: "",
  priorities: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      // IMMER: state is a proxy object, so we can mutate it directly
      state.search = action.payload;
    },
  }, // => { type: "filters/SEARCH_FILTER_CHANGE" }
});

export const { searchFilterChange } = filtersSlice.actions;
export default filtersSlice.reducer;
