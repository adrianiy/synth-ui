import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { Article, ToasterTypes, ArticleSize } from 'glyph-core';
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
    /** Show tooltip flag */
    @State() tooltip: string;
    /** Article size calculated after render to print small letters if necessary */
    @State() articleSize: ArticleSize = ArticleSize.large;

    private _i18n: any;
    private _observer: IntersectionObserver;
    private _article: HTMLElement;
    private _id = new Date().valueOf();

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings([ 'article' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    componentDidRender() {
        if (this._article) {
            this._getArticleSize();
            this._observer = new IntersectionObserver(this._onIntersection);
            this._observer.observe(this._article);
        }
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will return image height */
    @Method()
    async getImageSize() {
        return this._article.getBoundingClientRect();
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will hide tooltip */
    @Method()
    async hideTooltip() {
        this._hideTooltip();
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will hide tooltip */
    @Method()
    async setArticleSize() {
        this._getArticleSize();
    }

    private _getArticleSize() {
        const { width } = this.element.getBoundingClientRect();
        this.articleSize = width < 120 ? ArticleSize.small : width < 300 ? ArticleSize.medium : ArticleSize.large;
    }

    private _handleClick = () => {
        if (this.isClickable) {
            this.articleClick.emit(this.article);
        }
    };

    private _setArticleRef = (el: HTMLElement) => {
        this._article = el;
    };

    private _onIntersection = async (entries: any[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.articleVisible.emit();
                this._getArticleSize();
            }
        });
    };

    private _handleCopy = () => {
        const partnumber = this.article.reference;
        const copylistener = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', partnumber);
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
            new CustomEvent(`copyReference${this._id}`, {
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

    private _showTooltip = (from: string) => () => {
        this.tooltip = from;
    };

    private _hideTooltip = () => {
        this.tooltip = undefined;
    };

    private _renderTagsTooltip = () => {
        const tags = this.article[this.tooltip];
        const title = this._i18n[`${this.tooltip}.title`];
        const { x, y, width } = this.element.getBoundingClientRect();
        const leftFix = this.articleSize === ArticleSize.small ? 218 : 230;
        const top = `${y + 5}px`;
        const left = `${x + width - leftFix}px`;
        const isResume = tags.length > 7;

        return (
            <Flex left className="tag-tooltip" style={{ top, left }}>
                <h3>{title}</h3>
                {isResume && (
                    <span class="caption">
                        {tags.length} {this._i18n['tags.countries']}
                    </span>
                )}
                {!isResume &&
                    tags.map(tag => (
                        <Flex row spaced className="tag-row">
                            <span class="country">{tag.name}</span>
                            <span class="start">{tag.inicio}</span>
                        </Flex>
                    ))}
            </Flex>
        );
    };

    private _renderTags = () => {
        const hasTags = this.article.new?.length || this.article.pvps?.length;

        if (hasTags) {
            return (
                <Flex center className="tags" onMouseLeave={this._hideTooltip}>
                    {this.article.new?.length && (
                        <Flex row middle className="new" onMouseEnter={this._showTooltip('new')}>
                            NEW
                        </Flex>
                    )}
                    {this.article.pvps?.length && (
                        <Flex
                            row
                            middle
                            className={cls('pvp', this.article.pvpType || 'normal')}
                            onMouseEnter={this._showTooltip('pvps')}
                        >
                            PVP
                        </Flex>
                    )}
                    {this.tooltip && this._renderTagsTooltip()}
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
                class={cls('article', this.isClickable && 'article--clickable', this.articleSize)}
                ref={this._setArticleRef}
                onClick={this._handleClick}
            >
                {this.isVisible && <img class="animated fadeIn" src={imageSrc} />}
                {this._renderHeader()}
                {this._renderFooter()}
                <glyph-toaster eventId={`copyReference${this._id}`} ttl={1000} />
            </div>
        );
    }
}
