import "./KanbanBoard.css";
import TaskCard from "../TaskCard/TaskCard";

const columns = [
  "To Do",
  "In Progress",
  "Completed",
];

const KanbanBoard = ({
  tasks,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="kanban-board">

      {columns.map((column) => (

        <div
          key={column}
          className="kanban-column"
        >

          <h2>{column}</h2>

          {tasks
            .filter(
              (task) =>
                task.status === column
            )
            .map((task) => (

              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))}

        </div>

      ))}

    </div>
  );
};

export default KanbanBoard;