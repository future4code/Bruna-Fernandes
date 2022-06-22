import { Request, Response } from "express";
import { postBusiness, UserBusiness } from "../Business/UserBusiness"
import { post, user } from "../types/Types";


export class UserController {

  async createController(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      const newUser:user = {
          name, email, password, id:""}
           await userBusiness.createBusiness(newUser);

      res.status(201).send({ message: "Success!"});

    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export class postController{
  async createPostController(req: Request, res: Response):Promise<void>{
    try {
      const {photo, description, type, createdAt} = req.body;
    
      const postBusiness:any = new postBusiness();
      const newPost:post = {
        photo, description, type, createdAt, id: "",authorId: ""}
        await postBusiness.post(newPost);

        res.status(201).send({ message: "Success!"});
   
  } catch (error) {
    res.status(400).send(error);
  }
} 
}

// async getAllUsersController (req:Request, res:Response):Promise<void>{
//   try {
//     const userBusiness =new UserBusiness();
//     const users = await userBusiness.getAllUsersBusiness()
//     res.status(201).send(users);
//   } catch (error) {
//   }
// }

// async getUserByIdController(req:Request, res:Response):Promise<void>{
//   try {
//     const {id}= req.params
//     const userBusiness =new UserBusiness();
//     const users = await userBusiness.getUserByIDBusines(id)
//     res.status(201).send(users);
//   } catch (error) {
//   }
// }
// }