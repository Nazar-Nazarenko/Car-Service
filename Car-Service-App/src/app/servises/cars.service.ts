import { Injectable } from '@angular/core';
import {of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor() { }
  public data = [
    {
      brand: 'Porsche',
      model: '911',
      price: 85000,
      fuel: 'petrol',
      id: 1,
      engine: '3.0 FSI',
      photo: '',
      wiki: '',
      country: '1'
    },
    {
      brand: 'Porsche',
      model: 'Macan',
      price: 65000,
      fuel: 'diesel',
      id: 2,
      engine: '3.0 TDI',
      photo: '',
      wiki: '',
      country: '1'
    },
    {
      brand: 'Chrysler',
      model: '300',
      price: 28000,
      fuel: 'petrol',
      id: 3,
      engine: '4.5 DOHC',
      photo: '',
      wiki: '',
      country: '3'
    },
    {
      brand: 'Ford',
      model: 'F-150',
      price: 90000,
      fuel: 'petrol',
      id: 4,
      engine: '4.5 TSI',
      photo: '',
      wiki: '',
      country: '3'
    },
    {
      brand: 'Audi',
      model: 'E-Tron',
      price: 80000,
      fuel: 'electric',
      id: 5,
      engine: 'DUAL-electric',
      photo: '',
      wiki: '',
      country: '1'
    },
    {
      brand: 'Lexus',
      model: 'ES-350h',
      price: 73000,
      fuel: 'hybrid',
      id: 6,
      engine: '350 RH',
      photo: '',
      wiki: '',
      country: '2'
    }
  ];

  public data$ = of([
    {
      brand: 'Porsche',
      model: '911',
      price: 85000,
      fuel: 'petrol',
      id: 1,
      engine: '3.0 FSI',
      photo: '',
      wiki: ''
    },
    {
      brand: 'Porsche',
      model: 'Macan',
      price: 65000,
      fuel: 'diesel',
      id: 2,
      engine: '3.0 TDI',
      photo: '',
      wiki: ''
    },
    {
      brand: 'Ferarri',
      model: '458',
      price: 78000,
      fuel: 'petrol',
      id: 3,
      engine: '4.5 DOHC',
      photo: '',
      wiki: ''
    },
    {
      brand: 'Lamborghini',
      model: 'Urus',
      price: 90000,
      fuel: 'petrol',
      id: 4,
      engine: '4.5 TSI',
      photo: '',
      wiki: ''
    },
    {
      brand: 'Audi',
      model: 'E-Tron',
      price: 80000,
      fuel: 'electric',
      id: 5,
      engine: 'DUAL-electric',
      photo: '',
      wiki: ''
    },
    {
      brand: 'Lexus',
      model: 'ES-350h',
      price: 73000,
      fuel: 'hybrid',
      id: 6,
      engine: '350 RH',
      photo: '',
      wiki: ''
    }
  ]);
}
