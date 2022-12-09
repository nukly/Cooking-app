import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './../recipes/recipes-start/recipes-start.component';
import { ShoppingEditComponent } from './../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { RecipeListComponent } from './../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './../recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './../recipes/recipes.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {
        path: 'shopping-list-edit',
        component: ShoppingEditComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
