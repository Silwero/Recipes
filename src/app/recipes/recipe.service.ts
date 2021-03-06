import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      // tslint:disable-next-line:max-line-length
      'Lorem ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen',
      'http://placehold.it/400x400',
      [
        new Ingredient('Tomatos', 3)
      ]
    ),
    new Recipe(
      'A Test Recipe 2',
      'Some description',
      'http://placehold.it/400x400',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10)
      ]
    )
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return [...this.recipes];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next([...this.recipes]);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next([...this.recipes]);
  }
}
