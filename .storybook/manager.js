import { addons } from '@storybook/addons';
import driveTheme from './driveTheme';

addons.setConfig({
    theme: driveTheme,
    previewTabs: {
        'canvas': 'Play with it!',
        'storybook/docs/panel': null,
    },
});
