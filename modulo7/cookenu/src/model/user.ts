export interface AuthenticationData {
    id: string
 }

 export type user ={
    id: string
    name: string
    email: string
    password: string
 }

 export interface UserInputDTO {
    name: string,
    email: string,
    password: string
 }

 export interface LoginInputDTO {
    email: string,
    password: string
 }