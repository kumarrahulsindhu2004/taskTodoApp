function TodoItem({ task, deleteTask, toggleTask }) {
  return (
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    background: "#f1f3ff"
  }}
>
  <div>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(task.id)}
    />
    <span
      style={{
        marginLeft: "10px",
        textDecoration: task.completed ? "line-through" : "none"
      }}
    >
      {task.text}
    </span>
  </div>

  <button
    onClick={() => deleteTask(task.id)}
    style={{
      background: "red",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "6px"
    }}
  >
    X
  </button>
</div>
  );
}

export default TodoItem;