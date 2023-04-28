import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  model=new Model();
  isDisplay=false;


  getName(){
    return this.model.user;
  };
 getItem(){
  if(this.isDisplay){
    return this.model.item;
  }
  return this.model.item.filter(item=>!item.action);
 }

 addItem(value:string){
  if(value!="")
  this.model.item.push(new TodoItem(value,false));
 }

}
