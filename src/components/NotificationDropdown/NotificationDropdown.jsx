import "./NotificationDropdown.css";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

const NotificationDropdown = ({ onClose }) => {
  const dropdownRef = useRef(null);

  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener(
        "mousedown",
        handler
      );
    };
  }, [onClose]);

  const notifications = tasks
    .slice()
    .reverse()
    .slice(0, 5);

  return (
    <div
      className="notification-dropdown"
      ref={dropdownRef}
    >
      <div className="notification-header">
        <h3>Notifications</h3>

        <span>{notifications.length}</span>
      </div>

      {notifications.length === 0 ? (
        <div className="notification-empty">
          <FiClock size={40} />

          <p>No notifications</p>
        </div>
      ) : (
        notifications.map((task) => (
          <div
            className="notification-item"
            key={task.id}
          >
            <div className="notification-icon">
              {task.status === "Completed" ? (
                <FiCheckCircle color="#22c55e" />
              ) : task.priority === "High" ? (
                <FiAlertCircle color="#ef4444" />
              ) : (
                <FiClock color="#2563eb" />
              )}
            </div>

            <div className="notification-content">
              <h4>{task.title}</h4>

              <p>
                {task.status} • {task.priority}
              </p>
            </div>
          </div>
        ))
      )}

      <div className="notification-footer">
        View All Notifications
      </div>
    </div>
  );
};

export default NotificationDropdown;