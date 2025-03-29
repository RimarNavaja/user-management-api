import express from 'express';
import userRoutes from './routes/users';

const app = express();
app.use(express.json());

// Register user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
