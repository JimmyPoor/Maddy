import { Component, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import {
    ControlValueAccessor, NG_VALUE_ACCESSOR,
    NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors, FormControl, Validator
} from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
};

export const EXE_COUNTER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
};

export function createCounterRangeValidator(maxRange: number, minRange: number) {
    return (control: AbstractControl):
        ValidationErrors => {
        return control.value > maxRange || control.value < minRange ?
            { 'rangeError': { current: control.value, max: 10, min: 0 } } : null;
    };
}

// export const validateCountRange: ValidatorFn = (control: AbstractControl):
//     ValidationErrors => {
//     return control.value > 10 || control.value < 0 ?
//         { 'rangeError': { current: control.value, max: 10, min: 0 } } : null;
// };

// export const EXE_COUNTER_VALIDATOR = {
//     provide: NG_VALIDATORS,
//     useValue: validateCountRange,
//     mulit: true
// };

@Component({
    selector: 'app-exe-counter',
    template: `
  <div>
    <p>当前值2: {{ count }}</p>
    <button (click)="increment()"> + </button>
    <button (click)="decrement()"> - </button>
  </div>`,
    providers: [EXE_COUNTER_VALUE_ACCESSOR, EXE_COUNTER_VALIDATOR]
})

export class CounterComponent implements ControlValueAccessor, Validator, OnChanges {
    @Input() _count = 0;
    @Input() rangeMax: number;
    @Input() rangeMin: number;

    private _validator: ValidatorFn;

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

    validate(c: AbstractControl): ValidationErrors {
        return this._validator(c);
    }

    registerOnValidatorChange?(fn: () => void): void {
        this._createValidator();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('rangeMax' in changes || 'rangeMin' in changes) {
            this._createValidator();
        }
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    private _createValidator(): void {
        this._validator = createCounterRangeValidator(this.rangeMax, this.rangeMin);
    }
}


