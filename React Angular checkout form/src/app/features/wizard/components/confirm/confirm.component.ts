import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

    @Input()
    form: FormGroup;

    private get rawValue(){
        return this.form.getRawValue();
    }
    
    get contact(){
        return this.rawValue.contact;
    }

    get tour(){
        return this.rawValue.tour;
    }

    get preferences(){
        return this.rawValue.preferences;
    }

    constructor() { }
}
