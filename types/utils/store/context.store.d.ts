interface Store {
  basePath: string;
  interface: string;
  theme: string;
}
declare let state: Store;
export declare const setBasePath: (basePath: string) => void;
export declare const setInterface: (interfaceValue: string) => void;
export declare const setTheme: (theme: string) => void;
export default state;
