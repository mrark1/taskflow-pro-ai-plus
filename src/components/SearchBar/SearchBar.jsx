import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="task-search"
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;