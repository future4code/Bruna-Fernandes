import { Users } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(users:Users): Promise<void> {
    try {  
      await UserDatabase.connection
      .insert({
        id: users.id,
        name: users.name,
        email: users.email,
        password: users.password
      })
      .into(UserDatabase.TABLE_NAME);

    }catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    } 
  }

  getAllUsers =async () =>{
    try{
       const allUsers = await UserDatabase.connection 
       .into(UserDatabase.TABLE_NAME)
       return allUsers[0]
   }   
   catch (error:any) {
       throw new Error(error.sqlMessage || error.message);
   } 
   }

   getUserByID =async(id:string) =>{
       try {
           const userByID = await UserDatabase.connection
           .where({id})
           .into(UserDatabase.TABLE_NAME)
           return userByID

       } catch (error:any) {
           throw new Error(error.sqlMessage || error.message);
       }
   }

}
