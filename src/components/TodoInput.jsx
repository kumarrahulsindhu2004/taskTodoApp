import { useState } from "react";

function TodoInput({ addTask }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");


  const toTitleCase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


  const handleAdd = () => {
    if (!text.trim()) {
      setError("Please enter a task");
      return;
    }
    
    const formattedText = toTitleCase(text);
    addTask(formattedText);
    setText("");
    setError(""); // clear error after success
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError(""); // remove error while typing
          }}
          placeholder="Enter task"
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: error ? "1px solid red" : "1px solid #ccc"
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            background: "#6c63ff",
            color: "white",
            border: "none"
          }}
        >
          +
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default TodoInput;