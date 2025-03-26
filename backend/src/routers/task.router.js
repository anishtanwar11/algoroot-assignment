import Router from "express";
import { Task } from "../models/task.model.js";

const router = Router();

// Router for create new task
router.post("/create", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const task = new Task({
      title,
      description,
      completed: false,
    });

    await task.save();

    return res.status(200).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Router for update task
router.patch("/update/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description } = req.body;

    if (!taskId) return res.status(400).json({ Message: "Task ID required" });

    if (!title && !description)
      return res.status(400).json({
        message:
          "At least one field (title or description) is required for update",
      });

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description },
      { new: true } // Ensures the updated document is returned
    );

    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    return res.status(200).json({
      message: "Task update successfully!",
      updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Router for chande status of task
router.patch("/status/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Toggle the task
    task.completed = !task.completed;

    await task.save();

    return res.status(200).json({
      message: `Task marked as ${task.completed ? "completed" : "incomplete"}!`,
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Router for delete task
router.delete("/delete/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);

    return res.status(200).json({
      message: "Task deleted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Router for get all task
router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    if (!tasks) return res.status(404).json({ message: "No tasks found" });

    return res.status(400).json({
      message: "Tasks retrieved successfully!",
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default router;
