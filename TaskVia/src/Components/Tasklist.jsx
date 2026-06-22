export default function Tasklist({ tasks, updateTask, deleteTask }) {
  return (
    <ul className="task-list">

      {tasks.map((task, index) => (
       <li
        key={index}
        className={`task-item 
        ${task.completed ? "completed" : ""} 
        ${task.priority === "High" ? "high-priority" : ""}`
  }
>
  <div className="task-left">
    {task.text} ({task.priority} , {task.category})
  </div>

  <div className="task-right">
    <button
      className="action-btn"
      onClick={() =>
        updateTask(
          { ...task, completed: !task.completed },
          index
        )
      }
    >
      {task.completed ? "Undo" : "Complete"}
    </button>

    <button   className="action-btn" onClick={() => deleteTask(index)}>Delete</button>
  </div>
</li>
      ))}
    </ul>
  );
}