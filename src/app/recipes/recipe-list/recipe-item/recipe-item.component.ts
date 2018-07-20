import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() selectRecipe = new EventEmitter<Recipe>();

  constructor() { }

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }

  ngOnInit() {
  }

}
