import { FunctionalComponent, h } from '@stencil/core';

interface SewingIconProps {
    icon?: string;
    class?: string;
    onClick?: (event: MouseEvent) => any;
    button?: boolean;
}

const SewingIcon: FunctionalComponent<SewingIconProps> = ({ icon, button, ...props }: SewingIconProps) => {
    if (icon === 'arrow-circle-left-filled') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-10.793.5l2.147 2.146-.708.708L5.293 10l3.353-3.354.708.708L7.207 9.5H15v1H7.207z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-circle-left-outlined') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M9.354 12.646L7.207 10.5H15v-1H7.207l2.147-2.146-.708-.708L5.293 10l3.353 3.354.708-.708z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-circle-right-filled') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.207-.5l-2.146-2.146.707-.708L14.707 10l-3.353 3.354-.707-.708 2.146-2.146H5v-1h7.793z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-circle-right-outlined') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M10.646 7.354L12.793 9.5H5v1h7.793l-2.146 2.146.707.708L14.707 10l-3.353-3.354-.707.708z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-circle-up-filled') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.354 9.354L9.5 7.207V15h1V7.207l2.146 2.147.708-.708L10 5.293 6.646 8.646l.708.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-circle-up-outlined') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M7.354 9.354L9.5 7.207V15h1V7.207l2.146 2.147.708-.708L10 5.293 6.646 8.646l.708.708z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-down') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M10.5 12.793l2.146-2.146.708.707L10 14.707l-3.354-3.353.708-.707L9.5 12.793V5h1v7.793z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-left') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M7.207 10.5l2.147 2.146-.707.708L5.293 10l3.354-3.354.707.708L7.207 9.5H15v1H7.207z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-right') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M12.793 9.5l-2.147-2.146.707-.708L14.707 10l-3.354 3.354-.707-.708 2.147-2.146H5v-1h7.793z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrow-up') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M9.5 7.207L7.354 9.354l-.708-.708L10 5.293l3.354 3.353-.707.708L10.5 7.207V15h-1V7.207z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrown-circle-down-filled') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7.5 2.793l2.146-2.147.707.708L10 14.707l-3.354-3.353.708-.708L9.5 12.793V5h1v7.793z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'arrown-circle-down-outlined') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M12.646 10.646L10.5 12.793V5h-1v7.793l-2.146-2.147-.708.708L10 14.707l3.354-3.353-.708-.708z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'chevron-down') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 11.293l3.146-3.147.707.708L10 12.707 6.146 8.854l.708-.708L10 11.293z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'chevron-left') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.707 10l3.146 3.146-.707.708L7.293 10l3.853-3.854.707.708L8.707 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'chevron-right') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.293 10L8.146 6.854l.708-.708L12.707 10l-3.853 3.854-.708-.708L11.293 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'chevron-up') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 9.207l-3.146 3.147-.708-.707L10 7.792l3.854 3.853-.707.708L10 9.207z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'double-chevron-left') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.354 13.146L7.207 10l3.147-3.146-.708-.708-3.5 3.5-.353.354.353.354 3.5 3.5.707-.708zm3.5 0L10.707 10l3.146-3.146-.707-.708-3.5 3.5-.353.354.353.354 3.5 3.5.707-.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'double-chevron-right') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 6.854L9.146 10 6 13.146l.707.707 3.5-3.5.354-.353-.354-.354-3.5-3.5L6 6.854zm3.5 0L12.646 10 9.5 13.146l.707.707 3.5-3.5.354-.353-.354-.354-3.5-3.5-.707.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'long-arrow-down') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M10.5 16.442l1.48-1.48.707.707L10 18.356 7.313 15.67l.707-.707 1.48 1.48V2.35h1v14.091z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'long-arrow-left') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M3.909 10.5l1.48 1.48-.707.707L1.995 10l2.687-2.687.707.707-1.48 1.48H18v1H3.909z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'long-arrow-up') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M9.5 3.909l-1.48 1.48-.707-.707L10 1.995l2.687 2.687-.707.707-1.48-1.48V18h-1V3.909z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'long-arrown-right') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                role={button && 'button'}
            >
                <path
                    d="M16.091 9.5l-1.48-1.48.707-.707L18.005 10l-2.687 2.687-.707-.707 1.48-1.48H2v-1h14.091z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
};
export default SewingIcon;

