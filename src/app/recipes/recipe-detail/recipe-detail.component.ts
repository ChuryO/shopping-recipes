import {Component, Input} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {IngredientModel} from '../../partials/ingredient.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
    @Input() recipe: RecipeModel;

    constructor(public shoppingListService: ShoppingListService) {
    }

    onAddIngredientsToShoppingList(): void {
        // for (const ingredient of this.recipe.ingredients) {
        //     this.shoppingListService.addIngredient(new IngredientModel(ingredient.name, ingredient.amount));
        // }
        this.shoppingListService.addIngredient(this.recipe.ingredients);
        // this.shoppingListService.addIngredientsFromRecipe(this.recipe.ingredients);
    }
}
