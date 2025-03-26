import { useState } from "react";
import { createTask } from "../utils/api.js";
import { useNavigate } from "react-router-dom";

const CreateTask = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleCreateTask = async () => {
    if (!title.trim()) return; // Prevent empty title submission

    await createTask({ title, description });
    setTitle("");
    setDescription("");
    navigate("/");
    fetchTasks(); // Refresh task list after adding
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Create New Task
      </h3>
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <textarea
        className="w-full p-2 border rounded-md mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button
        onClick={handleCreateTask}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
