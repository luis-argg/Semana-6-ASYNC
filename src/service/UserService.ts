import { UserRepository } from "../data/UserRepository.js";
import { User } from "../model/User.js";

export class UserService{
    private repository = new UserRepository();

    //List
    async list():Promise<User[]>{
        return await this.repository.getUsers();
    }


    //Create
    async save(user:User):Promise<void>{
        try {
            const users = await this.repository.getUsers();

            const exists = users.some(use => use.id === user.id);
            if(exists){
                console.log("Already exists an user with that ID");
                return;
            }

            users.push(user);

            await this.repository.saveUsers(users);

            console.log("User created successfully");
        } catch (error) {
            console.log("ERROR when you save a user we");
            console.log(error)
            
        }
    }

    //Update
    async update(user:User):Promise<void>{
        try {
            const users = await this.repository.getUsers();

            const index = users.findIndex(use => use.id === user.id);

            if(index === -1){
                console.log("This user doesnt exist")
                return;
            }

            users[index] = user;
                
            await this.repository.saveUsers(users)
            console.log("User update")

        } catch (error) {
            console.log("You couldnt update the user")
            console.log(error)
            
        }

    }

    //Delete
    async delete(id:number):Promise<void>{
        try {
            const users = await this.repository.getUsers();

            const newUsers = users.filter(use => use.id !== id);

            if(newUsers.length === users.length){
                false;
            }

            await this.repository.saveUsers(newUsers);
            console.log("User deleted")
            
        } catch (error) {
            
        }
    }

}