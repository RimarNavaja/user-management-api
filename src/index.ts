import "reflect-metadata";
import app from "./app";
import { initializeDatabase } from "./config/database";

const PORT = 3000;

const startServer = async () => {
  try {
    // Initialize the database connection
    await initializeDatabase();

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
