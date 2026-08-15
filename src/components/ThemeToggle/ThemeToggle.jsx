import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  return (
    <button
      className="icon-btn"
      onClick={() => dispatch(toggleTheme())}
      title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
    >
      {mode === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggle;