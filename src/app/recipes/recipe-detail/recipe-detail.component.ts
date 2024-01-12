import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  constructor(private slService: ShoppingListService, private activeRoute: ActivatedRoute, private recipeService: RecipeService){}

  recipe!: Recipe

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes()[(+this.activeRoute.snapshot.params['id'])];

    this.activeRoute.params.subscribe(
      (params : Params)=>{
        this.recipe = this.recipeService.getRecipes()[(+params['id'])];
      }
    )

  }  

  toShoppingList(){
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
