
import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.delete("/:id", userController.deleteUser);

export default router;

// POST create a new user
router.post("/", userController.createUser);

