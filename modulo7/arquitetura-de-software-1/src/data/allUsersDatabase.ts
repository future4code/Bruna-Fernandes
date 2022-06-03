import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class AllUsersDatabase extends BaseDatabase {

    public async getUser(): Promise<user[]>{
        try{
            const users:user[] = [];
            const result = await AllUsersDatabase.connection()
            .select("*")
            .from("User_Arq");
                for (let user of result){
                    user.push();
                }
            return users;
        }catch (error:any) {
           throw new Error(error.sqlMessage || error.message);
        }
    }
}
    