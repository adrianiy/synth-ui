import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'ng-fib-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    public listData = [];
    public fieldsConfig = [
        {
            title: () => 'amount',
            preffix: '',
            suffix: '',
            format: '0,0',
            sign: false,
            field: () => 'amount'
        },
        {
            title: () => 'crec.',
            preffix: 'growth_',
            suffix: '',
            format: '0,0.0 %',
            sign: false,
            field: () => 'amount'
        }
    ];

    constructor(private _dataService: DataService) {}

    ngOnInit() {
        this._loadListData();
    }

    private async _loadListData() {
        this.listData = await this._dataService.getListData();
    }
}
