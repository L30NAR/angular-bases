import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`

  <h2>counter: {{counter}}</h2>

  <button (click)="increaseBy(+1)" > +1  </button>
  <button (click)="reset(10)"> Reset </button>
  <button (click)="increaseBy(-2)"> -1   </button>



  `
})


export class CounterComponent {

  public counter: number = 10;

  increaseBy( value:number):void {
  this.counter += value;
}

  reset( value:number ):void{
  this.counter = 10
}
  constructor() { }


}
