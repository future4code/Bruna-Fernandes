import {app} from "./app"
import { AllUsersController } from "./controller/allUsersController"
import { UserController } from "./controller/userController"



const userController  = new UserController()
const allUsersController = new AllUsersController ()

app.post("/createUser", userController.createUser)

app.get ("/all", allUsersController.getUser)

