import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  sendEmail(){

  }
}
