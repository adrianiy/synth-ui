import { FunctionalComponent, h } from "@stencil/core";

interface SewingIconProps {
    icon?: string;
    class?: string;
}

const SewingIcon: FunctionalComponent<SewingIconProps> = ({ icon, ...props }: SewingIconProps) => {
    if (props.icon === "add-circle-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm7.5-4h1v3.5H14v1h-3.5V14h-1v-3.5H6v-1h3.5V6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "add-circle-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M9.5 14v-3.5H6v-1h3.5V6h1v3.5H14v1h-3.5V14h-1z" fill="#FF8000" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 110-14 7 7 0 010 14z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "add-square-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2h16v16H2V2zm7.5 7.5V6h1v3.5H14v1h-3.5V14h-1v-3.5H6v-1h3.5z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "add-square-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M9.5 14v-3.5H6v-1h3.5V6h1v3.5H14v1h-3.5V14h-1z" fill="#FF8000" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2 18V2h16v16H2zM3 3h14v14H3V3z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "add") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M9.5 10.5V18h1v-7.5H18v-1h-7.5V2h-1v7.5H2v1h7.5z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "align-center") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M18 2H2v1h16V2zM18 9.5H2v1h16v-1zM2 17h16v1H2v-1zM14 13.25H6v1h8v-1zM6 5.75h8v1H6v-1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "align-left") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 2H2v1h16V2zM18 9.5H2v1h16v-1zM18 17H2v1h16v-1zM10 13.25H2v1h8v-1zM10 5.75H2v1h8v-1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "align-right") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M2 2h16v1H2V2zM2 10.5v-1h16v1H2zM2 17v1h16v-1H2zM10 13.25h8v1h-8v-1zM18 5.75h-8v1h8v-1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "boolean-exclude") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.823 12.823H7.177V7.177h5.646v5.646zm0 0H18V2H7.177v5.177H2V18h10.823v-5.177z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "boolean-intersect") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 13h-5v5H2V7h5V2h11v11zm-5-6v5h4V3H8v4h5zM3 8h4v5h5v4H3V8z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "boolean-subtract") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 2H7v5H2v11h11v-5h5V2zm-1 10H8V3h9v9z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "boolean-union") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M12.823 13H18V2H7v5.176H2V18h10.823v-5z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "check-circle-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.721 13.674l6.624-6.312-.69-.724-5.969 5.688-3.36-2.882-.652.76 4.047 3.47z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "check-circle-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 10a7 7 0 1014 0 7 7 0 00-14 0zm7-8a8 8 0 100 16 8 8 0 000-16z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.345 7.362L8.72 13.674l-4.047-3.47.652-.76 3.36 2.882 5.97-5.688.689.724z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "check-square-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 2H2v16h16V2zM8.721 13.674l6.624-6.312-.69-.724-5.969 5.688-3.36-2.882-.652.76 4.047 3.47z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "check-square-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M17 3H3v14h14V3zM2 2v16h16V2H2z" fill="#FF8000" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.345 7.362L8.72 13.674l-4.047-3.47.652-.76 3.36 2.882 5.97-5.688.689.724z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "check") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.352 5.355L7.944 15.687l-6.277-5.608.666-.746 5.575 4.98 9.74-9.668.704.71z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clear-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M12.222 2L18 7.688l-5.848 5.756-5.733-5.732L12.222 2zM5.707 8.414l5.732 5.732L9.556 16H6l-4-3.938 3.707-3.648zM3 18h13v-1H3v1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "clear-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 16h3.556L18 7.687 12.222 2 2 12.063 6 16zm5.422-3.24l5.152-5.072-4.352-4.285L7.07 8.476l4.353 4.284zm-7.997-.697l2.932-2.886 4.352 4.284L9.146 15H6.41l-2.985-2.938z"
                    fill="#FF8000"
                />
                <path d="M3 18h13v-1H3v1z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "close-circle-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm7.293 0L5.646 6.354l.708-.708L10 9.293l3.646-3.647.708.708L10.707 10l3.647 3.646-.708.708L10 10.707l-3.646 3.647-.708-.708L9.293 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "close-circle-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 10a7 7 0 1014 0 7 7 0 00-14 0zm7-8a8 8 0 100 16 8 8 0 000-16z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.646 14.354l-8-8 .708-.708 8 8-.708.708z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.354 6.354l-8 8-.708-.708 8-8 .708.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "close-large") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M10 10.707l7.646 7.647.708-.707L10.707 10l7.647-7.646-.707-.708L10 9.293 2.354 1.646l-.708.708L9.293 10l-7.647 7.646.708.708L10 10.707z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "close-small") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.293 10L6.146 6.854l.708-.708L10 9.293l3.146-3.147.354.354.354.354L10.707 10l3.147 3.146-.707.707L10 10.707l-3.146 3.146-.708-.707L9.293 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "close-square-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2h16v16H2V2zm7.293 8L5.646 6.354l.708-.708L10 9.293l3.646-3.647.708.708L10.707 10l3.647 3.646-.708.708L10 10.707l-3.646 3.647-.708-.708L9.293 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "close-square-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M17 3H3v14h14V3zM2 2v16h16V2H2z" fill="#FF8000" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.646 14.354l-8-8 .708-.708 8 8-.708.708z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.354 6.354l-8 8-.708-.708 8-8 .708.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "cloud-download-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.692 14.538h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156 3.692 3.692 0 100 7.384zm5.955-4.819L10.5 10.866V7.093h-1v3.773L8.353 9.72l-.707.708L10 12.78l2.354-2.353-.707-.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "cloud-download-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M10 12.979l2.554-2.554-.707-.707-1.36 1.359V7h-1v4.052L8.083 9.646l-.707.707L10 12.98z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.692 7.154a3.692 3.692 0 100 7.384h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156zm8.062 6.384a3.308 3.308 0 10-.677-6.558l-.86.162-.275-.832a2.694 2.694 0 00-5.25.844v1h-1a2.692 2.692 0 100 5.384H13.754z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "cloud-upload-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.692 14.538h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156 3.692 3.692 0 100 7.384zm2.661-4.384L9.5 9.007v3.773h1V9.007l1.147 1.147.707-.707L10 7.093 7.646 9.447l.707.707z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "cloud-upload-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M9.928 7.021L7.375 9.575l.707.707L9.44 8.923V13h1V8.948l1.406 1.406.707-.707L9.928 7.02z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.692 7.154a3.692 3.692 0 100 7.384h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156zm8.062 6.384a3.308 3.308 0 10-.677-6.558l-.86.162-.275-.832a2.694 2.694 0 00-5.25.844v1h-1a2.692 2.692 0 100 5.384H13.754z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "collapse-all-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M10 3.125A2.375 2.375 0 117.678 6H5v8h2.678a2.376 2.376 0 014.644 0H15V9.207l-1.146 1.146-.708-.707L15.5 7.293l2.354 2.353-.708.707L16 9.207V15h-3.678a2.376 2.376 0 01-4.644 0H4V5h3.678A2.376 2.376 0 0110 3.125z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "collapse-all-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 3.125A2.375 2.375 0 117.678 6H5v8h2.678a2.376 2.376 0 014.644 0H15V9.207l-1.146 1.146-.708-.707L15.5 7.293l2.354 2.353-.708.707L16 9.207V15h-3.678a2.376 2.376 0 01-4.644 0H4V5h3.678A2.376 2.376 0 0110 3.125zM11.375 5.5a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0zm0 9a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "collapse-one-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M12.004 6.207l-1.146 1.147-.707-.708 2.353-2.353 2.354 2.353-.707.708-1.147-1.147V15h-4v-1h3V6.207zM9.38 9.875a2.375 2.375 0 10-4.75 0 2.375 2.375 0 004.75 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "collapse-one-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M12.004 6.207l-1.146 1.147-.707-.708 2.353-2.353 2.354 2.353-.707.708-1.147-1.147V15h-4v-1h3V6.207z"
                    fill="#FF8000"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.004 7.5a2.375 2.375 0 110 4.75 2.375 2.375 0 010-4.75zM8.38 9.875a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "collapse") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M11.98 2.013L10 3.993l-1.98-1.98-.707.708L10 5.407l2.687-2.686-.707-.708zM8.02 18L10 16.02 11.98 18l.707-.707L10 14.606l-2.687 2.687.707.707z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "copy") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 7v10h10V7H7zm-1 6H3V3h10v3H6v7zm0 1v4h12V6h-4V2H2v12h4z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "delete-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M6 1h8v2h3v1H3V3h3V1zM16 5H4l1.2 13h9.6L16 5z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "delete-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 3V1H6v2H3v1h14V3h-3zm-1-1H7v1h6V2zM4 5l1.2 13h9.6L16 5H4zm1.097 1l1.015 11h7.776l1.015-11H5.097z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "edit-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M18 4.766L15.235 2 3.774 13.46l2.766 2.765 8.999-9-2.766-2.765.707-.707 2.766 2.766L18 4.766zM5.834 16.932l-2.766-2.766-.038.04-1.017 3.781 3.782-1.016.039-.04z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "edit-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.234 2L18 4.766 6.517 16.25l.004.004-.707.707-.004-.004-.017.018L2.01 17.99l1.017-3.784L15.234 2zm-1.046 2.46l1.351 1.353 1.047-1.047-1.352-1.352-1.046 1.047zM5.81 15.543l8.969-8.969-1.352-1.351-8.969 8.968 1.352 1.352zm-1.96-.546l1.154 1.154-1.578.424.424-1.578z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "excel-download") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M5 15h7v1H4V2h6.417L15 5.938V12h-1V6.397L10.046 3H5v12z" fill="#FF8000" />
                <path
                    d="M8.76 7H7.092l1.342 2.455L7 12h1.667l.833-1.473.787 1.473H12l-1.435-2.545L11.907 7h-1.666L9.5 8.384 8.76 7zM14.037 16.169l-.862-.862-.708.707 2.033 2.032 2.033-2.032-.708-.707-.789.79-.036-3.12-1 .01.037 3.182z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "excel-upload") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M12 15H5V3h5.046L14 6.397V12h1V5.937L10.417 2H4v14h8v-1z" fill="#FF8000" />
                <path
                    d="M7.093 7h1.666L9.5 8.384 10.24 7h1.667l-1.342 2.455L12 12h-1.713L9.5 10.527 8.667 12H7l1.435-2.545L7.093 7zM13.175 15.754l.825-.826V18h1v-3.072l.825.826.708-.707-2.033-2.033-2.033 2.033.708.707z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-all-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M4.375 3c1.184 0 2.166.867 2.346 2h6.558a2.376 2.376 0 11.054 1H10.5v8h2.78a2.376 2.376 0 11.053 1H9.5V6H6.667a2.376 2.376 0 11-2.292-3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-all-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.375 3c1.184 0 2.166.867 2.346 2h6.558a2.376 2.376 0 11.054 1H10.5v8h2.78a2.376 2.376 0 11.053 1H9.5V6H6.667a2.376 2.376 0 11-2.292-3zM5.75 5.375a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0zm11.25 0a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0zM15.625 13a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-horizontal") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M16.088 9.518l-1.48-1.48.707-.706 2.687 2.686-2.687 2.687-.707-.707 1.48-1.48H3.911l1.48 1.48-.707.707-2.687-2.687 2.687-2.686.707.707-1.48 1.48h12.176z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-one-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.75 5.375a2.375 2.375 0 00-4.73-.313H4v1h3.125V15h3.958a2.376 2.376 0 10-.054-1H8.125V6.062h2.976a2.376 2.376 0 004.649-.687z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-one-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.75 5.375a2.375 2.375 0 00-4.73-.313H4v1h3.125V15h3.958a2.376 2.376 0 10-.054-1H8.125V6.062h2.976a2.376 2.376 0 004.649-.687zM13.375 4a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75zm0 9a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand-vertical") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M9.5 3.93L8.02 5.41l-.707-.707L10 2.017l2.687 2.686-.707.708-1.48-1.48v12.175l1.48-1.48.707.708L10 18.02l-2.687-2.686.708-.708 1.48 1.48V3.931z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "expand") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M8.02 5.394L10 3.414l1.98 1.98.707-.707L10 2 7.313 4.687l.707.707zM11.98 14.646L10 16.626l-1.98-1.98-.707.707L10 18.04l2.687-2.686-.707-.708z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "filter-alt") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5h16v1H2V5zm3 5h10v1H5v-1zm7 5H8v1h4v-1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "filter-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2h16v1.768l-6.857 6.485v5.895L9.347 18h-.49v-7.747L2 3.768V2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "filter-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.438 2h-.5v2.423l.15.148 6.281 6.135v7.296h1.646l1.363-1.453.135-.144v-5.698l6.281-6.136.15-.147V2H2.439zm.5 2.003V3h14.007v1.003l-6.281 6.135-.15.147v5.724l-1.145 1.22v-6.943l-.15-.148-6.281-6.135z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "forward") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.993 8.5l-2.146-2.146.707-.708L17.907 9l-3.353 3.354-.707-.707L15.992 9.5H6.2c-1.61 0-3 1.646-3 4h-1c0-2.646 1.61-5 4-5h9.793z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "full-screen-enter") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 2.005h-4.38v1H17v3.38h1v-4.38zM2 2.005h4.38v1H3v3.38H2v-4.38zM18 17.996v-4.38h-1v3.38h-3.38v1H18zM2 17.996v-4.38h1v3.38h3.38v1H2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "full-screen-exit") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.56 6.38h4.38v-1h-3.38V2h-1v4.38zM6.38 6.38H2v-1h3.38V2h1v4.38zM13.56 13.62V18h1v-3.38h3.38v-1h-4.38zM6.38 13.62V18h-1v-3.38H2v-1h4.38z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "import") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M13.157 8.98l-2.56 2.654V2H9.403v9.634L6.844 8.98 6 9.854 10 14l4-4.146-.843-.874z"
                    fill="#FF8000"
                />
                <path d="M3 13.3v4.01h14V13.3h1v5.01H2V13.3h1z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "lock-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 8V5a3 3 0 016 0v3h5v10H2V8h5zm5-3v3H8V5a2 2 0 114 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "lock-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 8V5a3 3 0 016 0v3h5v10H2V8h5zm5-3v3H8V5a2 2 0 114 0zM3 9v8h14V9H3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "log-out") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M8.49 3h9.01v14H8.49v1H18.5V2H8.49v1z" fill="#FF8000" />
                <path
                    d="M7.02 6.843l-2.654 2.56H14v1.193H4.366l2.654 2.56-.874.844L2 10l4.146-4 .874.843z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "move") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.09 9.502l-1.48-1.48.707-.707 2.687 2.687-2.687 2.687-.707-.707 1.48-1.48h-5.588v5.588l1.48-1.48.707.707-2.687 2.687-2.687-2.687.707-.707 1.48 1.48v-5.588H3.914l1.48 1.48-.707.707L2 10.002l2.687-2.687.707.707-1.48 1.48h5.588V3.914l-1.48 1.48-.707-.707L10.002 2l2.687 2.687-.707.707-1.48-1.48v5.588h5.588z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "refresh") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M3 10a7 7 0 0112.718-4.04h-1.801v1h3.014V3.948h-1v.684A8 8 0 002 10h.999zM17 10a7 7 0 01-12.74 4.008h1.793v-1H3.039v.682l-.108.058.108.198v2.076h1v-.686A8 8 0 0018 10h-.999z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "reset") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M17 10A7 7 0 005.032 5.068h1.526v1H3.406V2.917h1V4.28A7.965 7.965 0 0110 2a8 8 0 11-7.935 6.972l.992.127A7 7 0 1017 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "restart") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M3 10a7 7 0 0111.968-4.932h-1.526v1h3.152V2.917h-1V4.28A7.965 7.965 0 0010 2a8 8 0 107.935 6.972l-.992.127A7 7 0 113 10z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "save") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 9v6h10V9H5zm9 1H6v4h8v-4z" fill="#FF8000" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 2v16H2V2h16zm-4 1h3v14H3V3h3v4h8V3zm-1 0H7v3h6V3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "search") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.43 14.602a7.059 7.059 0 11.744-.678l3.655 3.2-.658.752-3.742-3.274zm1.688-5.543A6.059 6.059 0 113 9.059a6.059 6.059 0 0112.118 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "send-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M12.743 18l5.114-16L3 9.619l6.136 1.956 3.416-3.904.753.658-3.44 3.93L12.744 18z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "send-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.596 11.722L3 9.619 17.857 2l-5.114 16-3.147-6.278zm.301-.954L5.613 9.403l10.559-5.415-3.634 11.37-1.94-3.87 2.71-3.163-.759-.65-2.652 3.093z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "share-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.5 7a2.5 2.5 0 10-2.492-2.304L6.586 8.121a2.5 2.5 0 10-.638 3.418l7.06 3.765a2.5 2.5 0 10.286-.98l-6.646-3.545a2.489 2.489 0 00.312-1.725l6.334-3.377A2.5 2.5 0 0015.5 7z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "share-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 4.5a2.5 2.5 0 01-4.706 1.177L6.96 9.054a2.515 2.515 0 01-.312 1.725l6.646 3.544a2.5 2.5 0 11-.286.981l-7.06-3.765a2.5 2.5 0 11.638-3.418l6.422-3.425A2.5 2.5 0 1118 4.5zM15.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-11 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "sort-ascending") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.5 3.957l1.646 1.647.707-.708L15 2.043l-2.854 2.853.707.708L14.5 3.957V18h1V3.957zM9 5H2V4h7v1zM2 10h9V9H2v1zM2 15h11v-1H2v1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "sort-descending") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M15.5 16.043l1.646-1.647.707.708L15 17.957l-2.854-2.853.707-.708 1.647 1.647V2h1v14.043zM2 4h11v1H2V4zM2 9h9v1H2V9zM9 14H2v1h7v-1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "sort") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 15.793V2h1v13.793l2.146-2.147.708.708L13 17.707l-3.354-3.353.708-.708 2.146 2.147zM7 2.293l3.354 3.353-.708.708L7.5 4.207V18h-1V4.207L4.354 6.354l-.708-.708L7 2.293z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "subtract-circle-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm-4 8.5h8v-1H6v1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (props.icon === "subtract-circle-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 10a7 7 0 1014 0 7 7 0 00-14 0zm7-8a8 8 0 100 16 8 8 0 000-16z"
                    fill="#FF8000"
                />
                <path fillRule="evenodd" clipRule="evenodd" d="M14 10.5H6v-1h8v1z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "subtract-square-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 2H2v16h16V2zM6 10.5h8v-1H6v1z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "subtract-square-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M14 10.5H6v-1h8v1z" fill="#FF8000" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 3H3v14h14V3zM2 2v16h16V2H2z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "subtract") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 10.5H2v-1h16v1z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "unlock-filled") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M12 5v1h1V5a3 3 0 10-6 0v3H2v10h16V8H8V5a2 2 0 114 0z" fill="#FF8000" />
            </svg>
        );
    }
    if (props.icon === "unlock-outlined") {
        return (
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6V5a2 2 0 10-4 0v3h10v10H2V8h5V5a3 3 0 016 0v1h-1zM3 9v8h14V9H3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
};
export default SewingIcon;
