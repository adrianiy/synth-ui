import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'synth-components',
    plugins: [
        sass({
            injectGlobalPaths: ['src/global/global.scss'],
        }),
    ],
    globalStyle: 'src/global/global.scss',
    outputTargets: [
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
