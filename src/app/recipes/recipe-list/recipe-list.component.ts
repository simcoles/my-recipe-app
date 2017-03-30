import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A nice tasy recipe', 'https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/1711/spaghetti-carbonara__hero.jpg'),
    new Recipe('Macaroni Cheese', 'A quick and simple but extremely tasty recipe', 'http://goodtoknow.media.ipcdigital.co.uk/111/000005f52/a9f8_orh412w625/Baked-Macaroni-Cheese-with-Tomatoes-334x220.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
