import { FunctionalComponent, h } from "@stencil/core";

interface SewingIconProps {
    icon?: string;
    class?: string;
}

const SewingIcon: FunctionalComponent<SewingIconProps> = ({ icon, ...props }: SewingIconProps) => {
    if (props.icon === "help-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.315 7.808h-.77C7.611 6.51 8.5 5.5 10.027 5.5c1.427 0 2.428.943 2.428 2.192 0 .906-.439 1.549-1.25 2.088-.776.514-.995.863-.995 1.542v.46h-.787v-.576c-.006-.814.337-1.328 1.172-1.88.746-.502 1.024-.924 1.024-1.597 0-.87-.669-1.5-1.622-1.5-.947 0-1.605.612-1.682 1.58zm2.233 6.006c0 .398-.273.686-.658.686-.39 0-.663-.288-.663-.686 0-.404.273-.692.663-.692.385 0 .658.288.658.692z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "help-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M8.315 7.808h-.77C7.611 6.51 8.5 5.5 10.027 5.5c1.427 0 2.428.943 2.428 2.192 0 .906-.439 1.549-1.25 2.088-.776.514-.995.863-.995 1.542v.46h-.787v-.576c-.006-.814.337-1.328 1.172-1.88.746-.502 1.024-.924 1.024-1.597 0-.87-.669-1.5-1.622-1.5-.947 0-1.605.612-1.682 1.58zM10.548 13.814c0 .398-.273.686-.658.686-.39 0-.663-.288-.663-.686 0-.404.273-.692.663-.692.385 0 .658.288.658.692z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "information-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7.356-1.924v6.287H9.356V8.076h1.288zm.174-1.9a.815.815 0 01-.818.809.815.815 0 01-.818-.808c0-.45.367-.814.818-.814.451 0 .818.363.818.814z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "information-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
                    fill="#FF8000"
                />
                <path
                    d="M9.356 14h1.288V7.713H9.356V14zM10 6.622a.815.815 0 00.818-.808A.816.816 0 0010 5a.816.816 0 00-.818.814c0 .444.367.808.818.808z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "warning-alt-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 18L10 2 2 18h16zM10.644 7H9.356v5.992h1.288V7zM10 14.01a.815.815 0 00-.818.809c0 .45.367.814.818.814a.816.816 0 00.818-.814.815.815 0 00-.818-.809z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "warning-alt-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M9.182 14.819c0-.445.367-.809.818-.809.451 0 .818.364.818.809 0 .45-.367.814-.818.814a.816.816 0 01-.818-.814zM9.356 7h1.288v5.992H9.356V7z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 18l8-16 8 16H2zm1.618-1L10 4.236 16.382 17H3.618z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "warning-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.356 5.363h1.288v6.286H9.356V5.363zm-.174 8.186c0-.445.367-.809.818-.809.451 0 .818.364.818.809 0 .45-.367.814-.818.814a.816.816 0 01-.818-.814z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "warning-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M9.356 5h1.288v6.287H9.356V5zM9.182 13.186c0-.444.367-.808.818-.808.451 0 .818.364.818.808 0 .45-.367.814-.818.814a.816.816 0 01-.818-.814z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
};
export default SewingIcon;
