import { AbstractControl, AbstractControlOptions, ValidatorFn } from '@angular/forms';

export type FormGroupConfig<T> = {
    [K in keyof T] : [
        T[K] | { value?:T[K], disabled?:boolean } | null,
        (AbstractControlOptions | ValidatorFn | ValidatorFn[])?
    ]
}

export type Fields<T> = {
    readonly [K in keyof T]: AbstractControl;
}