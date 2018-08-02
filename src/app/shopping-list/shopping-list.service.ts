import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startingEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
  ];

  indexingIngredients() {
    this.ingredients.forEach((ingr, i) => {
      ingr.index = i;
    });
  }

  getIngredients() {
    this.indexingIngredients();
    return [...this.ingredients];
  }

  updateIngredient(index: number, newIngr: Ingredient) {
    this.ingredients[index] = newIngr;
    this.indexingIngredients();
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.indexingIngredients();
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngedient(ingredient: Ingredient) {
    let ingredietIn = false;
    this.ingredients.forEach((ingr) => {
      if (ingr.name.toLocaleLowerCase() === ingredient.name.toLowerCase()) {
        ingr.amount += ingredient.amount;
        ingredietIn = true;
      }
    });
    if (ingredietIn) { return; }

    this.ingredients.push(ingredient);
    this.indexingIngredients();
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
