import { addons } from '@storybook/addons';
import driveTheme from './driveTheme';
import '!style-loader!css-loader!sass-loader!./re-style-manager.scss';

addons.setConfig({
    theme: driveTheme,
});
