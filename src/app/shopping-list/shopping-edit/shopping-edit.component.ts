import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  canDelete = false;
  editingItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(
      value.name,
      value.amount
    );
    if (this.editMode) {
      this.slService.updateIngredient(this.editingItemIndex, newIngredient);
      this.resetForm();
    } else {
      this.slService.addIngedient(newIngredient);
    }
  }

  onDelete() {
    this.slService.deleteItem(this.editingItemIndex);
    this.resetForm();
  }

  resetForm() {
    this.slForm.reset();
    this.editMode = false;
    this.canDelete = false;
  }

  ngOnInit() {
    this.subscription = this.slService.startingEditing
      .subscribe((id: number) => {
        this.editingItemIndex = id;
        this.editMode = true;
        this.canDelete = true;
        this.editedItem = this.slService.getIngredients()[id];
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
