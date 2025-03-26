import { useEffect, useState } from "react";
import {
  getTasks,
  deleteTask,
  toggleTaskStatus,
  updateTask,
} from "../utils/api.js";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  const handleToggleStatus = async (taskId) => {
    await toggleTaskStatus(taskId);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
  };

  const handleUpdate = async () => {
    if (editingTask) {
      await updateTask(editingTask, {
        title: updatedTitle,
        description: updatedDescription,
      });
      setEditingTask(null);
      fetchTasks();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {task.title}
              </h3>
              <p className="text-gray-600">{task.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => handleToggleStatus(task._id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                    task.completed
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }`}
                >
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>

                <button
                  onClick={() => handleEdit(task)}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
                >
                  Update Task
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Task Form */}
      {editingTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Update Task
            </h3>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-2"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Update title"
            />
            <textarea
              className="w-full p-2 border rounded-md mb-2"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              placeholder="Update description"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingTask(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
