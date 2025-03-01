import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', authorize, getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.body({ title: "Create user"}));

userRouter.put('/:id', (req, res) => res.body({ title: "Update user"}));

userRouter.delete('/:id', (req, res) => res.body({ title: "Delete user"}));

export default userRouter;