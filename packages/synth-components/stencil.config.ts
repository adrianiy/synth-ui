import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { angularValueAccessorBindings } from './src/utils/utils';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    namespace: 'synth-components',
    plugins: [
        sass({
            injectGlobalPaths: ['src/global/global.scss'],
        }),
    ],
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'synth-components',
            directivesProxyFile: '../synth-angular/src/directives/proxies.ts',
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
                    dest: '../i18n',
                },
                {
                    src: '**/*.woff2',
                    dest: '../fonts',
                },
            ],
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            copy: [
                {
                    src: '**/*.i18n.*.json',
                    dest: 'i18n',
                },
                {
                    src: '**/*.woff2',
                    dest: 'fonts',
                },
            ],
            serviceWorker: null, // disable service workers
        },
    ],
};
