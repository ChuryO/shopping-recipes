import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';
import {IngredientModel} from '../../partials/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
    ingredientForm: any = new FormGroup({
        ingredientName: new FormControl(),
        ingredientAmount: new FormControl()
    });

    constructor(private shoppingListService: ShoppingListService) {
    }

    onSubmit(): void {
        const name = this.ingredientForm.value.ingredientName;
        const amount = parseInt(this.ingredientForm.value.ingredientAmount, 10);
        this.shoppingListService.addIngredient(new IngredientModel(name, amount));
    }
}
