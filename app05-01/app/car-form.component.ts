import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Car} from './car';

@Component({
  selector: 'car-form',
  templateUrl: 'app/car-form.component.html'
})
export class CarFormComponent {
  fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  bodyStyles = ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'];

  model = new Car(1, 'BMW', 'X5', this.fuelTypes[1], this.bodyStyles[5], 250, 250);

  get diagnostic() { return JSON.stringify(this.model); }
}
