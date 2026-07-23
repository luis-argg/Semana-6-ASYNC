import { CategoryRepository } from "../data/CategoryRepositor.js";
import { Category } from "../model/Category.js";

export class CategoryService{

    private repository = new CategoryRepository;

    async listCategories():Promise<Category[]>{
        return await this.repository.getCategories();
    }

    async saveCategories(category:Category):Promise<void>{
        try {
            
        } catch (error) {
            
        }

    }
}