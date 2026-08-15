import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",

  initialState: {
    search: "",
    priority: "All",
    status: "All",
  },

  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    setPriority(state, action) {
      state.priority = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

    clearFilters(state) {
      state.search = "";
      state.priority = "All";
      state.status = "All";
    },
  },
});

export const {
  setSearch,
  setPriority,
  setStatus,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;