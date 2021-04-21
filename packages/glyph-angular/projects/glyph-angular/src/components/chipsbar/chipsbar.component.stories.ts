import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { UIInterface } from 'glyph-core';
import { GlyphComponentsModule } from '../../glyph-angular.module';
import { FiltersConfig } from '../../helpers/configs';
import { TranslateServiceStub } from '../../helpers/fakers';
import { FilterEntities } from '../../helpers/filters';
import { GlyphFilterService } from '../../services/services.module';
import { ChipsbarComponent } from './chipsbar.component';
import { RouterTestingModule } from '@angular/router/testing';

function initFilterService(filtersService: GlyphFilterService) {
    return () => filtersService.initializeFilters(FilterEntities, 'test', FiltersConfig, {});
}

export default {
    title: 'Components/Chipsbar Component',
    component: ChipsbarComponent,
    decorators: [
        moduleMetadata({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                GlyphFilterService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: initFilterService,
                    multi: true,
                    deps: [GlyphFilterService],
                },
            ],
            imports: [
                GlyphComponentsModule,
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
        interface: { options: ['modern', 'classic'] },
    },
} as Meta;

export const Chipsbar: Story<ChipsbarComponent> = args => ({
    props: args,
    template: `<glyph-ng-chipsbar [interface]="interface"></glyph-ng-chipsbar>`,
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
