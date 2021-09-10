import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  height: 150,
  width: 500,
  horizontal: false,
  vertical: true,
  tiny: false,
  hideScrollBar: false,
  scrollSpeed: 0.05,
};
export default {
  title: 'Components/Scroll/Examples',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ height, width, horizontal, vertical, scrollSpeed, hideScrollBar, tiny }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-scroll
            .hideScrollBar=${hideScrollBar}
            .tiny=${tiny}
            .horizontal=${horizontal}
            .vertical=${vertical}
            .height=${height}
            .width=${width}
            .scrollSpeed=${scrollSpeed}
        >
            <div style="width: 500px">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </glyph-scroll>`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithTinyBar = Template.bind({});
WithTinyBar.args = Object.assign(Object.assign({}, baseProps), { tiny: true });
export const WithoutBar = Template.bind({});
WithoutBar.args = Object.assign(Object.assign({}, baseProps), { hideScrollBar: true });
export const WithFasterScroll = Template.bind({});
WithFasterScroll.args = Object.assign(Object.assign({}, baseProps), { scrollSpeed: 1 });
export const WithHorizontalScroll = Template.bind({});
WithHorizontalScroll.args = Object.assign(Object.assign({}, baseProps), { horizontal: true, width: 300 });
