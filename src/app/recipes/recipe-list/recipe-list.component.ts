import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    private simplyPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg';

    recipes: RecipeModel[] = [
        new RecipeModel('A Test Recipe 1', 'This is simply a test recipe 1', this.simplyPath),
        new RecipeModel('A Test Recipe 2', 'This is simply a test recipe 2', this.simplyPath),
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
