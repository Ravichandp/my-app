import{ Injectable, signal} from '@angular/core'

@Injectable({
  providedIn : 'root'
})

export class CounterStore {

  count=signal(0)

  incrementCounter(){
    this.count.update((c) => c+1)
  }

  decrementCounter(){
    this.count.update((c) => c-1)
  }

  countReset(){
    this.count.set(0)
  }
}
