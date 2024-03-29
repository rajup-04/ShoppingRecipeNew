import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id!:number;
  edit = false

  constructor(private activatedRoute :ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.edit = this.id? true: false;
      }
    )
  }

  

}
