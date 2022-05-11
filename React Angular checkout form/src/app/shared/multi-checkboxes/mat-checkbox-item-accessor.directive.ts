import { Directive, forwardRef, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { APP_CHECKBOX_ITEM_ACCESSOR, CheckboxItemAccessor } from './accessors';
import { MultiCheckboxesDirective } from './multi-checkboxes.directive';

@Directive({
    selector: 'mat-checkbox[appCheckboxItem]:not([ngModel]):not([formControlName]):not([formControl])',
    // tslint:disable-next-line: no-host-metadata-property
    providers: [
        {
            provide: APP_CHECKBOX_ITEM_ACCESSOR,
            useExisting: forwardRef(() => MatCheckboxItemAccessor),
            multi: true,
        },
    ],
})
// tslint:disable-next-line: directive-class-suffix
export class MatCheckboxItemAccessor implements CheckboxItemAccessor, OnInit {
    get checked() {
        return this.matCheckbox.checked || false;
    }

    get value() {
        return this.matCheckbox.value;
    }

    constructor(private matCheckbox: MatCheckbox, private context: MultiCheckboxesDirective) {}

    ngOnInit(): void {
        this.writeValue(this.context.values);
        this.setDisabledState(this.context.disabled);
        this.registerOnTouched(this.context.onTouched);
        this.registerOnChange(() => this.context.checkboxChange())
    }

    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(values: any[]): void {
        this.matCheckbox.writeValue(values.includes(this.value));
    }

    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn: (_: any) => void): void {
        this.matCheckbox.registerOnChange(fn);
    }

    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn: () => {}): void {
        this.matCheckbox.registerOnTouched(fn);
    }

    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */
    setDisabledState(isDisabled: boolean): void {
        this.matCheckbox.setDisabledState(isDisabled);
    }
}
