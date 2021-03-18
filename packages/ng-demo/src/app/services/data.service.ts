import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Row } from '../../../../synth-angular/node_modules/synth-components/dist/types/components/list/list.model';
import { FiltersConfig } from './../../../../synth-angular/src';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private _http: HttpClient) {}

    async getFiltersConfig(): Promise<FiltersConfig> {
        return await this._http.get<FiltersConfig>('/filters').toPromise();
    }

    async getListData(): Promise<Row[]> {
        return await this._http.get<Row[]>('/country').toPromise();
    }
}
