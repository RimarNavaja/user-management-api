
import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({ success: false, message: "Invalid user ID" });
                return;
            }

            const result = await this.userService.deleteUser(id);

            if (!result) {
                res.status(404).json({ success: false, message: "User not found" });
                return;
            }

            res.status(200).json({ success: true, message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Failed to delete user", error: error.message });
        }
    };
}

createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const user = await this.userService.createUser(userData);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create user", error: error.message });
    }
};

getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        
        const { users, total } = await this.userService.getAllUsers(page, limit);
        
        res.status(200).json({
            success: true,
            data: users,
            pagination: {
                currentPage: page,
                itemsPerPage: limit,
                totalItems: total,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch users", error: error.message });
    }
};

getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const user = await this.userService.getUserById(id);
        
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch user", error: error.message });
    }
};


