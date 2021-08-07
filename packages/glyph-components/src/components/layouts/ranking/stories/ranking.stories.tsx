import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { rankingData, sectionData } from './helpers/data';

const baseProps = {
    rankingData: rankingData,
    compRankingData: [],
    loading: false,
    loadingComparable: false,
};

export default {
    title: 'Layout/Ranking/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ rankingData, interface: interfaceValue, compRankingData, loading, loadingComparable }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-ranking-layout
            .interface=${interfaceValue}
            .rankingData=${rankingData}
            .compRankingData=${compRankingData}
            .loading=${loading}
            .loadingComparable=${loadingComparable}
            .useBackdropDecoration=${false}
        />`,
        ctx,
        style: 'height: 100%; width: 100%; overflow: hidden',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const AsSingleSection = Template.bind({});
AsSingleSection.args = {
    ...baseProps,
    rankingData: sectionData,
    compRankingData: sectionData,
    loadingComparable: false,
};
