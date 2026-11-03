import { Component,effect, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-effects',
  styleUrl: './effects.scss',
  templateUrl: './effects.html',
})
export class Effects {
  count = signal<number>(11);

// constructor(){
//   effect(()=> {
//     console.log("count :", this.count());
//   })
// }

increment(){
  this.count.update(() => this.count() + 1);
}



isDarkMode =signal<boolean>(false);
constructor(){
  effect(() =>{
      if(this.isDarkMode()){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
      else{

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      setTimeout(() => {
      // this.toggle();
      }, 2000);

  })
}

toggle(){
  this.isDarkMode.update((val)=> !val);
}
}
