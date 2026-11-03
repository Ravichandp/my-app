import { StartTagComment } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ifelse',
  styleUrl: './ifelse.scss',
  templateUrl: './ifelse.html',
})
export class Ifelse {

  isLoggedIn = true
butonText =this.isLoggedIn ? "Log Out" : 'Log In'

  login(){
    this.isLoggedIn = !this.isLoggedIn
    this.butonText = this.isLoggedIn ? "Log Out" : 'Log In'
  }

  age : number = 0
  checkEligibility(val : string){
 this.age = Number(val)
  }
ischeckedFemale = false
ischeckedmale = false
  onCheckBoxMaleCheck(val:Event) :void {
     this.ischeckedmale = (val.target as HTMLInputElement).checked;
  }

  onCheckBoxFemaleCheck(val:Event) :void {
     this.ischeckedFemale = (val.target as HTMLInputElement).checked;
  }
}
