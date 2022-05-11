import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
    selector: '[appAttendants]',
    exportAs: 'attendants'
})
export class AttendantsDirective {

    get items(){
        return this.settings.data.attendants;
    }

    constructor(private settings: Settings) {}
}
