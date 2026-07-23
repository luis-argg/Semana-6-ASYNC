import { readFile, writeFile } from "fs/promises";  
import { Product } from "../model/Product.js";

export class ProductRepository{
    private route = ".src/data/product.json"

    async getProducts():Promise<Product[]>{
        try {
            const info = await readFile(this.route, "utf-8")

            return JSON.parse(info)
        } catch (error) {
            console.log("ERROR:" + error);
            return [];
            
        }
    
}

    async saveProducts(product: Product[]): Promise<void> {
        try {
            await writeFile(
                this.route,
                JSON.stringify(product, null, 4)
            );

        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

}