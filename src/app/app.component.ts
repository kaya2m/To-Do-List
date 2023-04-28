import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  user = 'Muhammet';
  items= [
    {description:"Kahvaltı",action:"No"},
    {description:"Spor",action:"No"},
    {description:"Ders Çalışma",action:"No"},
    {description:"Antrenman",action:"No"},

  ];

}
