import { FunctionalComponent, h } from "@stencil/core";

interface SewingIconProps {
    icon?: string;
    class?: string;
}

const SewingIcon: FunctionalComponent<SewingIconProps> = ({ icon, ...props }: SewingIconProps) => {
    if (props.icon === "clothing-kids-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M13 18H7l-2-3h10l-2 3zM15 14H5V8L3 9 2 5l5.328-3s.85 1.276 2.172 1.551V7h1V3.547C11.717 3.264 12.138 2 12.138 2L18 5l-1 4-2-1v6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clothing-kids-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 15l2 3h6l2-3V8l2 1 1-4-5.862-3s-.083.25-.282.552c-.306.464-.885 1.051-1.856 1.051C8.397 3.603 7.328 2 7.328 2L2 5l1 4 2-1v7zM3.668 7.548L6 6.382V14h8V6.382l2.332 1.166.505-2.02-4.305-2.203c-.03.039-.06.078-.094.117-.394.473-1.027.983-1.938 1.124V7h-1V4.567c-.902-.133-1.617-.602-2.088-1.006a5.552 5.552 0 01-.31-.287L3.155 5.497l.513 2.051zM13.798 15H6.202l1.333 2h4.93l1.333-2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clothing-man-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M5 18V8H4v3l-2-1V5.429L5 4l.286-.23 2.645 3.464L9.5 5.824v5.168h1V5.824l1.569 1.41 2.645-3.463L15 4l3 1.429V10l-2 1V8h-1v10H5z"
                    fill="#FF8000"
                />
                <path
                    d="M9.275 4.682l-1.56-1.549h4.57l-1.56 1.549 1.206 1.084 2.002-2.62L12.5 2h-5L6.067 3.146l2.002 2.62 1.206-1.084z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clothing-man-outined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 4l-2.5-2h-5L5 4 2 5.429V10l2 1v7h12v-7l2-1V5.429L15 4zM4 9.882l-1-.5V6.06l2.533-1.206L7.5 8l2-1.92V11h1V6.08l2 1.92 1.966-3.146L17 6.06v3.322l-1 .5V8h-1v9H5V8H4v1.882zM11.806 3l-1.799 2.59h-.014L8.194 3h3.612zm-.498 2.47l1.403-2.02.97.775-1.376 2.201-.997-.956zM7.29 3.45l-.97.775 1.377 2.201.996-.956-1.403-2.02z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clothing-woman-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M2.828 5.862c.334-1.674 1.685-2.738 2.695-3.317L9.5 8.227v5.36h1v-5.36l4.012-5.732c.885.507 2.037 1.496 2.66 3.367L18 14.5l-2.5 1V8h-1v10h-9V8h-1v7.5l-2.5-1 .828-8.638z"
                    fill="#FF8000"
                />
                <path
                    d="M13.31 2s.102.02.274.077L10 7.197 6.431 2.1C6.594 2.032 6.69 2 6.69 2c3.31 1.655 6.62 0 6.62 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clothing-woman-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.69 2S3.38 3.103 2.828 5.862L2 14.5l2.5 1V18h11v-2.5l2.5-1-.828-8.638C16.07 2.552 13.31 2 13.31 2S10 3.655 6.69 2zm8.81 12.423l1.433-.573-.745-7.775c-.476-1.35-1.262-2.118-1.915-2.553a4.494 4.494 0 00-.337-.204L10.5 8.227v5.36h-1v-5.36L6.1 3.368c-.179.1-.37.216-.565.35-.785.544-1.502 1.3-1.717 2.294l-.751 7.838 1.433.573V8h1v9h9V8h1v6.423zM11.406 3.607a9.872 9.872 0 001.33-.318L10 7.197l-2.709-3.87c1.532.507 2.993.467 4.115.28z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-kids-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M2.22 14.445c0-.529-.052-1.057-.105-1.605-.166-1.72-.35-3.624.98-6.285 3.508 1.753 6.138 0 6.138 0 .584.292 1.124.553 1.623.788L9.695 9.088l.832.554 1.25-1.876c.235.106.46.205.677.298l-1.006 1.508.832.555 1.114-1.67c.36.145.691.272.998.385a3.342 3.342 0 00-1.762 2.85H4.85v1H18v-.884 2.637H2.22z"
                    fill="#FF8000"
                />
                <path
                    d="M13.63 11.692h4.368c-.049-1.322-.88-1.86-1.87-2.241a2.343 2.343 0 00-2.499 2.241z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-kids-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.233 6.555s-2.63 1.753-6.137 0c-.157.314-.293.618-.41.912-.877 2.196-.717 3.856-.57 5.373.052.548.103 1.076.103 1.605H18v-2.63V11.692h-.002c-.06-1.651-1.345-2.08-2.628-2.507-1.315-.438-3.136-1.13-6.137-2.63zm7.764 5.137c-.026-.484-.203-.717-.433-.896-.332-.258-.811-.43-1.51-.662l-.198-.067c-.69.268-1.175.895-1.224 1.625h3.365zm-4.367 0a2.846 2.846 0 011.023-2.059c-.259-.099-.534-.207-.827-.327l-.547.82-.832-.554.442-.662c-.216-.095-.441-.194-.675-.3l-.688 1.032-.832-.554.602-.904c-.332-.156-.68-.324-1.046-.504l-.07.032a6.95 6.95 0 01-1.504.48c-1.072.215-2.482.243-4.073-.332-.767 1.917-.636 3.29-.497 4.745.026.275.053.554.074.84H17v-.753H4.85v-1h7.78z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-man-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M9.584 7.904l1.112-1.668c-.787-.243-1.378-.474-1.585-.68H2.89C2 5.556 2 14.444 2 14.444h5.333v-.889H18V11.89H4.667v-1H18V8.667c0-.473-2.26-1.071-4.51-1.661L12.194 8.95l-.832-.555 1.106-1.658c-.262-.07-.518-.14-.766-.208l-1.286 1.93-.832-.555z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-man-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.333 14.444H2s0-.387.008-1c.03-2.323.178-7.888.88-7.888h6.223c.41.41 2.337.915 4.293 1.427C15.683 7.581 18 8.188 18 8.667v4.889H7.333v.888zM17 11.89v.667H6.333v.888H3.008l.006-.372c.014-.827.041-1.926.096-3.022.055-1.104.137-2.174.254-2.957.032-.216.065-.395.097-.537h5.331c.197.117.406.208.58.278.222.09.475.18.746.268l-.534.802.832.555.703-1.055c.246.07.502.14.763.211l-.52.78.832.555.71-1.064.25.066.48.126c1.062.28 2.053.548 2.775.797.251.087.447.164.591.23v1.784H4.667v1H17z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-woman-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M2 2h8.444C10.296 5.378 11.6 12.027 18 13.733v1.2h-8V16h8v2H9.111l-3.555-6.4H5.11V18H2V8.4h3.556V5.2H2V2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "footwear-woman-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.111 18l-3.555-6.4H5.11V18H2V8.4h3.556V5.2H2V2h8.444c-.013.308-.014.644-.001 1 .134 3.55 1.74 9.182 7.557 10.733V18H9.111zM17 16v1H9.7l-3.556-6.4H4.111V17H3V9.4h3.556V4.2H3V3h6.442c.06 1.718.442 3.89 1.424 5.927 1.12 2.324 3.037 4.494 6.134 5.548V15h-7v1h7z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "home-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M4.937 11.258a7.017 7.017 0 00-.389 2.331c0 1.824.666 3.435 1.684 4.411h7.73c1.018-.976 1.683-2.587 1.683-4.41 0-.836-.14-1.626-.388-2.332H4.937zM17.452 10.258L14.87 2h-9.29L3 10.258h14.452z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "home-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.58 2h9.291l2.58 8.258h-2.653c.53.917.847 2.074.847 3.332 0 1.823-.665 3.434-1.684 4.41H6.232c-1.018-.976-1.684-2.587-1.684-4.41 0-1.258.317-2.415.848-3.332H3L5.58 2zM4.36 9.258L6.316 3h7.82l1.955 6.258H4.361zm2.24 1a3.834 3.834 0 00-.085.112c-.579.787-.967 1.922-.967 3.22 0 1.417.461 2.627 1.117 3.41h6.864c.655-.783 1.116-1.993 1.116-3.41 0-1.298-.388-2.433-.966-3.22a3.732 3.732 0 00-.086-.112H6.6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "perfumery-kids-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M11.5 3.5a1.5 1.5 0 01-1 1.415V6H14v12H6v-8h5V9H6V6h3.5V4.915a1.5 1.5 0 112-1.415z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "perfumery-kids-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5 3.5a1.5 1.5 0 01-1 1.415V6H14v12H6V6h3.5V4.915a1.5 1.5 0 112-1.415zm-1 0a.5.5 0 11-1 0 .5.5 0 011 0zM7 9V7h6v10H7v-7h4V9H7z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "perfumery-man-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M10.5 5v1H18v12H2v-3h12v-1H2V6h7.5V5H7V2h6v3h-2.5z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "perfumery-man-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5V2h6v3h-2.5v1H18v12H2V6h7.5V5H7zm1-2h4v1H8V3zM3 7h14v10H3v-2h11v-1H3V7z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "perfumery-woman-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M10.5 4.915a1.5 1.5 0 10-1 0V6H6v2h5v1H5.03C3.797 10.01 3 11.631 3 13.461c0 1.876.84 3.534 2.124 4.538h9.752C16.16 16.996 17 15.338 17 13.462c0-2.275-1.234-4.23-3-5.086V6h-3.5V4.915z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "perfumery-woman-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 4.915a1.5 1.5 0 10-1 0V6H6.19v2.372C4.323 9.169 3 11.165 3 13.5c0 1.86.84 3.505 2.124 4.5h9.752C16.16 17.005 17 15.36 17 13.5c0-2.329-1.316-4.32-3.174-5.122V6H10.5V4.915zM10 4a.5.5 0 100-1 .5.5 0 000 1zM7.19 9.032l-.607.26C5.11 9.92 4 11.534 4 13.5c0 1.431.592 2.685 1.488 3.5h9.024c.896-.815 1.488-2.069 1.488-3.5 0-1.96-1.105-3.571-2.57-4.204l-.604-.26V7H7.19v1H11v1H7.19v.032z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "product-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.854 2.147l-.255-.255L2 4.19V9.25l2 1.5V7h1v11h10V7h1v3.75l2-1.5V4.191l-4.599-2.3-.254.255-.001.001-.01.009a4.368 4.368 0 01-.22.192 5.75 5.75 0 01-.673.473c-.58.349-1.366.679-2.243.679-.877 0-1.662-.33-2.243-.679a5.742 5.742 0 01-.852-.626 2.455 2.455 0 01-.042-.04l-.009-.008z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "product-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.853 2.146l.001.001.01.009.041.04c.04.035.099.087.177.151.157.129.387.302.675.474.58.349 1.366.679 2.243.679.877 0 1.662-.33 2.243-.679a5.75 5.75 0 00.851-.626c.02-.018.034-.03.043-.04l.009-.008.255-.255L18 4.19V9.25l-2 1.5V18H4v-7.25l-2-1.5V4.191l4.599-2.3.254.255zM4 9.5V7h1v10h10V7h1v2.5l1-.75V4.809l-3.421-1.71a6.74 6.74 0 01-.822.58c-.67.401-1.634.821-2.757.821-1.123 0-2.088-.42-2.757-.821a6.742 6.742 0 01-.822-.58L3 4.808V8.75l1 .75z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "underwear-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.246 2.43l-.903 6.44L10 15.58 5.657 8.87l-.904-6.44-.99.14.88 6.266c-1.41 1.19-3.55 4.135-2.234 7.832l.119.332h14.944l.118-.332c1.316-3.697-.824-6.642-2.232-7.832l.879-6.267-.99-.139z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "underwear-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.763 2.57l.88 6.266c-1.41 1.19-3.55 4.135-2.234 7.832l.119.332h14.944l.118-.332c1.316-3.697-.824-6.642-2.232-7.832l.879-6.266-.99-.14-.904 6.44L10 15.58 5.657 8.87l-.904-6.44-.99.14zM3.243 16c-.83-2.814.657-5.11 1.823-6.203L9.08 16H3.243zm13.514 0c.83-2.814-.657-5.11-1.823-6.203L10.92 16h5.838z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
};
export default SewingIcon;
