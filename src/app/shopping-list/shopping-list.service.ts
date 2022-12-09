import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>()

  private ingredients : Ingredient[] = [
    new Ingredient('Cheese',  4),
    new Ingredient('Tomato', 3),
    new Ingredient('Bacon', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  getIngredientsFromRecipeDetail(ingredients: Ingredient[]){
/*     for(let ingredient of ingredients){
      this.addIngredient(ingredient)
    } */
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
