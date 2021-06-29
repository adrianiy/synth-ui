import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    isVisible: true,
    quantityField: 'units',
};

const articleData = {
    image:
        'https://static.zara.net/photos/rw-center/2020/I/0/1/p/4424/154/250/2/w/400/4424154250_1_1_1.jpg?ts=1603883234354',
    units: 1000,
    description: 'Test article',
    partnumber: '07385096800-I2021',
};

const _fillTag = () => ({
    inicio: '2021-04-01',
    name: 'Reino unido',
});

export default {
    title: 'Components/Article/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ isVisible, article, quantityField }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-article
            .article=${article}
            .quantityField=${quantityField}
            .isVisible=${isVisible}
        ></glyph-article>`,
        ctx,
        style: 'margin-left: 200px; width: 200px; display: block',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
    article: articleData,
};

export const Tagged = Template.bind({});
Tagged.args = {
    ...baseProps,
    article: { ...articleData, new: Array(5).fill(0).map(_fillTag) },
};

export const Pvp = Template.bind({});
Pvp.args = {
    ...baseProps,
    article: { ...articleData, pvpType: 'global', pvps: Array(70).fill(0).map(_fillTag) },
};

export const PvpNormal = Template.bind({});
PvpNormal.args = {
    ...baseProps,
    article: { ...articleData, pvpType: 'normal', pvps: Array(7).fill(0).map(_fillTag) },
};
