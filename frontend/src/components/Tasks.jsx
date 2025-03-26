import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/api"; // Ensure this is correctly imported

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/task/all`
        );
        console.log("Response:", response.data);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.completed ? "Completed ✅" : "Pending ❌"}</p>
            </li>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
