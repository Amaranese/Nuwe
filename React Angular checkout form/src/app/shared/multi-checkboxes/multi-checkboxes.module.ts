import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxItemNativeAccessor } from './checkbox-item-native-accessor.directive';
import { MatCheckboxItemAccessor } from './mat-checkbox-item-accessor.directive';
import { MultiCheckboxesDirective } from './multi-checkboxes.directive';

@NgModule({
    declarations: [CheckboxItemNativeAccessor, MatCheckboxItemAccessor, MultiCheckboxesDirective],
    imports: [CommonModule],
    exports: [CheckboxItemNativeAccessor, MatCheckboxItemAccessor, MultiCheckboxesDirective],
})
export class MultiCheckboxesModule {}
