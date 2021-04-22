import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { UIInterface } from 'glyph-core';
import { FiltersConfig } from '../../helpers/configs';
import { TranslateServiceStub } from '../../helpers/fakers';
import { FilterEntities } from '../../helpers/filters';
import { ChipsbarComponent } from './chipsbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService } from '../../services';
import { GlyphAngularComponents } from '../../glyph-angular.module';
import { GlyphStoreModule } from '../../glyph-store.module';
import { GlyphAngularServices } from '../../glyph-services.module';

function initFilterService(filtersService: FilterService) {
    return () => filtersService.initializeFilters(FilterEntities, 'test', FiltersConfig, {});
}

export default {
    title: 'Components/Chipsbar Component',
    component: ChipsbarComponent,
    decorators: [
        moduleMetadata({
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            providers: [
                FilterService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: initFilterService,
                    multi: true,
                    deps: [ FilterService ],
                },
            ],
            imports: [
                GlyphAngularComponents,
                GlyphAngularServices,
                GlyphStoreModule,
                RouterTestingModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: TranslateServiceStub },
                }),
            ],
        }),
        componentWrapperDecorator(story => `<div style="height: 350px">${story}</div>`),
    ],
    parameters: {
        docs: {
            description: {
                component: `
Component to manage application filters, wrapper of [**glyph-chipsbar**](https://adrianiy.github.io/glyph-ui/?path=/docs/webcomponents_components-chipsbar-classic--basic). 

Controls how web-components and application state interacts, uses \`filtersConfig\` state to render filters.

The events triggered in web-component will execute a state update.
                `,
            },
        },
    },
    argTypes: {
        interface: { options: [ 'modern', 'classic' ] },
    },
} as Meta;

export const Chipsbar: Story<ChipsbarComponent> = args => ({
    props: args,
    template: '<glyph-ng-chipsbar [interface]="interface"></glyph-ng-chipsbar>',
});

Chipsbar.args = { interface: UIInterface.classic };
Chipsbar.parameters = {
    docs: {
        inlineStories: true,
        description: {
            story: 'test',
        },
    },
};
