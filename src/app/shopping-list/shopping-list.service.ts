import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {IngredientModel} from '../partials/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService implements OnInit {
    ingredientChanged: any = new EventEmitter<IngredientModel[]>();

    private ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 10),
        new IngredientModel('Tomatoes', 20),
    ];

    constructor() {
    }

    getIngredients(): Array<IngredientModel> {
        /* Solution 1: return this.ingredients; return oun array*/
        return this.ingredients.slice();
    }

    /** add one ingredient from shopping-list.edit */
    addIngredient(ingredient: IngredientModel | IngredientModel[]): void {

        if (ingredient instanceof Array) {
            this.ingredients.push(...ingredient);
        } else if (ingredient instanceof IngredientModel) {
            this.ingredients.push(ingredient);
        }

        /* Solution 2: Generate rerender of list of Ingredients */
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    ngOnInit(): void {
    }
}
