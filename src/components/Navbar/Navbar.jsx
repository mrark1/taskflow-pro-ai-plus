import "./Navbar.css";

import { useState } from "react";
import { FiBell, FiMenu, FiSearch } from "react-icons/fi";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Navbar = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="navbar">
      {/* Mobile Menu */}
      <button
        className="mobile-menu-btn"
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
        type="button"
      >
        <FiMenu />
      </button>

      {/* Left Section */}
      <div className="navbar-left">
        <h2 className="logo">TaskFlow Pro</h2>
      </div>

      {/* Center Search */}
      <div
        className={`navbar-center ${
          showMobileSearch ? "mobile-search-active" : ""
        }`}
      >
        <div className="search-box">
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Mobile Search */}
        <button
          className="mobile-search-btn"
          onClick={() => setShowMobileSearch((prev) => !prev)}
          aria-label="Search tasks"
          type="button"
        >
          <FiSearch />
        </button>

        {/* Theme */}
        <ThemeToggle />

        {/* Notifications */}
        <div className="nav-item">
          <button
            className="icon-btn"
            onClick={() =>
              setShowNotifications((prev) => !prev)
            }
            aria-label="Notifications"
            type="button"
          >
            <FiBell />
          </button>

          {showNotifications && (
            <NotificationDropdown
              onClose={() => setShowNotifications(false)}
            />
          )}
        </div>

        {/* Profile */}
        <div className="nav-item">
          <button
            className="profile-avatar"
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
            aria-label="Open profile menu"
            type="button"
          >
            AR
          </button>

          {showProfile && (
            <ProfileDropdown
              onClose={() => setShowProfile(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;