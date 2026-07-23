import { readFile, writeFile } from "fs/promises";
import { User } from "../model/User.js";

export class UserRepository{
    //Damos la ruta de donde se almacenara mi file users.json
    private route = "./src/data/users.json"

    //Traer los usuario so mosstrar la informacion/datos
    async getUsers():Promise<User[]>{
        try {
            const info = await readFile(this.route, "utf-8")

            return JSON.parse(info)
        } catch (error) {
            console.log("da error we");
            console.log(error)
            return [];
            
        }

    }

    //Metodo para guardar ususarios o escribir datos
    async saveUsers(user:User[]): Promise<void>{
        try {
            await writeFile(
                this.route,
                JSON.stringify(user,null,4)
            );
            
        } catch (error) {
            console.log("da error we")
            console.log(error)
            
        }

    }

}