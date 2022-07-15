import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidPassword, UserNotFound } from "../error/customError";
import { LoginInputDTO, user, UserInputDTO } from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator
const tokenGenerator = new TokenGenerator
const userDatabase = new UserDatabase
const hashManager = new HashManager

export class UserBusiness {
    public createUser = async(input:UserInputDTO): Promise<string> =>{
        try {
            const {name, email, password} = input;
            if (!name || !email || !password){
                throw new CustomError( 400 , "Preencha todos os campos!");
            }
            if (password.length < 6){
                throw new InvalidPassword();
            }
            const id: string = idGenerator.generateID()

            const hashPassword = await hashManager.generateHash(password)

            const user:user ={
                id,
                name,
                email,
                password: hashPassword
            };
            await userDatabase.insertUser(user);
            const token = tokenGenerator.generateToken(id)

            return token
        } catch (error: any){
            throw new CustomError(400, error.message);
        }
    };

    public login = async(input: LoginInputDTO): Promise<string> =>{
        try {
            const { email, password } = input;
        
            if (!email || !password) {
                throw new CustomError(400,"Preencha todos os campos!");
            }
        
            const user = await userDatabase.findUser(email);
                if (!user) {
                    throw new UserNotFound()
                }

            const comparePassword = await hashManager.compareHash(password, user.password)
                if (!comparePassword){
                    throw new InvalidPassword()
                }
            const token = tokenGenerator.generateToken(user.id)

            return token
        } catch (error: any) {
            throw new CustomError(400, error.message);
      }
    };
}