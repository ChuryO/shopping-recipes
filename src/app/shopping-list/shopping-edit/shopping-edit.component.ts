import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IngredientModel} from '../../partials/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
    @Output() newIngredient = new EventEmitter<IngredientModel>();
    ingredientForm = new FormGroup({
        ingredientName: new FormControl(),
        ingredientAmount: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        const name = this.ingredientForm.value.ingredientName;
        const amount = parseInt(this.ingredientForm.value.ingredientAmount, 10);
        this.newIngredient.emit(new IngredientModel(name, amount));
    }
}
