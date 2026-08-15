import "./ProfileDropdown.css";
import {
  FiUser,
  FiSettings,
  FiMoon,
  FiLogOut,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const ProfileDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [onClose]);

  return (
    <div
      className="profile-dropdown"
      ref={dropdownRef}
    >
      <div className="profile-header">
        <div className="avatar">AR</div>

        <div>
          <h4>Arpit Raj Katiyar</h4>
          <span>Frontend Developer</span>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/");
          onClose();
        }}
      >
        <FiUser />
        Dashboard
      </button>

      <button
        onClick={() => {
          navigate("/settings");
          onClose();
        }}
      >
        <FiSettings />
        Settings
      </button>

      <button
        onClick={() => {
          dispatch(toggleTheme());
          onClose();
        }}
      >
        <FiMoon />
        Toggle Theme
      </button>

      <button
        onClick={() => {
          alert("Logout functionality can be added later.");
          onClose();
        }}
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;