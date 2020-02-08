import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../partials/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeSelected: any = new EventEmitter<RecipeModel>();

    private recipes: RecipeModel[] = [
        new RecipeModel(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new IngredientModel('Meat', 1),
                new IngredientModel('French Fries', 20),
            ]),
        new RecipeModel('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new IngredientModel('Buns', 2),
                new IngredientModel('Meat', 1),
            ]),
    ];

    constructor() {
    }

    getRecipes(): Array<RecipeModel> {
        return this.recipes.slice();
    }
}
