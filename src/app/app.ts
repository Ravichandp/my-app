import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Event } from './event/event';
import { Buttonclick } from './functions/buttonclick/buttonclick';
import { Getsetinput } from './functions/getsetinput/getsetinput';
import { Ifelse } from './conditional/ifelse/ifelse';
import { Switchcase } from './conditional/switchcase/switchcase';
import { Forloop } from './conditional/forloop/forloop';
import { Signals } from './statemanagement/signals/signals';
import { Effects } from './statemanagement/effects/effects';
import { Pipes } from './pipes/pipes';
import { Todo } from './todolist/todolist';
import { Inputsignals } from './statemanagement/inputsignals/inputsignals';
import { Counterstore } from './gloalstate/counterstore/counterstore';
import { User } from './gloalstate/user/user';

@Component({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    Event,
    Buttonclick,
    Getsetinput,
    Ifelse,
    Switchcase,
    Forloop,
    Signals,
    Effects,
    Pipes,
    Todo,
    Inputsignals,
    Counterstore,
    User
],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
}
