import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DateSelectorModule } from 'src/app/shared/date-selector/date-selector.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MultiCheckboxesModule } from 'src/app/shared/multi-checkboxes/multi-checkboxes.module';
import { ReferencesModule } from 'src/app/shared/references/references.module';
import { UrlBuilderRoutingModule } from './url-builder-routing.module';
import { UrlBuilderComponent } from './url-builder.component';



@NgModule({
  declarations: [UrlBuilderComponent],
  imports: [
    CommonModule,
    UrlBuilderRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ReferencesModule,
    FlexLayoutModule,
    FlexModule,
    MultiCheckboxesModule,
    DateSelectorModule,
  ]
})
export class UrlBuilderModule { }
