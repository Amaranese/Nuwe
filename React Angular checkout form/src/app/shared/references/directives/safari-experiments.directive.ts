import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
    selector: '[appSafariExperiments]',
    exportAs: 'safariExperiments'
})
export class SafariExperimentsDirective {

    get items(){
        return this.settings.data.safariExperiments;
    }

    constructor(private settings: Settings) { }
}
