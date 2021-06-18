import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(
      map(restaurants => restaurants)
    );
  }

  exibirMensagens(titulo: string, mensagem: string, tipo: string): void {

  }
}
