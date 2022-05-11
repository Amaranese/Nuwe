import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-detail-row',
    template: `
        <div fxLayout="row wrap">
            <div fxFlex="50" fxFlex.gt-xs="33.3" class="app-detail-row__label">{{ label }}</div>
            <div fxFlex="50" fxFlex.gt-xs="66.6">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./detail-row.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host:{
        class:"app-detail-row"
    }
})
export class DetailRowComponent implements OnInit {

    @Input()
    label: string;

    constructor() { }

    ngOnInit(): void {
    }

}
