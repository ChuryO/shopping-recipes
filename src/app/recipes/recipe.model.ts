import {IngredientModel} from '../partials/ingredient.model';

export class RecipeModel {
    constructor(public name: string, public description: string, public imagePath: string, public ingredients: IngredientModel[]) {
    }
}
