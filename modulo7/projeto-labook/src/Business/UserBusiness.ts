import { UserDatabase } from "../Data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { post, user } from "../types/Types"

export class UserBusiness {

  async createBusiness(user:user):Promise<void> {
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
    const newUser:user = {
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
}

export class postBusiness{
  async createPostBusiness(post:post):Promise<void>{
    try {
      const {
        photo,
        description,
        type,
        createdAt,
        } = post
    
    const postId:string = generateId()

    const newPost:post = {
      id:postId,
      photo: post.photo,
      description: post.description,
      type: post.type,
      createdAt: post.createdAt,
      authorId: post.authorId
    }
    await UserDatabase.post(newPost)

  } catch (error:any){
    throw new Error(error.sqlMessage || error.message);
} 
}
}