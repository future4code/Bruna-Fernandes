import express from 'express'
import { UserController } from "../Controller/UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/users", userController.createController)



// userRouter.get("/getAll", userController.getAllUsersController)
// userRouter.get("/:id", userController.getUserByIdController)