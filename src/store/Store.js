import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./project/ProjectSlise";

export const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
});
