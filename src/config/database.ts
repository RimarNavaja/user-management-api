import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

// Database connection configuration using TypeORM DataSource
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1010",
  database: "user_management",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

// Initializes the database connection
export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Error initializing database connection:", error);
    throw error;
  }
};
