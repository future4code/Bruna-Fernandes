import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { Users, UserImputDTO } from "../types/User"

export class UserBusiness {

  
  async createBusiness(user:UserImputDTO):Promise<void> {
    try {
      const {
     name,
     email,
     password 
    } = user

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    const newUser:Users = {
      id,
      name,
      email,
      password
    }
    await userDatabase.create(newUser)
      
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  } 
    
  }

  async getAllUsersBusiness(){
    try { 
      const userDatabase = new UserDatabase()
      const user = await userDatabase.getAllUsers()
      return user

    
  }catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  } 
  }

  
  async getUserByIDBusines(id:string){
    try { 
      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserByID(id)
      return user

    
  }catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  } 
  }


}
