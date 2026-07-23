import { rl } from "../utils/ReadLine.js";
import { UserService } from "../service/UserService.js";
import { Rol } from "../model/Rol.js";
import { Estado } from "../model/Estado.js";

const service = new UserService();

export async function menuPrincipal() {
    let option = 5;

    while (true) {
        
        console.log("| MENU |");
        console.log("\n1. Create");
        console.log("2. List");
        console.log("3. Update");
        console.log("4. Deleted");
        console.log("5. GET OUT");
        
        option = Number(await rl.question("Give me a new value for options: "));

        if (option === 5){
            break;
        }

        switch (option) {
            case 1:
                const id = Number(await rl.question("ID: "));
                const name = await rl.question("Name: ");
                const lastname = await rl.question("Lastname: ");
                const age = Number(await rl.question("Age: "));
                const email = await rl.question("Email: ");
                const password = (await rl.question("Password: "));
                const rolText = await rl.question("Rol: ");
                const estadoText = await rl.question("Estado: ");

                await service.save({
                    id,
                    name,
                    lastname,
                    age,
                    email,
                    password,
                    rol: rolText.toUpperCase() as Rol,
                    estado: estadoText.toUpperCase() as Estado
                });

            break;

            case 2:
                console.table(await service.list());
            break;
        }   
    }
}