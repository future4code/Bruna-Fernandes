export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}