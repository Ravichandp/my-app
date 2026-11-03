import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-forloop',
  styleUrl: './forloop.scss',
  templateUrl: './forloop.html',
})
export class Forloop {

  items = ['HTML', 'JAVA SCRIPT', 'CSS', 'C#', 'ANGULAR', 'REACT', 'VUE', 'NODE JS', 'MONGO DB', 'SQL SERVER'];
  integer = [1,2,3,4,5,6];
}
