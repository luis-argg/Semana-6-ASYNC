import { readFile, writeFile } from "fs/promises";  
import { Category    } from "../model/Category.js";

export class CategoryRepository{
    private route = ".src/data/category.json"

    async getCategories(): Promise<Category[]> {
     try {
        const info = await readFile(this.route, "utf-8")

        return JSON.parse(info)
        
     } catch (error) {
        console.log("ERROR:" + error)
        return [];
     }
}

    async saveCategories(categories: Category[]):Promise<void>{
        try {
            await writeFile(
                this.route,
                JSON.stringify(categories,null, 4)
            );
        } catch (error) {
            console.log("ERROR:" + error)
            
        }
    }
}