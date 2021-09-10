import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  pages: 4,
  activePage: 0,
  limit: Infinity,
  pageGroups: undefined,
};
const changePage = ({ target, detail: page }) => {
  target.activePage = page;
};
export default {
  title: 'Components/Pagination/Examples',
  argTypes: {
    pageGroups: { control: { type: 'number' } },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ pages, activePage, limit, pageGroups }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-pagination
            .pages=${pages}
            .activePage=${activePage}
            .limit=${limit}
            .pageGroups=${pageGroups}
            @setPage=${changePage}
        />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithPageGroups = Template.bind({});
WithPageGroups.args = Object.assign(Object.assign({}, baseProps), { pages: 20, limit: 5, pageGroups: 3 });
