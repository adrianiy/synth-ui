import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { UIInterface } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-modal',
    styleUrl: 'modal.scss',
    shadow: true,
})
export class ModalComponent {
    /** Modal visibility flag */
    @Prop() visible: boolean;
    /** Modal title */
    @Prop() modalTitle: string;
    /** Modal padded flag */
    @Prop() padded: boolean = true;
    /** Modal min with */
    @Prop() maxWidth: string = '80%';
    /** Modal min height */
    @Prop() maxHeight: string;
    /** Close button flag */
    @Prop() closeButton: boolean;
    /** Cancel button text. Renders button if set */
    @Prop() cancelButton: string;
    /** Apply button text. Renders button if set */
    @Prop() applyButton: string;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** close event */
    @Event() close: EventEmitter<any>;
    /** apply event */
    @Event() apply: EventEmitter<any>;
    /** cancel event */
    @Event() cancel: EventEmitter<any>;

    private _checkClose = (event: any) => {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.modal__container')) && this.visible) {
            this.close.emit();
        }
    };

    private _onClose = () => {
        this.close.emit();
    };

    private _onApply = () => {
        this.apply.emit();
    };

    private _onCancel = () => {
        this.cancel.emit();
    };

    private _renderHeader = () => {
        return (
            <glyph-title interface={this.interface}>
                <Flex
                    row
                    middle
                    spaced={!!this.modalTitle}
                    right={!this.modalTitle}
                    class={cls('modal__container__header', this.interface)}
                >
                    <span>{this.modalTitle && this.modalTitle}</span>
                    {this.closeButton && <Icon icon="close" onClick={this._onClose} />}
                </Flex>
            </glyph-title>
        );
    };

    private _renderButtons = () => {
        return (
            <Flex row right middle class="modal__container__buttons">
                {this.cancelButton && (
                    <glyph-button
                        interface={this.interface}
                        cancel
                        action
                        onClick={this._onCancel}
                        text={this.cancelButton}
                    />
                )}
                {this.applyButton && (
                    <glyph-button interface={this.interface} onClick={this._onApply} text={this.applyButton} />
                )}
            </Flex>
        );
    };

    render() {
        return (
            this.visible && (
                <Flex middle center class="modal__wrapper animated fadeIn" onClick={this._checkClose}>
                    <Flex
                        class={cls('modal__container', { padded: this.padded })}
                        style={{ maxWidth: this.maxWidth, maxHeight: this.maxHeight, height: this.maxHeight && '100%' }}
                    >
                        {(this.modalTitle || this.closeButton) && this._renderHeader()}
                        <slot />
                        {(this.applyButton || this.cancelButton) && this._renderButtons()}
                    </Flex>
                </Flex>
            )
        );
    }
}
