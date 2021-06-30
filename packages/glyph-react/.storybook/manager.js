import { addons } from '@storybook/addons';
import driveTheme from 'common-storybook/driveTheme';
import '!style-loader!css-loader!sass-loader!common-storybook/re-style-manager.scss';

addons.setConfig({
    theme: driveTheme,
});
