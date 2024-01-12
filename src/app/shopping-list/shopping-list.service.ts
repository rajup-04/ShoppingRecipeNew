import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
    ingredientEmitter = new Subject<Ingredient[]>()
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Ginger', 2),];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient :Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientEmitter.next(this.ingredients.slice())
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientEmitter.next(this.ingredients.slice())
  }
    
  

}
