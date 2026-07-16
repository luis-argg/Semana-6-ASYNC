import { Estado } from "./Estado.js";
import { Rol } from "./Rol.js";

export interface User{
    id:number,
    name: string,
    lastname: string,
    age: number,
    email: string,
    password: string,
    rol: Rol
    estado: Estado

}