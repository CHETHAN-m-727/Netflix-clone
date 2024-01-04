import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false,
  homepage: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    resetaAllProjectDetails: () => initialState,

    setCollapsed(state, action) {
      state.collapsed = action.payload;
    },

    setHomepage(state, action) {
      state.homepage = action.payload;
    },
  },
});

export const { setCollapsed, setHomepage } = projectSlice.actions;

export default projectSlice.reducer;
