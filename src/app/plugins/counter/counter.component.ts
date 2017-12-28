import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
};
@Component({
    selector: 'app-exe-counter',
    template: `
  <div>
    <p>当前值2: {{ count }}</p>
    <button (click)="increment()"> + </button>
    <button (click)="decrement()"> - </button>
  </div>`,
    providers: [EXE_COUNTER_VALUE_ACCESSOR]
})

export class CounterComponent implements ControlValueAccessor {
    @Input() _count = 0;

    get count() {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
        this.propegateChange(this._count);
    }

    propegateChange = (_: any) => { };

    writeValue(value: any): void {
        if (value) {
            this.count = value;
        }

    }
    registerOnChange(fn: any): void {
        this.propegateChange = fn;
    }

    registerOnTouched(fn: any): void {

    }

    setDisabledState?(isDisabled: boolean): void {

    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}


