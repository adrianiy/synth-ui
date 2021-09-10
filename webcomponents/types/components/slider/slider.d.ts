import { EventEmitter } from '../../stencil-public-runtime';
export declare class SliderComponent {
  /** Slider options */
  options: any[];
  /** Current slider value between 0 and 100 */
  currentValue: number;
  /** Option change event */
  optionChange: EventEmitter<{
    option: any;
    value: number;
  }>;
  private _handleInputChange;
  render(): any;
}
