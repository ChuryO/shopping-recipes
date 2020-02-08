import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    selectedRecipePropertyFromRecipeItem: RecipeModel;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        /** method (subscribe) "listener" check if some changes exist*/
        this.recipeService.recipeSelected.subscribe((recipe: RecipeModel) => {
            this.selectedRecipePropertyFromRecipeItem = recipe;
        });
    }

}
