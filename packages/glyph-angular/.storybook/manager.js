import { addons } from '@storybook/addons';
import driveTheme from './../../../.storybook/driveTheme';
import '!style-loader!css-loader!sass-loader!./../../../.storybook/re-style-manager.scss';

addons.setConfig({
    theme: driveTheme,
});
