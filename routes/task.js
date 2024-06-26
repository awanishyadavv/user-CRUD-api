import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middelwares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/myTasks", isAuthenticated, getMyTask);
router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);
export default router;  