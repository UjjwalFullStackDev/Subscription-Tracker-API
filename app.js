import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.route.js';
import subscriptionRouter from './routes/subscription.router.js';
import userRouter from './routes/user.router.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get('/', (req, res) => {
    res.send("Welcome to Subscription Tracker");
})


app.listen(PORT, async () => {
    console.log(`Subscription Tracker Api is running http://localhost:${PORT}`)
    await connectToDatabase();
})

export default app;