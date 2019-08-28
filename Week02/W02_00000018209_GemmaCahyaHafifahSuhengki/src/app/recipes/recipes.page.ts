import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipes.module';
import { RecipesService } from './recipes.service';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllReceipes();
  }

  getRecipe(idresep){
    console.log(this.recipesService.getRecipe(idresep));
  }

  deleteRecipe(idresep){
    this.recipesService.deleteRecipe(idresep);
  }

}
