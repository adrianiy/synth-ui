/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
export function registerClickOutside(callback: (event: any) => void): void {
    window.addEventListener('click', callback, false);
}

/**
 * Remove click outside callback function for HTMLElement.
 */
export function removeClickOutside(callback: (event: any) => void): void {
    window.removeEventListener('click', callback, false);
}
