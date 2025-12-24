import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskBoard from "./components/TaskBoard";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updates) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskBoard
        tasks={tasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
