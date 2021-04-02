import React, { useEffect } from 'react';
import { actions, SynthReactList } from 'synth-react';
import { getListData } from './services/data.service';
import './App.css';
import { useDispatch } from 'react-redux';
import { getFilters } from './services/filter.service';
import { FiltersConfig } from './config/filters.config';

function App() {
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
    const data = getListData();

    return (
        <div className="App">
            <div className="list">
                <SynthReactList
                    loading={false}
                    enableDownload={true}
                    title={'List'}
                    limit={3}
                    data={data}
                    fieldsConfig={fieldsConfig}
                />
            </div>
        </div>
    );
}

export default App;
