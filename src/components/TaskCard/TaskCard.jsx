import "./TaskCard.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">

      <div className="task-top">

        <h3>{task.title}</h3>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

      </div>

      <p>{task.description}</p>

      <div className="task-bottom">

        <span>{task.status}</span>

        <div className="actions">

          <button onClick={() => onEdit(task)}>
            <FiEdit2 />
          </button>

          <button onClick={() => onDelete(task.id)}>
            <FiTrash2 />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskCard;