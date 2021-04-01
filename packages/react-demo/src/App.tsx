import React from 'react';
import { SynthReactList } from 'synth-react';
import { getListData } from './services/data.service';
import './App.css';

function App() {
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
                <SynthReactList title={'List'} limit={3} data={data} fieldsConfig={fieldsConfig} />
            </div>
        </div>
    );
}

export default App;
