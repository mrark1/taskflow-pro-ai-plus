import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h1>📅 Calendar</h1>
        <p>Manage your tasks and deadlines.</p>
      </div>

      <div className="calendar-card">
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>

      <div className="selected-date">
        <h3>Selected Date</h3>
        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
};

export default CalendarPage;