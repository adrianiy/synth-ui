import { Component, Input, OnChanges } from '@angular/core';
import { FieldConfig } from './list.model';
import { Row } from 'synth-components/dist/models/list.model';

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
    @Input() fieldsConfig: FieldConfig[];
    @Input() decimals: boolean;
    @Input() expandable: boolean;
    @Input() enableDownload: boolean;
    @Input() activeKpi: string;

    public parsedData: Row[] = [];

    private _selectedCountryIdx: number;

    ngOnChanges() {
        this._parseList();
    }

    private _parseList() {
        this.parsedData = this.data.map(this._configRow);
    }

    private _configRow = (row: any, index: number) => {
        const isExpanded = index === this._selectedCountryIdx || this._selectedCountryIdx === 0;
        const newRow = this._configFields(row);

        if (this.activeKpi !== 'orders') {
            newRow['_expanded'] = isExpanded;
            newRow['_children'] = this._parseListChildren(row['children']);
        }

        return newRow;
    };

    private _parseListChildren(children: any) {
        if (children) {
            return children.map((row: any) => this._configFields(row));
        } else {
            return Array(3)
                .fill(0)
                .map(() => ({ _loading: true }));
        }
    }

    private _configFields(row: any) {
        const newRow = {
            _isTotal: row._isTotal,
            name: row.name,
        };

        this.fieldsConfig.forEach((field) => {
            const fieldTitle = field.title();

            newRow[fieldTitle] = {
                value: row[field.value()],
                decoration: field.decoration?.(),
                foramt: field.format?.(),
                sign: field.sign?.(),
                negativeSign: field.negativeSign?.(),
                showZero: field.showZero?.(),
            };
        });

        return newRow;
    }
}
