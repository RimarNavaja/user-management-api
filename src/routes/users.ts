
import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.delete("/:id", userController.deleteUser);

export default router;

// POST create a new user
router.post("/", userController.createUser);

// GET all users
router.get("/", userController.getAllUsers);

// GET a specific user by ID
router.get("/:id", userController.getUserById);

