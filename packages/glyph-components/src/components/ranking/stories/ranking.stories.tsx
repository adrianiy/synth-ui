import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
import { rankingData, sectionData } from './helpers/data';

const baseProps = {
    rankingData: rankingData,
    columns: 3,
    innerColumns: 1,
    rows: 1,
    gap: '',
    innerGap: '',
    rankingHeader: '',
    loading: false,
};

export default {
    title: 'Components/Ranking/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ loading, rankingData, rankingHeader, columns, innerColumns, innerGap, rows, gap }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-ranking
            .rankingData=${rankingData}
            .rankingHeader=${rankingHeader}
            .columns=${columns}
            .innerColumns=${innerColumns}
            .rows=${rows}
            .gap=${gap}
            .innerGap=${innerGap}
            .useBackdropDecoration=${false}
            .loading=${loading}
        />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithInnerColumns = Template.bind({});
WithInnerColumns.args = {
    ...baseProps,
    innerColumns: 2,
    rows: 2,
    innerGap: 'var(--gui-padding--xs)',
};

export const AsSingleRanking = Template.bind({});
AsSingleRanking.args = {
    ...baseProps,
    rankingData: sectionData,
    columns: 3,
    rows: 1,
};

export const AsSingleRankingGrid = Template.bind({});
AsSingleRankingGrid.args = {
    ...baseProps,
    rankingData: sectionData,
    columns: 6,
    rows: 3,
    gap: 'var(--gui-padding--xs)',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
    ...baseProps,
    rankingData: sectionData,
    rankingHeader: 'header test',
};

export const WithLoader = Template.bind({});
WithLoader.args = {
    ...baseProps,
    loading: true,
};
