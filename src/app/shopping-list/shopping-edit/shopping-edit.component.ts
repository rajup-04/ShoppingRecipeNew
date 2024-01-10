import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addedIngredient = new EventEmitter <Ingredient> ();

  @ViewChild('nameInput', {static:false}) name!: ElementRef;
  @ViewChild('amountInput', { static: false })amount!: ElementRef; 

  addIngredient(){
    const inputName = this.name.nativeElement.value;
    const inputAmount = +this.amount.nativeElement.value;
    this.addedIngredient.emit(new Ingredient(inputName, inputAmount));
  }


}
