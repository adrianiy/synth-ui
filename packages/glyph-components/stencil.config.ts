import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { angularValueAccessorBindings } from './src/utils/utils';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTargetFix } from './angular-output-target-fix';

export const config: Config = {
    namespace: 'glyph-components',
    plugins: [
        sass({
            injectGlobalPaths: [ 'src/global/global.scss' ],
        }),
    ],
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'glyph-components',
            directivesProxyFile: '../glyph-angular/projects/glyph-angular/src/lib/glyph-directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
        angularOutputTargetFix({
            directivesUtilsFile:
                '../glyph-angular/projects/glyph-angular/src/lib/glyph-directives/angular-component-lib/utils.ts',
        }),
        reactOutputTarget({
            componentCorePackage: 'glyph-components',
            proxiesFile: '../glyph-react/src/components.ts',
        }),
        {
            type: 'dist',
            copy: [
                {
                    src: '**/*.svg',
                    dest: '../assets/brands',
                },
                {
                    src: '**/assets/corporative/*',
                    dest: '../assets/corporative',
                },
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
