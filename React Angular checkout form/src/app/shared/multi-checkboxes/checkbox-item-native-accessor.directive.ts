import { Directive, ElementRef, forwardRef, OnInit, Renderer2 } from '@angular/core';
import { APP_CHECKBOX_ITEM_ACCESSOR, CheckboxItemAccessor } from './accessors';
import { MultiCheckboxesDirective } from './multi-checkboxes.directive';

@Directive({
    selector: 'input[type=checkbox][appCheckboxItem]:not([ngModel]):not([formControlName]):not([formControl])',
    // tslint:disable-next-line: no-host-metadata-property
    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
    providers: [
        {
            provide: APP_CHECKBOX_ITEM_ACCESSOR,
            useExisting: forwardRef(() => CheckboxItemNativeAccessor),
            multi: true,
        },
    ],
})
// tslint:disable-next-line: directive-class-suffix
export class CheckboxItemNativeAccessor implements CheckboxItemAccessor, OnInit {
    get checked() {
        return this._elementRef.nativeElement.checked || false;
    }

    get value() {
        return this._elementRef.nativeElement.value;
    }

    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */
    onChange = (_: any) => {};

    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */
    onTouched = () => {};

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private context: MultiCheckboxesDirective) {
    }

    ngOnInit(): void {
        this.writeValue(this.context.values);
        this.setDisabledState(this.context.disabled);
        this.registerOnTouched(this.context.onTouched)
        this.registerOnChange(() => this.context.checkboxChange())
    }

    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(values: any[]): void {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', values.includes(this.value));
    }

    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */
    setDisabledState(isDisabled: boolean): void {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
