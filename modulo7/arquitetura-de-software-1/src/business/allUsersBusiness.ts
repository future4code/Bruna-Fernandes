import { AllUsersDatabase } from "../data/allUsersDatabase";
import { user } from "../types/user";

export class AllUsersBusiness{
    public async getUsers():Promise<user[]> {
        return await new AllUsersDatabase().getUser();
    }
}

