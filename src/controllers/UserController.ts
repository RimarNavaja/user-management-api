createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const user = await this.userService.createUser(userData);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create user", error: error.message });
    }
};
