import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const clickEvent = () => {
    const event = new CustomEvent('demo1', {
        detail: { text: 'Toaster without ttl', icon: 'checkmark', type: 'success' },
    });
    window.dispatchEvent(event);
};

const clickEventError = () => {
    const event = new CustomEvent('demo2', { detail: { text: 'Toaster without ttl', icon: 'close', type: 'fail' } });
    window.dispatchEvent(event);
};

const clickEventTtl = () => {
    const event = new CustomEvent('demo3', {
        detail: { text: 'Toaster with ttl', icon: 'checkmark', type: 'success' },
    });
    window.dispatchEvent(event);
};

const baseProps = {
    eventId: 'demo1',
    onClick: clickEvent,
};

export default {
    title: 'Components/Toaster/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ eventId, onClick }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<div>
            <glyph-button text="trigger toaster" @click=${onClick} />
            <glyph-toaster .eventId=${eventId} />
        </div>`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithoutTtl = Template.bind({});
WithoutTtl.arggs = {
    ...baseProps,
};

export const WithTtl = Template.bind({});
WithTtl.args = {
    ...baseProps,
    eventId: 'demo3',
    onClick: clickEventTtl,
};

export const ErrorWithTtl = Template.bind({});
ErrorWithTtl.args = {
    ...baseProps,
    eventId: 'demo2',
    onClick: clickEventError,
};
