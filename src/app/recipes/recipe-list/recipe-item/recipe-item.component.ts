import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    @Input('recipeItem') recipe: RecipeModel;
    @Output() recipeSelected: any = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onSelected(): void {
        this.recipeSelected.emit();
    }
}
