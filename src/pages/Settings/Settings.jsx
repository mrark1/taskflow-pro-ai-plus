import "./Settings.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { setTasks } from "../../redux/slices/taskSlice";
import toast from "react-hot-toast";

const Settings = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);
  const tasks = useSelector((state) => state.tasks.tasks);

  const clearTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      dispatch(setTasks([]));
      toast.success("All tasks deleted successfully.");
    }
  };

  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <div className="settings-grid">

        <div className="settings-card">
          <h3>👤 Profile</h3>

          <p><strong>Name:</strong> Arpit Raj Katiyar</p>
          <p><strong>Role:</strong> Frontend Developer</p>
          <p><strong>Application:</strong> TaskFlow Pro AI</p>
        </div>

        <div className="settings-card">

          <h3>🌙 Appearance</h3>

          <button
            className="primary-btn"
            onClick={() => dispatch(toggleTheme())}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>

        </div>

        <div className="settings-card">

          <h3>📊 Data</h3>

          <p>Total Tasks: {tasks.length}</p>

          <button
            className="danger-btn"
            onClick={clearTasks}
          >
            Clear All Tasks
          </button>

        </div>

        <div className="settings-card">

          <h3>ℹ About</h3>

          <p>TaskFlow Pro AI</p>

          <p>Version 1.0.0</p>

          <p>
            Built with React, Redux Toolkit,
            Vite and Vitest.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Settings;