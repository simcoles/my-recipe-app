import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('qtyInput') qty: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.name.nativeElement.value;
    const qty = this.qty.nativeElement.value;
    const ingredient = new Ingredient(name, qty);
    this.ingredientAdded.emit(ingredient);
  }
}
