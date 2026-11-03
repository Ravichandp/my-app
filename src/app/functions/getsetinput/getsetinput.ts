import { Component } from '@angular/core';
import { visitLexicalEnvironment } from 'typescript';

@Component({
  imports: [],
  selector: 'app-getsetinput',
  styleUrl: './getsetinput.scss',
  templateUrl: './getsetinput.html',
})
export class Getsetinput {

userName : string ='';
city :string ='';
email : string = ''

  updateName(val:string){
this.userName = val;
  }
  getEmail(val:string){
this.email= val;
  }
}
