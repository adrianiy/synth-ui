import { Component, getAssetPath, Listen, Prop, h, EventEmitter, Event, Element } from '@stencil/core';
import { Brand } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';

@Component({
    tag: 'glyph-brand-list',
    styleUrl: 'brand-list.scss',
    shadow: true,
})
export class BrandListComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Brand list */
    @Prop() brandList: Brand[];
    /** Event triggered when user clicks outside */
    @Prop() outsideCallback: () => void;
    /** Event triggerd on brand click */
    @Event() brandChange: EventEmitter<Brand>;
    /** Element reference */
    @Element() element: HTMLGlyphBrandListElement;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.brand-list__container'))) {
            this.outsideCallback();
        }
    }

    componentWillLoad() {
        this.basePath = this.basePath || state.basePath;
    }

    private _handleBrandChange = (brand: Brand) => () => {
        this.brandChange.emit(brand);
    };

    render() {
        return (
            <Flex column class="brand-list__container">
                {this.brandList.map((brand: Brand) => (
                    <Flex column middle center class="brand__container" onClick={this._handleBrandChange(brand)}>
                        <img src={getAssetPath(`${this.basePath}assets/brands/icon_${brand.name}.svg`)} />
                    </Flex>
                ))}
            </Flex>
        );
    }
}
