import { BaseDatabase } from "./BaseDatabase";
import { post, user } from "../types/Types"


export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async create(user:user): Promise<void>{
   try {
    await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(UserDatabase.TABLE_NAME);
  } catch(error:any){
    throw new Error(error.sqlMessage || error.message)
  }
}
}

export class createPostBusiness extends BaseDatabase{
  private static TABLE_NAMEPOST = "labook_posts";

  async send(post:post):Promise<void>{
    try{
      await UserDatabase.connection
      .insert({
        id:post.id,
        photo:post.photo,
        description:post.description,
        type:post.type,
        author_id:post.authorId
      })
      .into(createPostBusiness.TABLE_NAMEPOST);
    }catch(error:any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
