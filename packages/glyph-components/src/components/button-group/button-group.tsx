import {Component, Prop, h} from "@stencil/core";
import { Button } from 'glyph-core';
import { Flex } from "../../utils/layout";
import { cls, getFormatedValues } from "../../utils/utils";

@Component({
    tag: 'glyph-button-group',
    styleUrl: 'button-group.scss',
    shadow: true
})
export class ButtonGroupComponent {
    /** Buttons configuration */
    @Prop() buttons: Button[];

    private _renderTitle = (button: Button) => {
        const {color, formattedValue} = getFormatedValues(button.title);
    
        return <h2 class={color}>{formattedValue}</h2>
    }

    private _renderSubtitle = (button: Button) => {
        const {color, formattedValue} = getFormatedValues(button.subtitle);
    
        return <h4 class={color}>{formattedValue}</h4>
    }

    return() {
        return (
            <Flex row className="button-group__container">
                { this.buttons.map(button => (
                    <Flex center middle className={cls("button", button.active && 'active')} onClick={button.action}>
                        { button.title && this._renderTitle(button) }
                        { button.subtitle && this._renderSubtitle(button) }
                    </Flex>
                )) }
            </Flex>
        )
    }
}
