import React, { useEffect, useState } from 'react';
import { FieldsConfig, Row, configRow } from 'glyph-core';
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
    enableDownload,
    i18n,
    onExpandRow,
}: Props) {
    const [ parsedData, setParsedData ] = useState([] as Row[]);

    useEffect(() => {
        if (fieldsConfig && data) {
            setParsedData(data.map(row => configRow(row, fieldsConfig)));
        }
    }, [ data, fieldsConfig ]);

    return (
        <div>
            <SynthTitle titleText={title} />
            <SynthList
                loading={loading}
                data={parsedData}
                filterFields={activeKpi ? [ activeKpi ] : []}
                defaultSortField={activeKpi}
                decimals={decimals}
                expandable={expandable}
                limit={limit}
                enableDownload={enableDownload}
                i18n={i18n}
                onExpandRow={onExpandRow}
            />
        </div>
    );
}

interface Props {
    /** Loading state. If true will render skeleton loader */
    loading?: boolean;
    /** Component title */
    title?: string;
    /** Component data, this is going to be parsed internally */
    data?: Row[];
    /** List row limit */
    limit?: number;
    /** **!REQUIRED** Field configuration used in parse process */
    fieldsConfig: FieldsConfig[];
    /** Active kpi. it's going to be used to filter list data */
    activeKpi?: string;
    /** Flag to show decimals */
    decimals?: boolean;
    /** Flag to set list as expandable */
    expandable?: boolean;
    /** Flag to enable data download as xlsx */
    enableDownload?: boolean;
    /** i18n custom translations */
    i18n?: { [key: string]: string };
    /** On expand row event handler */
    onExpandRow?: any;
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
    enableDownload: false,
    onExpandRow: undefined,
} as Props;

export default SynthReactList;
