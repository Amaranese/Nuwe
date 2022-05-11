import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttendantsDirective } from './directives/attendants.directive';
import { DestinationsDirective } from './directives/destinations.directive';
import { HostingTypesDirective } from './directives/hosting-types.directive';
import { MealTypesDirective } from './directives/meal-types.directive';
import { SafariExperimentsDirective } from './directives/safari-experiments.directive';
import { TourTypesDirective } from './directives/tour-types.directive';
import { VehicleTypesDirective } from './directives/vehicle-types.directive';
import { VehicleTypesFilterPipe } from './pipes/vehicle-types-filter.pipe';



@NgModule({
    declarations: [
        DestinationsDirective,
        SafariExperimentsDirective,
        TourTypesDirective,
        AttendantsDirective,
        HostingTypesDirective,
        MealTypesDirective,
        VehicleTypesDirective,
        VehicleTypesFilterPipe
    ],
    imports: [
        CommonModule
    ],
    exports:[
        DestinationsDirective,
        SafariExperimentsDirective,
        TourTypesDirective,
        AttendantsDirective,
        HostingTypesDirective,
        MealTypesDirective,
        VehicleTypesDirective,
        VehicleTypesFilterPipe
    ]
})
export class ReferencesModule { }
