import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    @Input('recipeItem') recipe: RecipeModel;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
    }

    onSelected(): void {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}
