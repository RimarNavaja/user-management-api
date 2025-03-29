// src/services/UserService.ts

async getAllUsers(page: number = 1, limit: number = 10): Promise<{ users: User[], total: number }> {
    const [users, total] = await this.userRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' }
    });
    
    return { users, total };
}

async getUserById(id: number): Promise<User | null> {
    const options: FindOneOptions<User> = { where: { id } };
    return await this.userRepository.findOne(options);
}


User Listing Controller Methods:

// src/controllers/UserController.ts 

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


User Listing Routes:

// src/routes/users.ts

// GET all users
router.get("/", userController.getAllUsers);

// GET a specific user by ID
router.get("/:id", userController.getUserById);

