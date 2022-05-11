import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormService } from 'src/app/services/form.service';
import { FormUrlMapperHelper } from 'src/app/utils/form-url-mapper-helper';

@Component({
    selector: 'app-url-builder',
    templateUrl: './url-builder.component.html',
    styleUrls: ['./url-builder.component.scss'],
    providers: [FormService],
})
export class UrlBuilderComponent {
    get form() {
        return this.formService.form;
    }

    get tourForm(): FormGroup {
        return this.form.get('tour') as FormGroup;
    }

    readonly url$: Observable<string>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formService: FormService
    ) {
        FormUrlMapperHelper.mapToForm(
            this.form,
            this.route.snapshot.queryParamMap
        );

        const queryParams$ = this.form.valueChanges.pipe(
            map((v) => FormUrlMapperHelper.mapToUrl(this.form))
        );

        queryParams$.subscribe((queryParams) => {
            this.router.navigate([], {
                queryParams,
            });
        });

        this.url$ = queryParams$.pipe(
            map((queryParams) => this.createExternalUrl(queryParams)),
            startWith(this.createExternalUrl(this.route.snapshot.queryParams))
        );
    }

    private createExternalUrl(queryParams: any) {
        const qpStr = this.router.createUrlTree(['/'], { queryParams });
        return `${window.location.origin}${qpStr}`;
    }

    resetDates() {
        this.form.get('tour.isDuration').reset(null);
        this.form.get('tour.duration').reset(null);
        this.form.get('tour.startDate').reset(null);
        this.form.get('tour.endDate').reset(null);
    }
}
