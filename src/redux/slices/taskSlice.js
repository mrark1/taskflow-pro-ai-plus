import { createSlice } from "@reduxjs/toolkit";

const getSavedTasks = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
      return [];
    }

    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks)
      ? parsedTasks
      : [];
  } catch (error) {
    console.error(
      "Failed to load tasks from localStorage:",
      error
    );

    return [];
  }
};

const initialState = {
  tasks: getSavedTasks(),
};

const saveTasks = (tasks) => {
  try {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  } catch (error) {
    console.error(
      "Failed to save tasks:",
      error
    );
  }
};

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    // ==========================================
    // ADD TASK
    // ==========================================

    addTask: (state, action) => {
      state.tasks.push(action.payload);

      saveTasks(state.tasks);
    },

    // ==========================================
    // UPDATE TASK
    // ==========================================

    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) =>
          task.id === action.payload.id
      );

      if (index !== -1) {
        state.tasks[index] = action.payload;

        saveTasks(state.tasks);
      }
    },

    // ==========================================
    // DELETE TASK
    // ==========================================

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) =>
          task.id !== action.payload
      );

      saveTasks(state.tasks);
    },

    // ==========================================
    // SET TASKS
    // ==========================================

    setTasks: (state, action) => {
      state.tasks = Array.isArray(
        action.payload
      )
        ? action.payload
        : [];

      saveTasks(state.tasks);
    },

    // ==========================================
    // CLEAR ALL TASKS
    // ==========================================

    clearTasks: (state) => {
      state.tasks = [];

      localStorage.removeItem("tasks");
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  setTasks,
  clearTasks,
} = taskSlice.actions;

export default taskSlice.reducer;