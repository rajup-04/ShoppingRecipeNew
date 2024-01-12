import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const routes : Routes = [
    {path:'', redirectTo: '/recipes', pathMatch:"full"},
    {path:'recipes', component: RecipesComponent, children : [
        {path:'', component: SelectRecipeComponent, pathMatch:"full"},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path:':id/edit', component: RecipeEditComponent},
        {path: '**', redirectTo:'/not-found' }]
    },
    {path:'shoppingList', component: ShoppingListComponent},
    {path: 'not-found', component:PageNotFoundComponent },
    {path: '**', redirectTo:'/not-found' }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRougtingModule{

}