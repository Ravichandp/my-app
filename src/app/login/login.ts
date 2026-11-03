import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  // IMAGE
  imageUrl = "https://material.angular.dev/assets/img/examples/shiba2.jpg"

  // BUTTON
  isDisabled =true;
  disabledButtonValue = !this.isDisabled ? "Show" : "Hide";
  enabledButtonValue = this.isDisabled ? "Show" : "Hide";



// INPUT
name = "Ravichand"

// Class
  isActive = true;

  count =signal(0);
}

