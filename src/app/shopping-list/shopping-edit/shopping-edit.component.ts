import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  
  constructor(private slService: ShoppingListService){

  }

  @ViewChild('nameInput', {static:false}) name!: ElementRef;
  @ViewChild('amountInput', { static: false })amount!: ElementRef; 

  addIngredient(){
    const inputName = this.name.nativeElement.value;
    const inputAmount = +this.amount.nativeElement.value;
    this.slService.addIngredient(new Ingredient(inputName, inputAmount));
  }


}
