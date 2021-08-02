import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const clickManager = (eventId: string) => () => {
    switch (eventId) {
        case 'demo1':
            clickEvent(eventId);
            break;
        case 'demo2':
            clickEvent(eventId);
            break;
        case 'demo3':
            clickEventTtl(eventId);
            break;
        case 'demo4':
            clickEventError(eventId);
            break;
        default:
            return null;
    }
};

const clickEvent = (eventId: string) => {
    const event = new CustomEvent(eventId, {
        detail: { text: 'Toaster without ttl', icon: 'checkmark', type: 'success' },
    });
    window.dispatchEvent(event);
};

const clickEventError = (eventId: string) => {
    const event = new CustomEvent(eventId, { detail: { text: 'Toaster without ttl', icon: 'close', type: 'fail' } });
    window.dispatchEvent(event);
};

const clickEventTtl = (eventId: string) => {
    const event = new CustomEvent(eventId, {
        detail: { text: 'Toaster with ttl', icon: 'checkmark', type: 'success' },
    });
    window.dispatchEvent(event);
};

export default {
    title: 'Components/Toaster/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ eventId, ttl }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<div>
            <glyph-button text="Trigger toaster" @click=${clickManager(eventId)}></glyph-button>
            <glyph-toaster .eventId=${eventId} .ttl=${ttl} />
        </div>`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    eventId: 'demo1',
};

export const WithoutTtl = Template.bind({});
WithoutTtl.args = {
    eventId: 'demo2',
};

export const WithTtl = Template.bind({});
WithTtl.args = {
    eventId: 'demo3',
    ttl: 1000,
};

export const ErrorWithTtl = Template.bind({});
ErrorWithTtl.args = {
    eventId: 'demo4',
    ttl: 1000,
};
