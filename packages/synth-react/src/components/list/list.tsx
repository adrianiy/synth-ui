import React, { useEffect, useState } from 'react';
import { configRow } from 'synth-core/dist/utils';
import { FieldsConfig, Row } from 'synth-core/dist/models/list';
import { SynthList, SynthTitle } from '../../components';

function SynthReactList({
    loading,
    title,
    data,
    limit,
    activeKpi,
    fieldsConfig,
    decimals,
    expandable,
    enableDownload
}: Props) {
    const [ parsedData, setParsedData ] = useState([] as Row[]);

    useEffect(() => {
        if (fieldsConfig && data) {
            setParsedData(data.map((row) => configRow(row, fieldsConfig)));
        }
    }, [ data, fieldsConfig ]);

    return (
        <div>
            <SynthTitle titleText={title} />
            <SynthList
                loading={loading}
                data={parsedData}
                filterFields={activeKpi && [ activeKpi ]}
                defaultSortField={activeKpi}
                decimals={decimals}
                expandable={expandable}
                limit={limit}
                enableDownload={enableDownload}
            />
        </div>
    );
}

interface Props {
    loading?: boolean;
    title?: string;
    data?: Row[];
    limit?: number;
    fieldsConfig: FieldsConfig[];
    activeKpi?: string;
    decimals?: boolean;
    expandable?: boolean;
    enableDownload?: boolean;
}

SynthReactList.defaultProps = {
    loading: true,
    title: '',
    data: [],
    limit: undefined,
    activeKpi: undefined,
    fieldsConfig: [],
    decimals: true,
    expandable: false,
    enableDownload: false
} as Props;

export default SynthReactList;
