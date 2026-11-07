import { CounterStore } from './../../core/store/counter';
import { Component } from '@angular/core';
import { UserStore } from '../../core/store/user';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User {
  constructor(public userstore:UserStore, public counterStore:CounterStore){}
}
