import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'ng-fib-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
    public listData = [];
    public fieldsConfig = [
        {
            title: () => 'amount',
            value: () => 'amount',
            format: () => '0,0',
            sign: () => false,
        },
        {
            title: () => 'crec.',
            value: () => 'growth_amount',
            format: () => '0,0.0 %',
            sign: () => false,
        },
    ];

    constructor(private _dataService: DataService) {}

    ngOnInit() {
        this._loadListData();
    }

    private async _loadListData() {
        this.listData = await this._dataService.getListData();
    }
}
