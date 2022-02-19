import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
  public data$ = of([
    {
      brand: 'Porsche',
      model: '911',
      price: 85000,
      fuel: 'petrol',
      id: 1

    },
    {
      brand: 'Porsche',
      model: 'Macan',
      price: 65000,
      fuel: 'diesel',
      id: 2
    },
    {
      brand: 'Ferarri',
      model: '458',
      price: 78000,
      fuel: 'petrol',
      id: 3
    },
    {
      brand: 'Lamborghini',
      model: 'Urus',
      price: 90000,
      fuel: 'petrol',
      id: 4
    },
    {
      brand: 'Audi',
      model: 'E-Tron',
      price: 80000,
      fuel: 'electric',
      id: 5
    },
    {
      brand: 'Lexus',
      model: 'ES-350h',
      price: 73000,
      fuel: 'hybrid',
      id: 6
    }
  ]);
}
