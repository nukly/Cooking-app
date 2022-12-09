import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private slService: ShoppingListService){}

  recipeSelected = new Subject<Recipe>();
  recipeClicked = false;
  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [
        new Ingredient('Tomato', 4),
        new Ingredient('Cheese', 100),
        new Ingredient('Bacon', 10),

      ]),
    new Recipe(
      'Sandwich',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/62b1f659a38f8b1339b88af8/5:4/w_2715,h_2172,c_limit/20220615-0622-sandwiches-1746-final%20(1).jpg',
      [
        new Ingredient('Salad', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Cheese', 2),
        new Ingredient('Poli', 2),
      ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.getIngredientsFromRecipeDetail(ingredients)
  }

  routeWithId(id: number){

  }

}
