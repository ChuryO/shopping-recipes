import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../partials/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 10),
        new IngredientModel('Tomatoes', 20),
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onNewIngredient(ingredient: IngredientModel): any {
        this.ingredients.push(ingredient);
    }
}
