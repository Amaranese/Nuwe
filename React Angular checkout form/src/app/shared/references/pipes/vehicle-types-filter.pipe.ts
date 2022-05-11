import { Pipe, PipeTransform } from '@angular/core';
import { DisabledOption, LabelledValue } from 'src/app/models/settings';

@Pipe({
  name: 'vehicleTypesFilter'
})
export class VehicleTypesFilterPipe implements PipeTransform {
    transform(data: LabelledValue[], hostingType: string): DisabledOption[] {
        return data.map(d => d.value !== 'suv' || ['luxury-lodge', 'guesthouse-lodge'].includes(hostingType) 
            ? ({...d, disabled:false}) 
            : ({...d, disabled:true}));
    }
}
