import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
    private simplyPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg';
    recipes: RecipeModel[] = [
        new RecipeModel('A Test Recipe', 'This is simply a test recipe', this.simplyPath),
        new RecipeModel('Another Test Recipe', 'This is Another test recipe', this.simplyPath),
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onRecipeSelected(recipe: RecipeModel) {
        this.recipeWasSelected.emit(recipe);
    }
}
