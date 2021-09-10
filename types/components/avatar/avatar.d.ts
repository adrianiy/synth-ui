import { UserData } from 'glyph-core-poc';
export declare class AvatarComponent {
  /** User avatar image */
  image: UserData['image'];
  /** User name, used as image fallback */
  name: UserData['name'];
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  componentWillLoad(): void;
  render(): any;
}
