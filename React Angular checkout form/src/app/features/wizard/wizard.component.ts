import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormService } from 'src/app/services/form.service';
import { FormUrlMapperHelper } from 'src/app/utils/form-url-mapper-helper';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    providers: [FormService],
})
export class WizardComponent {
    readonly isMobile$: Observable<any>;
    readonly form: FormGroup;

    get contactForm() {
        return this.form.get('contact') as FormGroup;
    }

    get tourForm() {
        return this.form.get('tour') as FormGroup;
    }

    get preferencesForm() {
        return this.form.get('preferences') as FormGroup;
    }

    /**
     *
     */
    constructor(
        observer: MediaObserver,
        private formService: FormService,
        private route: ActivatedRoute
    ) {
        this.isMobile$ = observer
            .asObservable()
            .pipe(map(() => observer.isActive('lt-md')));
        this.form = this.formService.form;

        FormUrlMapperHelper.mapToForm(
            this.form,
            this.route.snapshot.queryParamMap,
            true
        );
    }

    confirm(form) {
        console.log(form.value);
    }
}
