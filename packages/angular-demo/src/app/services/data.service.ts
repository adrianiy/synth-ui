import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltersConfig, Row } from 'glyph-angular-poc';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private _http: HttpClient) {}

    async getFiltersConfig(): Promise<FiltersConfig> {
        return await this._http.get<FiltersConfig>('/filters').toPromise();
    }

    async getListData(): Promise<Row[]> {
        return await this._http.get<Row[]>('/country').toPromise();
    }

    async getChildrenData(): Promise<Row[]> {
        const data = await this._http.get<Row[]>('/country').toPromise();
        data.forEach(row => {
            row.children = [
                {
                    name: 'child',
                    amount: Math.random() * 10000 - 1,
                    growth_amount: Math.random(),
                },
            ];
        });

        return data;
    }
}
