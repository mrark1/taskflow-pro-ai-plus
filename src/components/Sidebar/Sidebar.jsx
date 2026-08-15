import "./Sidebar.css";
import {
  FiHome,
  FiCheckSquare,
  FiBarChart2,
  FiSettings,
  FiCalendar,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, closeSidebar }) => {
  const menu = [
    { name: "Dashboard", icon: <FiHome />, path: "/" },
    { name: "Tasks", icon: <FiCheckSquare />, path: "/tasks" },
    { name: "Calendar", icon: <FiCalendar />, path: "/calendar" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>TaskFlow</h2>

          <button
            className="close-btn"
            onClick={closeSidebar}
          >
            <FiX />
          </button>
        </div>

        <nav>
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {open && (
        <div
          className="backdrop"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;