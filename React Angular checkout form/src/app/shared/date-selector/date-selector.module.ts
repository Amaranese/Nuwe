import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DatesSelectorComponent } from './dates-selector.component';



@NgModule({
    declarations: [
        DatesSelectorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports:[DatesSelectorComponent]
})
export class DateSelectorModule { }
