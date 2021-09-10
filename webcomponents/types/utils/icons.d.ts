import { FunctionalComponent } from '../stencil-public-runtime';
interface IconProps {
  icon?: string;
  outlined?: boolean;
  button?: boolean;
  class?: string;
  onClick?: (event: MouseEvent) => any;
}
export declare const Icon: FunctionalComponent<IconProps>;
export {};
