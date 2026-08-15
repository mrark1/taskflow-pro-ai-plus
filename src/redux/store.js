import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./slices/taskSlice";
import filterReducer from "./slices/filterSlice";
import notificationReducer from "./slices/notificationSlice";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
    notifications: notificationReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});