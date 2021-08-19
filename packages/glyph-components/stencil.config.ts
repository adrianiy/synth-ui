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
            componentCorePackage: 'glyph-components-poc',
            directivesProxyFile: '../glyph-angular/projects/glyph-angular/src/lib/glyph-directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
        angularOutputTargetFix({
            directivesUtilsFile:
                '../glyph-angular/projects/glyph-angular/src/lib/glyph-directives/angular-component-lib/utils.ts',
        }),
        reactOutputTarget({
            componentCorePackage: 'glyph-components-poc',
            proxiesFile: '../glyph-react/src/components.ts',
            includeDefineCustomElements: true,
            includePolyfills: true,
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
                    src: '**/*.woff2',
                    dest: '../assets/fonts',
                },
                {
                    src: '**/*.otf',
                    dest: '../assets/fonts',
                },
                {
                    src: '**/*.store.ts',
                    dest: '../stores',
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
        },
    ],
};
