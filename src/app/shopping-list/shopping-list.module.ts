import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {}
