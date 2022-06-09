import { Request, Response } from "express";
import { AllUsersBusiness } from "../business/allUsersBusiness";

export class AllUsersController {
    public async getUser (req: Request, res: Response): Promise<void>{
        try {
            const users = await new AllUsersBusiness().getUsers();
            res.send(users).status (200);
        } catch (error:any){
     res.status(400).send(error.sqlMessage || error.message);
}
}
}
