import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`http://localhost:3000/restaurants`);
  }
}
