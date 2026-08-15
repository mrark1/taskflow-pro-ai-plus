import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",

  initialState: {
    notifications: [],
  },

  reducers: {
    addNotification(state, action) {
      state.notifications.unshift({
        id: Date.now(),
        read: false,
        ...action.payload,
      });
    },

    markAllRead(state) {
      state.notifications =
        state.notifications.map((item) => ({
          ...item,
          read: true,
        }));
    },

    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {
  addNotification,
  markAllRead,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;