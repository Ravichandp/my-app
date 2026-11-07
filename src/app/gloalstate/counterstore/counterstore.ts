import { Component } from '@angular/core';
import { CounterStore } from '../../core/store/counter';

@Component({
  imports: [],
  selector: 'app-counterstore',
  styleUrl: './counterstore.scss',
  templateUrl: './counterstore.html',
})
export class Counterstore {
  constructor(
    public counterStore: CounterStore
  ){}


}
