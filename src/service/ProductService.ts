import { ProductRepository } from "../data/ProductsRepository.js";
import { Product } from "../model/Product.js";

export class ProductService{
    
    private repository = new ProductRepository;

    //Listar
    async listProducts():Promise<Product[]>{
        return await this.repository.getProducts();
    }

    //Crear
    async saveProducts(product:Product):Promise<void>{
        try {
            const products = await this.repository.getProducts();

            const exists = products.some(pro => pro.id === pro.id)
            if(exists){
                console.log("Already exists some product with that ID")
                return;
            }

            products.push(product);
            await this.repository.saveProducts(products);

            console.log("Product created successfully")
        } catch (error) {
            console.log("ERROR " + error)
        }

    }

    //Actualizar
    async updateProducts(product:Product):Promise<void>{
        try {
            const products = await this.repository.getProducts();
            const index = products.findIndex(pro => pro.id === pro.id)

            if(index === -1){
                console.log("This product doesnt exist")
                return;
            }

            products[index] = product

            await this.repository.saveProducts(products)
            console.log("Product updated")

        } catch (error) {
            console.log("You couldnt update this product")
            console.log(error)            
        }
    }

    //Eliminar
    async deleteProducts(id:number):Promise<void>{
        try {
            const products= await this.repository.getProducts();
            const newProducts = products.filter(pro => pro.id !== pro.id)
            
            if(newProducts.length === products.length){
                false;
            }

            await this.repository.saveProducts(newProducts)
            console.log("Product deleted");
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }
} 