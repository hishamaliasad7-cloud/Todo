import { useState } from "react";
import { STATUS, PRIORITY } from "../utils/constants";

function TaskInput({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      priority,
      status: STATUS.TODO,
      dueDate,
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <div className="task-input">
      <input
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        {PRIORITY.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
