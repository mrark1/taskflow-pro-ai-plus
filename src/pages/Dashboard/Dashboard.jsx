import "./Dashboard.css";

import { useSelector } from "react-redux";

import {
  FiCheckCircle,
  FiClock,
  FiList,
  FiTrendingUp,
} from "react-icons/fi";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  // Get tasks from Redux
  const tasks = useSelector((state) => state.tasks.tasks);

  // Task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const todoTasks = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  // Chart data
  const chartData = [
    {
      name: "To Do",
      value: todoTasks,
    },
    {
      name: "Progress",
      value: inProgressTasks,
    },
    {
      name: "Done",
      value: completedTasks,
    },
  ];

  // Latest 5 tasks
  const recentTasks = [...tasks].slice(-5).reverse();

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Here's an overview of your tasks.</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <FiList className="stat-icon blue" />

          <h3>Total Tasks</h3>

          <span>{totalTasks}</span>
        </div>

        <div className="stat-card">
          <FiCheckCircle className="stat-icon green" />

          <h3>Completed</h3>

          <span>{completedTasks}</span>
        </div>

        <div className="stat-card">
          <FiClock className="stat-icon orange" />

          <h3>In Progress</h3>

          <span>{inProgressTasks}</span>
        </div>

        <div className="stat-card">
          <FiTrendingUp className="stat-icon purple" />

          <h3>To Do</h3>

          <span>{todoTasks}</span>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="dashboard-grid">

        {/* Chart */}
        <div className="chart-card">

          <h2>Task Overview</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

        {/* Recent Tasks */}
        <div className="recent-card">

          <h2>Recent Tasks</h2>

          {recentTasks.length === 0 ? (
            <p>No tasks available.</p>
          ) : (
            recentTasks.map((task) => (
              <div
                className="recent-task"
                key={task.id}
              >
                <h4>{task.title}</h4>

                <span>{task.status}</span>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;