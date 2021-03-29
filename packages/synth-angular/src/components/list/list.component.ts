import { Component, Input, OnChanges } from '@angular/core';
import { FieldsConfig, Row } from 'synth-core/dist/models/list';
import { configRow } from 'synth-core/dist/utils';

@Component({
    selector: 'synth-ng-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ],
})
export class ListComponent implements OnChanges {
    @Input() loading: boolean;
    @Input() title: string;
    @Input() data: any[];
    @Input() limit: number;
    @Input() fieldsConfig: FieldsConfig[];
    @Input() decimals: boolean;
    @Input() expandable: boolean;
    @Input() enableDownload: boolean;
    @Input() activeKpi: string;

    public parsedData: Row[] = [];

    ngOnChanges() {
        this._parseList();
    }

    private _parseList() {
        this.parsedData = this.data.map((row) => configRow(row, this.fieldsConfig));
    }
}
