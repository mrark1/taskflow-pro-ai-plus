import "./Analytics.css";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];

const Analytics = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

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

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const mediumPriority = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const lowPriority = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const statusData = [
    {
      name: "Completed",
      value: completedTasks,
    },
    {
      name: "To Do",
      value: todoTasks,
    },
    {
      name: "In Progress",
      value: inProgressTasks,
    },
  ];

  const priorityData = [
    {
      name: "High",
      tasks: highPriority,
    },
    {
      name: "Medium",
      tasks: mediumPriority,
    },
    {
      name: "Low",
      tasks: lowPriority,
    },
  ];

  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>Analytics</h1>
        <p>
          Overview of your productivity and task performance.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <span>{totalTasks}</span>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <span>{completedTasks}</span>
        </div>

        <div className="stat-card">
          <h3>To Do</h3>
          <span>{todoTasks}</span>
        </div>

        <div className="stat-card">
          <h3>Completion</h3>
          <span>{completionRate}%</span>
        </div>

      </div>

      <div className="charts-grid">

        <div className="chart-card">

          <h3>Task Status</h3>

          {totalTasks === 0 ? (
            <div className="empty-chart">
              No data available
            </div>
          ) : (
            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <PieChart>

                <Pie
                  data={statusData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>
            </ResponsiveContainer>
          )}

        </div>

        <div className="chart-card">

          <h3>Priority Distribution</h3>

          {totalTasks === 0 ? (
            <div className="empty-chart">
              No data available
            </div>
          ) : (
            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <BarChart
                data={priorityData}
              >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="tasks"
                  fill="#2563eb"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>
          )}

        </div>

      </div>

    </div>
  );
};

export default Analytics;