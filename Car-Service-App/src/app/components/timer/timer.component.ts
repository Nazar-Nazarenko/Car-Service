import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {filter, scan} from 'rxjs/operators';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private numbers: number[] = [1, 2, 3, 4, 5];
  private people: Person[] = [
    {
      name: 'Nazar',
      age: 34
    },
    {
      name: 'Katya',
      age: 28
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.testMethod();
  }

  private testMethod(): void {
    // @ts-ignore
    const numbers$ = of(this.numbers).pipe(
      scan((acc, v) => acc.concat(v), [] as number[]),
    ).subscribe( res => console.log('res:', res));
    console.log('numbers$', numbers$);

    const people$ = from<Person[]>(this.people).pipe();
  }

}
