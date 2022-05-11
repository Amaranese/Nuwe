import { ContentChildren, Directive, forwardRef, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { APP_CHECKBOX_ITEM_ACCESSOR, CheckboxItemAccessor } from './accessors';

@Directive({
  selector: '[appMultiCheckboxes], app-multi-checkboxes',
  providers:[{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiCheckboxesDirective),
        multi: true
    }]
})
export class MultiCheckboxesDirective implements ControlValueAccessor {

    private _values: any[] = [];
    private isDisabled:boolean;
    private onChange:(values: any[]) => void;
    onTouched: () => {};

    get disabled(){
        return this.isDisabled;
    }

    get values(){
        return this._values;
    }

    @ContentChildren(APP_CHECKBOX_ITEM_ACCESSOR)
    checkboxes: QueryList<CheckboxItemAccessor>

    constructor() {}

    writeValue(values: any[]): void {
        values = values || [];
        if(this.checkboxes){
            this.checkboxes.forEach(c => c.writeValue(values));
        }
        this._values = values;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        if(this.checkboxes){
            this.checkboxes.forEach(c => c.setDisabledState(isDisabled));
        }
        this.isDisabled = isDisabled;
    }

    checkboxChange(){
        this._values = this.checkboxes.reduce((v, c) => (c.checked) ? [...v, c.value] : v, []);
        this.onChange(this._values);
    }
}
