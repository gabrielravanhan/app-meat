import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }

  restaurants() : Restaurant[] {

  }
}
