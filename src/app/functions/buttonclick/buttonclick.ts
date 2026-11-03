import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-buttonclick',
  styleUrl: './buttonclick.scss',
  templateUrl: './buttonclick.html',
})
export class Buttonclick {
  username =''

// CLICK
  handleClick()
  {
    console.log('Button Clicked')
  }

// INPUT
  onType(e:any)
  {
this.username = e;
  }

  location=''
  // KEYUP
  onKeyUp(e:any)
  {
    this.location= e;
    console.log("onKeyEvent:"+e.key);
  }

  // MOUSEOVER
  onMouseHover(){
console.log('OnHover Event')
  }
}
