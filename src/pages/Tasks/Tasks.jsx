import "./Tasks.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import TaskCard from "../../components/TaskCard/TaskCard";
import TaskModal from "../../components/TaskModal/TaskModal";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";

import {
  addTask,
  updateTask,
  deleteTask,
} from "../../redux/slices/taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();

  // Get tasks from Redux
  const tasks = useSelector(
    (state) => state.tasks.tasks
  );

  const [openModal, setOpenModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  // ==========================================
  // FILTER TASKS
  // ==========================================

  const filteredTasks = tasks.filter((task) => {
    const title = task.title || "";

    return (
      title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (priority
        ? task.priority === priority
        : true) &&
      (status
        ? task.status === status
        : true)
    );
  });

  // ==========================================
  // ADD / UPDATE TASK
  // ==========================================

  const handleSave = (task) => {
    try {
      if (editingTask) {
        dispatch(
          updateTask({
            ...task,
            id: editingTask.id,
          })
        );

        toast.success("Task updated successfully");
      } else {
        const newTask = {
          ...task,
          id:
            task.id ||
            Date.now().toString(),
        };

        dispatch(addTask(newTask));

        toast.success("Task added successfully");
      }

      setEditingTask(null);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  // ==========================================
  // EDIT TASK
  // ==========================================

  const handleEdit = (task) => {
    setEditingTask(task);
    setOpenModal(true);
  };

  // ==========================================
  // DELETE TASK
  // ==========================================

  const handleDelete = (id) => {
    try {
      dispatch(deleteTask(id));

      toast.success("Task deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task");
    }
  };

  // ==========================================
  // OPEN ADD TASK MODAL
  // ==========================================

  const handleAddTask = () => {
    setEditingTask(null);
    setOpenModal(true);
  };

  // ==========================================
  // CLOSE MODAL
  // ==========================================

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingTask(null);
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="tasks-page">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="tasks-header">

        <h1>Tasks</h1>

        <button
          className="add-btn"
          onClick={handleAddTask}
        >
          + Add Task
        </button>

      </div>

      {/* ======================================
          SEARCH
      ====================================== */}

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* ======================================
          FILTERS
      ====================================== */}

      <FilterBar
        priority={priority}
        status={status}
        onPriorityChange={setPriority}
        onStatusChange={setStatus}
      />

      {/* ======================================
          TASK GRID
      ====================================== */}

      <div className="tasks-grid">

        {filteredTasks.length === 0 ? (

          <div className="empty-state">

            <h2>📋</h2>

            <h3>
              {tasks.length === 0
                ? "No Tasks Yet"
                : "No Tasks Found"}
            </h3>

            <p>
              {tasks.length === 0
                ? "Create your first task to get started."
                : "Try changing your search or filters."}
            </p>

            {tasks.length === 0 && (
              <button
                className="add-btn"
                onClick={handleAddTask}
              >
                + Create Task
              </button>
            )}

          </div>

        ) : (

          filteredTasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={() =>
                handleDelete(task.id)
              }
            />

          ))

        )}

      </div>

      {/* ======================================
          TASK MODAL
      ====================================== */}

      <TaskModal
        open={openModal}
        onClose={handleCloseModal}
        editingTask={editingTask}
        onSave={handleSave}
      />

    </div>
  );
};

export default Tasks;