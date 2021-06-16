import { Component, Element, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { Article, ToasterTypes } from 'glyph-core';
import { Format } from '../../utils/format';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-article',
    styleUrl: 'article.scss',
    shadow: true,
})
export class ArticleComponent {
    /** Force visibility flag */
    @Prop() isVisible: Boolean = false;
    /** Article data */
    @Prop() article: Article;
    /** Flag to activate click callback */
    @Prop() isClickable: boolean;
    /** Field to render quantity tag */
    @Prop() quantityField: string;
    /** Image type to render image | plain_image */
    @Prop() imageType: string = 'image';
    /** **optional** Compose image url callback */
    @Prop() parseImageUrl: (image: string) => string;
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    @Prop() useBackdropDecoration: boolean = true;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Element reference */
    @Element() element: HTMLGlyphArticleElement;
    /** Click event callback */
    @Event() articleClick: EventEmitter<Article>;
    /** Article gets visible event */
    @Event() articleVisible: EventEmitter<any>;

    private _i18n: any;
    private _observer: IntersectionObserver;
    private _image: HTMLElement;

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings([ 'article' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    componentDidRender() {
        if (this._image) {
            this._observer = new IntersectionObserver(this._onIntersection);
            this._observer.observe(this._image);
        }
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will return image height */
    @Method()
    async getImageSize() {
        return this._image.getBoundingClientRect();
    }

    private _handleClick = () => {
        if (this.isClickable) {
            this.articleClick.emit(this.article);
        }
    };

    private _setImageRef = (el: HTMLElement) => {
        this._image = el;
    };

    private _onIntersection = async (entries: any[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.articleVisible.emit();
            }
        });
    };

    private _handleCopy = () => {
        const copylistener = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', location.href);
            e.preventDefault();
        };

        document.addEventListener('copy', copylistener);
        let success = 0;
        try {
            document.execCommand('copy');
            success = 1;
        } catch (err) {
            success = 0;
        } finally {
            document.removeEventListener('copy', copylistener);
        }
        window.dispatchEvent(
            new CustomEvent('copyReference', {
                detail: {
                    text: this._i18n[success ? 'copyDone' : 'copyFail'],
                    icon: success ? 'checkmark' : 'close',
                    type: success ? ToasterTypes.succes : ToasterTypes.fail,
                },
            }),
        );
    };

    private _renderQuantity = () => {
        const quantity = { value: this.article[this.quantityField], format: '0,0' };

        return (
            <Flex left className={`quantity ${this.useBackdropDecoration && 'quantity--backdrop'}`}>
                <Format config={quantity} />
                <span class="caption">{this._i18n[this.quantityField]}</span>
            </Flex>
        );
    };

    private _renderPvpTooltip = (pvps: { inicio: string; name: string; tag: string }[]) => {
        const isResume = pvps.length > 7;

        return (
            <Flex left className="pvp-tooltip">
                <h3>{this._i18n['pvp.title']}</h3>
                {isResume && (
                    <span class="caption">
                        {pvps.length} {this._i18n['pvp.countries']}
                    </span>
                )}
                {!isResume &&
                    pvps.map(pvp => (
                        <Flex row spaced className="pvp-row">
                            <span class="country">{pvp.name}</span>
                            <span class="start">{pvp.inicio}</span>
                        </Flex>
                    ))}
            </Flex>
        );
    };

    private _renderTags = () => {
        const hasTags = this.article.new || this.article.pvps?.length;

        if (hasTags) {
            return (
                <Flex center className="tags">
                    {this.article.new && (
                        <Flex row middle className="new">
                            NEW
                        </Flex>
                    )}
                    {this.article.pvps?.length && (
                        <Flex row middle className={cls('pvp', this.article.pvpType)}>
                            PVP
                            {this._renderPvpTooltip(this.article.pvps)}
                        </Flex>
                    )}
                </Flex>
            );
        }
    };

    private _renderHeader = () => {
        return (
            <Flex row spaced top className="header">
                {this._renderQuantity()}
                {this._renderTags()}
            </Flex>
        );
    };

    private _renderFooter = () => {
        return (
            <Flex left className={`footer ${this.useBackdropDecoration && 'footer--backdrop'}`}>
                <span class="description">{this.article.description}</span>
                <span class="reference" onClick={this._handleCopy}>
                    {this.article.partnumber}
                </span>
            </Flex>
        );
    };

    render() {
        const imageSrc = this.parseImageUrl
            ? this.parseImageUrl(this.article[this.imageType])
            : this.article[this.imageType];

        return (
            <div
                class={cls('article', this.isClickable && 'article--clickable')}
                ref={this._setImageRef}
                onClick={this._handleClick}
            >
                {this._renderHeader()}
                {this.isVisible && <img class="animated fadeIn" src={imageSrc} />}
                {this._renderFooter()}
                <glyph-toaster eventId="copyReference" ttl={1000} />
            </div>
        );
    }
}
