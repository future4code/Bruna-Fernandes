import { BasDatabase } from "./BaseDatabase";
import { user } from "../model/user";
import { CustomError } from "../error/customError";

export class UserDatabase extends BasDatabase{
    public insertUser = async (user:user) =>{
        try{
            await UserDatabase.connection
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                })
                .into("Cookenu");
        }catch(error: any){
            throw new CustomError(400, error.message)
        }
    };

    public findUser = async (email:string) => {
        try {
            const result = await UserDatabase.connection("Cookenu")
            .select()
            .where({email});

            return result[0];
        }catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };
}