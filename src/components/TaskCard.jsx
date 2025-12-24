import { STATUS } from "../utils/constants";

function TaskCard({ task, onUpdate, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      onDelete(task.id);
    }
  };

  const handleCheckbox = (e) => {
    onUpdate(task.id, {
      status: e.target.checked ? STATUS.DONE : STATUS.TODO,
    });
  };

  return (
    <div className={`card priority-${task.priority.toLowerCase()}`}>
      
      {/* Checkbox + Title */}
      <label className="task-title">
        <input
          type="checkbox"
          checked={task.status === STATUS.DONE}
          onChange={handleCheckbox}
        />
        <span
          style={{
            textDecoration:
              task.status === STATUS.DONE ? "line-through" : "none",
          }}
        >
          {task.title}
        </span>
      </label>

      {/* Due Date */}
      {task.dueDate && <small>Due: {task.dueDate}</small>}

      {/* Priority */}
      <small>Priority: {task.priority}</small>

      {/* Task Status (NEW) */}
      <small className={`status status-${task.status.toLowerCase().replace(" ", "")}`}>
        Status: {task.status}
      </small>

      {/* Status Dropdown */}
      <select
        value={task.status}
        onChange={(e) =>
          onUpdate(task.id, { status: e.target.value })
        }
      >
        {Object.values(STATUS).map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskCard;
