import "./FilterBar.css";

const FilterBar = ({
  priority,
  status,
  onPriorityChange,
  onStatusChange,
}) => {
  return (
    <div className="filter-bar">

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
      >
        <option>All</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option>All</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

    </div>
  );
};

export default FilterBar;