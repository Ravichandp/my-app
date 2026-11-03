import { Component } from '@angular/core';
import { PipeShortNamePipe } from './pipename/pipe-short-name-pipe';
import { ConvertPipe } from './pipename/convert-pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [PipeShortNamePipe,ConvertPipe,CommonModule],
  selector: 'app-pipes',
  styleUrl: './pipes.scss',
  templateUrl: './pipes.html',
})
export class Pipes {
  fullname = 'John Doe';

  usd =0;

  usdToInr: number =95;

  onConvertRateChange(value: number) {
    this.usd = value;

  }
}
