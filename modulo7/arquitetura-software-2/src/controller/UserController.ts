import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserImputDTO } from "../types/User";

export class UserController {

  async createController(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      const newUser:UserImputDTO = {name, email, password}
      await userBusiness.createBusiness(newUser);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }

async getAllUsersController (req:Request, res:Response):Promise<void>{
  try {
    const userBusiness =new UserBusiness();
    const users = await userBusiness.getAllUsersBusiness()
    
    res.status(201).send(users);
        
  } catch (error) {
    
  }
}

async getUserByIdController(req:Request, res:Response):Promise<void>{
  try {
    const {id}= req.params
    const userBusiness =new UserBusiness();
    const users = await userBusiness.getUserByIDBusines(id)
    
    res.status(201).send(users);
        
  } catch (error) {
    
  }
}

}
