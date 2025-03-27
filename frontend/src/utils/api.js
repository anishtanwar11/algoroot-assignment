import axios from "axios";

const API_BASE_URL =
  "https://algoroot-assignment-backend-six.vercel.app/api/v1/task";

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/all`);
  return response.data.tasks;
};

export const createTask = async (taskData) => {
  const response = await axios.post(`${API_BASE_URL}/create`, taskData);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  const response = await axios.patch(
    `${API_BASE_URL}/update/${taskId}`,
    taskData
  );
  return response.data;
};

export const toggleTaskStatus = async (taskId) => {
  const response = await axios.patch(`${API_BASE_URL}/status/${taskId}`);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_BASE_URL}/delete/${taskId}`);
  return response.data;
};
