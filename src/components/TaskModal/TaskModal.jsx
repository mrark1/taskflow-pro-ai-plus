import { useEffect, useState } from "react";
import "./TaskModal.css";

const TaskModal = ({
  open,
  onClose,
  onSave,
  editingTask,
}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({
        title: "",
        description: "",
        priority: "Medium",
        status: "To Do",
      });
    }
  }, [editingTask, open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...task,
      id: editingTask?.id || Date.now(),
    });
  };

  return (
    <div className="modal-overlay">

      <div className="task-modal">

        <h2>
          {editingTask ? "Edit Task" : "Add Task"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Task Title"
            value={task.title}
            required
            onChange={(e) =>
              setTask({
                ...task,
                title: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            rows="4"
            value={task.description}
            onChange={(e) =>
              setTask({
                ...task,
                description: e.target.value,
              })
            }
          />

          <div className="select-group">

            <select
              value={task.priority}
              onChange={(e) =>
                setTask({
                  ...task,
                  priority: e.target.value,
                })
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <select
              value={task.status}
              onChange={(e) =>
                setTask({
                  ...task,
                  status: e.target.value,
                })
              }
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

          </div>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editingTask ? "Update Task" : "Save Task"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default TaskModal;