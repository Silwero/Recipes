import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipebook-75f8e.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://recipebook-75f8e.firebaseio.com/recipes.json?auth=' + token)
      .subscribe((resp: Response) => {
        const recipe: Recipe[] = resp.json();
        this.recipeService.setRecipes(recipe);
      });
  }
}
