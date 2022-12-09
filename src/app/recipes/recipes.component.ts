import { Subscription } from 'rxjs';
import { RecipesService } from './recipes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy{
  selectedRecipe: Recipe;

  private recipeSub: Subscription;

  constructor(private recipeService:RecipesService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipeSub = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    )
  }
  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
