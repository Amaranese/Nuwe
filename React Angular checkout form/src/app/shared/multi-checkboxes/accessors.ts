import { InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export interface CheckboxItemAccessor extends ControlValueAccessor {
    checked: boolean;
    value: string;
}

export const APP_CHECKBOX_ITEM_ACCESSOR = new InjectionToken<CheckboxItemAccessor>('CheckboxItem used in checkboxes group');
