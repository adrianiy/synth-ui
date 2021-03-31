import { Component, Input, OnChanges } from '@angular/core';
import { FieldsConfig, Row } from 'synth-core/dist/models/list';
import { configRow } from 'synth-core/dist/utils';

@Component({
    selector: 'synth-ng-list',
    templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
    /** Load status */
    @Input() loading: boolean;
    /** Component title */
    @Input() title: string;
    /** Component data, this is going to be parsed internally */
    @Input() data: Array<any>;
    /** Active kpi. it's going to be used to filter list data */
    @Input() activeKpi: string;
    /** List row limit */
    @Input() limit: number;
    /** **!REQUIRED** Field configuration used in parse process */
    @Input() fieldsConfig: FieldsConfig[];
    /** Flag to show decimals */
    @Input() decimals: boolean;
    /** Flag to set list as expandable */
    @Input() expandable: boolean;
    /** Flag to enable data download as xlsx */
    @Input() enableDownload: boolean;

    /** @ignore Result data that will be use as synth-list input */
    public parsedData: Row[] = [];

    /** Triggers on each input change */
    ngOnChanges() {
        this._parseList();
    }

    /**
     * If data exists and has length we will parse data
     *
     * @return A list with a format acepted by synth-list
     */
    private _parseList() {
        if (this.fieldsConfig && this.data) {
            this.parsedData = this.data?.map((row) => configRow(row, this.fieldsConfig)) || [];
        }
    }
}
