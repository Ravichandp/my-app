import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  imports: [MatButtonModule,MatBadgeModule],
  selector: 'app-event',
  styleUrl: './event.scss',
  templateUrl: './event.html',
})
export class Event {
count = signal(0)

increment(){
  this.count.update((value)=> value+1)
}

showEvent(e:any){
  console.log("Event Called:"+ e );
  this.count.set(0);
}

userName =''
updateUserName(value:string){
  this.userName = value;
}
}
