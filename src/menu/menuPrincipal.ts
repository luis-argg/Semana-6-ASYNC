import { rl } from "../utils/ReadLine.js";

export async function menu(){
    let option = 5;
    
    while(true){
        console.log("-- MENU --")
        console.log("1. Create")
        console.log("2. Get")
        console.log("3. Update")
        console.log("4. Deleted")
        console.log("5. GET OUT")
    }

    option = Number(await rl.question("Gimme one valor in the options"));

    if(option === 5){
        return;
    }

    switch(option){
        case 1:
            const id = Number(await rl.question("ID: "))
            const name = (await rl.question("Name: "))
            const lastname = (await rl.question("Lastname: "))
            const age = (await rl.question("Age: "))
            const email = (await rl.question("Email"))
            const password = Number(await rl.question("Password: "))
            const rolText = (await rl.question("Rol: "))
            const estado = (await rl.question("Estado: "))

            

            
        

    }


   

}