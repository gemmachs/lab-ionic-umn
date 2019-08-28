import { Injectable } from '@angular/core';
import { Recipe } from './recipes.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
      ingredients: ['Lontong','Sawi','Bumbu Kecap','Tauge'] 
    },
    {
      id: 'r2',
      title: 'Indomie',
      imageUrl: 'https://www.finansialku.com/wp-content/uploads/2018/06/Rahasia-Sukses-Indomie-01-Finansialku.jpg',
      ingredients: ['Mie','Air']
    },
    {
      id: 'r3',
      title: 'Sate',
      imageUrl: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
      ingredients: ['Daging','Kecap','Bawang Merah','Bawang Goreng']
    }
  ];

  constructor() { }

  getAllReceipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return this.recipes.find(r=>r.id==recipeId);
  }

  deleteRecipe(recipeId: string){
    var find = this.recipes.find(r=> r.id == recipeId);
    var index = this.recipes.indexOf(find);

    if(index !== -1){
      return this.recipes.splice(index,1);
    }
  }

}
