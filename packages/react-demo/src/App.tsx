import React, { useEffect } from 'react';
import { actions, SynthReactList } from 'glyph-react';
import { getChildrenList, getListData } from './services/data.service';
import './App.css';
import { useDispatch } from 'react-redux';
import { getFilters } from './services/filter.service';
import { FiltersConfig } from './config/filters.config';
import { useState } from 'react';

function App() {
    const [data, setData] = useState(getListData());
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadFilters() {
            dispatch(actions.filters.initialize(await getFilters(), 'test', FiltersConfig, {}, desc => desc));
        }

        loadFilters();
    }, [dispatch]);

    const fieldsConfig = [
        {
            title: () => 'amount',
            value: () => 'amount',
            format: () => '0,0',
            decoration: () => 'green',
            sign: () => false,
        },
        {
            title: () => 'crec.',
            value: () => 'growth_amount',
            format: () => '0,0.0 %',
            decoration: () => 'green',
            sign: () => false,
        },
    ];

    const expandRow = (event: any) => {
        setData(getChildrenList());
    };

    return (
        <div className="App">
            <div className="list">
                <SynthReactList
                    loading={false}
                    enableDownload
                    expandable
                    title={'List'}
                    limit={3}
                    data={data}
                    fieldsConfig={fieldsConfig}
                    onExpandRow={expandRow}
                />
            </div>
        </div>
    );
}

export default App;
