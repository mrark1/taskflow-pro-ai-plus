import "./AnalyticsChart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", completed: 4 },
  { day: "Tue", completed: 6 },
  { day: "Wed", completed: 5 },
  { day: "Thu", completed: 9 },
  { day: "Fri", completed: 7 },
  { day: "Sat", completed: 10 },
  { day: "Sun", completed: 8 },
];

const AnalyticsChart = () => {
  return (
    <div className="chart-card">
      <h3>Weekly Productivity</h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="completed"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;