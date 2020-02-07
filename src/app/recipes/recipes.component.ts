import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    selectedRecipePropertyFromRecipeItem: RecipeModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
