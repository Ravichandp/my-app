import { Component, signal,computed } from '@angular/core';
import { Inputsignals } from '../inputsignals/inputsignals';

interface Person{
  name : string;
  age:number;
  city:string;
  male:boolean
}

@Component({
  imports: [Inputsignals],
  selector: 'app-signals',
  styleUrl: './signals.scss',
  templateUrl: './signals.html',
})
export class Signals {
  count = signal(0);

  counter(val: string){
    switch(val){
    case '+':
      this.count.update((c) => c +1)
      break;
      case '-':
        this.count.update((c) => c-1)
    break;
    case '0':
      this.count.set(0)
      break;
    }
  }


  num =signal<number>(10);
  strArry =signal<string[]>(['a','b','c','d'])
  strObject = signal<{name:string, age:number}>({name: 'John', age: 30});
  strPerson= signal<Person>({name: 'John', age: 30, city:'New York', male:true})

counterNum = signal<number>(20);

counternum2 = computed(() => this.counterNum() + 10)

changeCount(){
this.counterNum.update((val) => val + 1 )
}

username = signal('')

}
