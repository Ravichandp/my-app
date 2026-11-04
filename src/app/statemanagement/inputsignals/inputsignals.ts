import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inputsignals',
  styleUrl: './inputsignals.scss',
  templateUrl: './inputsignals.html',
})
export class Inputsignals {
  name = input<string>('');

  city = signal('')
}
