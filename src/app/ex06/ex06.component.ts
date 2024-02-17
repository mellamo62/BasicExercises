import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";



@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius: number | null = 0;
  fahrenheit: number | null = 0;

  constructor() {}

  ngOnInit(): void {
    this.celcius = null;
    this.fahrenheit = null;

  }

  validate(event: any){

    if (isNaN(event.key)){
      event.preventDefault()
    }

  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius() {
    this.celcius = (<number>this.fahrenheit - 32) * 5 / 9;
  }

  converToFahrenheit() {
    this.fahrenheit = <number>this.celcius * 9 / 5 + 32;
  }
}
