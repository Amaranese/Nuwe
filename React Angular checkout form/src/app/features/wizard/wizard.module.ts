import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DateSelectorModule } from 'src/app/shared/date-selector/date-selector.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MultiCheckboxesModule } from 'src/app/shared/multi-checkboxes/multi-checkboxes.module';
import { ReferencesModule } from 'src/app/shared/references/references.module';
import { RequiredModule } from 'src/app/shared/required/required.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PreferencesFormComponent } from './components/preferences-form/preferences-form.component';
import { TourFormComponent } from './components/tour-form/tour-form.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DetailRowComponent } from './components/detail-row/detail-row.component';
import { CountryPipe } from './pipes/country.pipe';
import { HostingTypePipe } from './pipes/hosting-type.pipe';
import { MealTypePipe } from './pipes/meal-type.pipe';
import { VehicleTypePipe } from './pipes/vehicle-type.pipe';
import { DestinationsPipe } from './pipes/destinations.pipe';
import { SafariExperimentsPipe } from './pipes/safari-experiments.pipe';
import { TourTypePipe } from './pipes/tour-type.pipe';
import { AttendantsPipe } from './pipes/attendants.pipe';

@NgModule({
    declarations: [
        ContactFormComponent,
        TourFormComponent,
        WizardComponent,
        PreferencesFormComponent,
        ConfirmComponent,
        DetailRowComponent,
        CountryPipe,
        HostingTypePipe,
        MealTypePipe,
        VehicleTypePipe,
        DestinationsPipe,
        SafariExperimentsPipe,
        TourTypePipe,
        AttendantsPipe,
    ],
    imports: [
        CommonModule,
        WizardRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        RequiredModule,
        ReferencesModule,
        FlexLayoutModule,
        FlexModule,
        MultiCheckboxesModule,
        DateSelectorModule,
    ],
})
export class WizardModule { }
