import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe [] = [
        new Recipe('A test', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
        new Recipe('Yummyy', 'TOMG so good', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ];

    getRecipes(){
     return this.recipes.slice();   
    }
}