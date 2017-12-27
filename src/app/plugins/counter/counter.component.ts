import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-exe-counter',
    template: `
  <div>
    <p>当前值: {{ count }}</p>
    <button (click)="increment()"> + </button>
    <button (click)="decrement()"> - </button>
  </div>`
})

export class CounterComponent {
    @Input() count = 0;

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}
