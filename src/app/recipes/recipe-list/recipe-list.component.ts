import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Lorem Ipsum Test', 'http://placehold.it/400x400'),
    new Recipe('A Test Recipe 2', 'Some description', 'http://placehold.it/400x400')
  ];

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
