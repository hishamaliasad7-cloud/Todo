import { STATUS } from "../utils/constants";
import TaskCard from "./TaskCard";

function TaskBoard({ tasks, onUpdate, onDelete }) {
  const total = tasks.length;
  const doneCount = tasks.filter(t => t.status === STATUS.DONE).length;

  const percentage = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  const count = (status) =>
    tasks.filter((t) => t.status === status).length;

  return (
    <div className="board-layout">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3>Status</h3>

        {/* CIRCULAR GRAPH */}
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              #16a34a ${percentage * 3.6}deg,
              #e5e7eb 0deg
            )`,
          }}
        >
          <div className="circle-inner">
            {percentage}%
          </div>
        </div>

        <p>Todo: {count(STATUS.TODO)}</p>
        <p>In Progress: {count(STATUS.PROGRESS)}</p>
        <p>Done: {count(STATUS.DONE)}</p>
      </aside>

      {/* TASK BOARD */}
      <div className="board">
        {Object.values(STATUS).map((status) => (
          <div className="column" key={status}>
            <h3>{status}</h3>

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))}
          </div>
        ))}
      </div>

    </div>
  );
}

export default TaskBoard;
