import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { angularValueAccessorBindings } from './src/utils/utils';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    namespace: 'synth-components',
    plugins: [
        sass({
            injectGlobalPaths: [ 'src/global/global.scss' ],
        }),
    ],
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'synth-components',
            directivesProxyFile: '../synth-angular/src/synth-directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
        reactOutputTarget({
            componentCorePackage: 'synth-components',
            proxiesFile: '../synth-react/src/components.ts',
        }),
        {
            type: 'dist',
            copy: [
                {
                    src: '**/*.i18n.*.json',
                    dest: '../assets/i18n',
                },
                {
                    src: '**/*.woff2',
                    dest: '../assets/fonts',
                },
                {
                    src: '**/*.model.ts',
                    dest: '../models',
                },
            ],
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
            footer: '',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
            copy: [
                {
                    src: '**/*.i18n.*.json',
                    dest: 'assets/i18n',
                },
            ],
        },
    ],
};
