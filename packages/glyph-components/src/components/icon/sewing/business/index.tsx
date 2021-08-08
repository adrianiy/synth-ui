import { FunctionalComponent, h } from '@stencil/core';

interface SewingIconProps {
    icon?: string;
    class?: string;
    onClick?: (event: MouseEvent) => any;
    button?: boolean;
}

const SewingIcon: FunctionalComponent<SewingIconProps> = ({ icon, button, ...props }: SewingIconProps) => {
    if (icon === 'alternative-articles') {
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
                    d="M13.646 9.646L15.793 7.5H2v-1h13.793l-2.147-2.146.708-.708 3 3 .353.354-.353.354-3 3-.708-.708zM4.207 12.5l2.147-2.146-.708-.708-3 3-.353.354.353.354 3 3 .708-.707L4.207 13.5H18v-1H4.207z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'app-filled') {
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
                    d="M5 2h10v16H5V2zm5 14a1 1 0 100-2 1 1 0 000 2zM8.5 5a.5.5 0 010-1h3a.5.5 0 010 1h-3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'app-outlined') {
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
                <path d="M11 15a1 1 0 11-2 0 1 1 0 012 0z" fill="#FF8000" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 18V2h10v16H5zM6 3h8v14H6V3z" fill="#FF8000" />
                <path d="M8 4.5a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'cono-norte') {
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
                    d="M9.438 15.845c-1.331 0-2.58-.35-3.66-.961l.5-.867a6.437 6.437 0 006.438-11.151l.5-.866A7.44 7.44 0 0110.5 15.77v1.2h3v1h-7v-1h3v-1.125h-.062z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 8.47a5.494 5.494 0 00-5.5-5.5 5.5 5.5 0 105.5 5.5zm-5.5 4.5a4.5 4.5 0 004.05-6.463l-7.775 4.489A4.495 4.495 0 009.5 12.97z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'cono-sur') {
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
                    d="M9.438 15.845c-1.331 0-2.58-.35-3.66-.961l.5-.867a6.437 6.437 0 006.438-11.151l.5-.866A7.44 7.44 0 0110.5 15.77v1.2h3v1h-7v-1h3v-1.125h-.062z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 8.47a5.5 5.5 0 1010.98-.467A5.5 5.5 0 004 8.47zm5.5-4.5a4.5 4.5 0 014.05 2.537l-7.775 4.489A4.5 4.5 0 019.5 3.97z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'delivery-filled') {
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
                    d="M2 3h11v3h3l2 4.5V15h-1.5a2.5 2.5 0 00-5 0h-3a2.5 2.5 0 00-5 0H2V3zm14.683 7L15.35 7H13v3h3.683z"
                    fill="#FF8000"
                />
                <path
                    d="M15.5 15a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM6 13.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'delivery-outlined') {
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
                    d="M8 15a2 2 0 11-4 0H2V3h11v3h3l2 4.5V15h-2a2 2 0 11-4 0H8zM3 4h9v10H7.732a2 2 0 00-3.464 0H3V4zm3 10a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zm-1-.732V11h4v3h-1.268A2 2 0 0013 13.268zM13 10V7h2.35l1.333 3H13z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'distribution-center-filled') {
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
                <path d="M5.5 3H2V2h4.5v5.5h10v2.3h-6.1v1h5v4.7H18v1H8.45a2.5 2.5 0 00-2.95-2.95V3z" fill="#FF8000" />
                <path d="M6.5 14.585A1.504 1.504 0 017.5 16a1.5 1.5 0 11-1-1.415z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'distribution-center-outlined') {
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
                    d="M5.5 3H2V2h4.5v5h10v3.5h-1v5H18v1H7.937A2 2 0 115.5 14.063V3zm9 12.5v-5h-6v-1h7V8h-9v6.063c.703.18 1.256.734 1.437 1.437H14.5zM6 17a1 1 0 100-2 1 1 0 000 2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'double-reference-filled') {
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
                    d="M8.071 13.78H5.277V9.278l1.329 3.471 1.465-.718v1.749zM4.993 8.535l-1.41.69-1.27-3.314 4.235-2.484s.847 1.242 2.117 1.242 1.694-1.242 1.694-1.242l4.66 2.484-.16.417-1.49-.796-.188.555v.002l-.01.024c-.01.023-.026.06-.049.105a1.734 1.734 0 01-.22.331 1.19 1.19 0 01-.943.446c-.47 0-.888-.231-1.213-.505a3.168 3.168 0 01-.488-.516l-.004-.006-.262-.385-5.004 2.94.005.012z"
                    fill="#FF8000"
                />
                <path
                    d="M13.664 7.196c.077-.091.143-.182.2-.267l3.824 2.043-.918 2.397-1.922-.942v6.146H9.07v-6.146l-1.923.942-.923-2.413 3.502-2.06c.101.11.227.234.375.359.416.349 1.056.74 1.857.74a2.19 2.19 0 001.705-.799z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'double-reference-outlined') {
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
                    d="M4.965 13.53h3.294v3.293h6.776V10.98l1.694.83L18 8.489l-3.634-1.941.34-.887-4.659-2.484s-.071.209-.243.455c-.247.355-.702.787-1.451.787-1.27 0-2.118-1.242-2.118-1.242L2 5.66l1.27 3.313 1.695-.828v5.384zm8.355-7.475l-2.925-1.56a2.683 2.683 0 01-2.042.924c-.966 0-1.717-.469-2.178-.855a4.534 4.534 0 01-.132-.115L3.237 6.095l.576 1.501 2.152-1.052v1.551L9.529 6s.848 1.245 2.118 1.245c.746 0 1.2-.429 1.447-.783.121-.173.193-.327.226-.407zm-7.355 4.186v2.289h2.294v-1.551l-1.694.83-.6-1.568zm3.294-.866L7.107 10.43l-.576-1.506 2.806-1.65c.042.038.086.077.132.115.46.387 1.212.857 2.178.857.973 0 1.64-.474 2.042-.925l3.062 1.636-.564 1.473-2.152-1.054v6.448H9.26V9.375z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'dr-continuity') {
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
                    d="M6.974 13.938H4.95V8.03l-1.686.839L2 5.516 6.214 3s.842 1.258 2.107 1.258c.741 0 1.193-.433 1.44-.791.173-.252.245-.467.245-.467l4.635 2.516-1.264 3.354-1.686-.839v1.032h-.995V6.411l2.14 1.065.562-1.49-3.046-1.652c-.4.456-1.064.934-2.031.934-.962 0-1.71-.474-2.168-.865a4.525 4.525 0 01-.13-.116L3.23 5.953l.574 1.523 2.14-1.065v6.516h1.03v1.01zm2.818 1.315l1.016 1.032-.703.715-1.866-1.895-.351-.357.351-.357 1.866-1.895.703.714-1.016 1.033h8.126v1.01H9.792zm6.304-3.79l-1.017 1.033.704.714 1.865-1.895.352-.357-.352-.357-1.865-1.895-.704.715 1.017 1.032H7.969v1.01h8.127z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'factory-filled') {
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
                    d="M2.867 4.133L3 2h3.265l.133 2.133H2.867zM2.8 5.2h3.665l.8 12.8H2l.8-12.8zM13.5 17.967h4V10.3l-4 2.133v5.534zM12.5 17.967V10.3l-4.526 2.414.328 5.253H12.5z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'factory-outlined') {
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
                    d="M3 2h4l.617 9.871L13 9v2.667L18 9v9H2L3 2zm.064 15l.72-11.5h2.433L6.936 17H3.064zm.782-12.5h2.308L6.061 3H3.939l-.093 1.5zM7.937 17H12v-6.333l-4.315 2.3L7.937 17zM13 17h4v-6.333L13 12.8V17z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'hanged') {
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
                    d="M10 3.5A1.5 1.5 0 008.5 5h-1a2.5 2.5 0 113 2.45v.782l7.5 5V18H2v-4.745l4.693-3.65.614.79L3 13.745V17h14v-3.232l-7.5-5V6.5h.5a1.5 1.5 0 000-3z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'ipod-filled') {
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
                <path d="M5.5 5v9h9V5h-9z" fill="#FF8000" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 18v-3h9v3h-9zm4.5-1a.5.5 0 100-1 .5.5 0 000 1z"
                    fill="#FF8000"
                />
                <path d="M5.5 4h9V2h-9v2z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'ipod-outlined') {
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
                <path d="M10 16.5a.5.5 0 100-1 .5.5 0 000 1z" fill="#FF8000" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 2h10v16H5V2zm1 1h8v1H6V3zm8 2v9H6V5h8zM6 17v-2h8v2H6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'online-filled') {
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
                <path d="M2 3h16v11h-7.5v2H14v1H6v-1h3.5v-2H2V3z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'online-outlined') {
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
                    d="M9.5 14v2H6v1h8v-1h-3.5v-2H18V3H2v11h7.5zM17 4H3v9h14V4z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'packed-filled') {
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
                    d="M17.463 5.914l-3.191-1.702-7.55 3.973 3.277 1.748 7.464-4.02zm-4.258-2.271L10 1.933 2.527 5.92 5.66 7.613l7.544-3.97zM2 6.77V13.8l7.5 4v-7L6.015 8.941l-.003-.001L2 6.77zM10.5 17.8l7.5-4V6.76L10.5 10.8V17.8z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'packed-outlined') {
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
                    d="M10.235 2.124L10 2l-.235.124-7.5 3.967-.265.14v7.538l.265.14 7.5 3.966L10 18l.235-.125 7.5-3.966.265-.14V6.23l-.265-.14-7.5-3.967zM3 13.174V7.355l6.5 3.438v5.819L3 13.174zm7.5 3.438v-5.819L17 7.355v5.819l-6.5 3.438zM10 9.934l6.438-3.405-2.809-1.486-6.215 3.523L10 9.934zm-3.629-1.92l6.215-3.522L10 3.124 3.562 6.529l2.809 1.485z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'rfid') {
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
                    d="M5.046 5.055A6.976 6.976 0 003 10c0 1.93.781 3.678 2.046 4.945l-.708.707A7.976 7.976 0 012 10c0-2.206.894-4.205 2.338-5.652l.708.707zM17 10c0-1.93-.781-3.678-2.046-4.945l.708-.707A7.977 7.977 0 0118 10a7.976 7.976 0 01-2.338 5.652l-.708-.707A6.976 6.976 0 0017 10z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
                    fill="#FF8000"
                />
                <path
                    d="M6 10c0-1.102.445-2.099 1.166-2.823l-.709-.705A4.986 4.986 0 005 10c0 1.377.557 2.625 1.457 3.528l.709-.705A3.986 3.986 0 016 10zM12.834 7.177A3.986 3.986 0 0114 10a3.986 3.986 0 01-1.166 2.823l.709.705A4.986 4.986 0 0015 10a4.986 4.986 0 00-1.457-3.528l-.709.705z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'route') {
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
                    d="M15 4a1 1 0 112 0 1 1 0 01-2 0zm-1 0a2 2 0 114 0 2 2 0 01-4 0zm-10.437.36C4.323 3.75 5.467 3.5 7 3.5h6v1H7c-1.467 0-2.323.249-2.813.64-.46.368-.687.94-.687 1.86 0 .92.228 1.492.687 1.86.49.391 1.346.64 2.813.64h6c1.533 0 2.677.251 3.437.86.79.632 1.063 1.56 1.063 2.64s-.272 2.008-1.063 2.64c-.76.609-1.904.86-3.437.86H7v-1h6c1.467 0 2.323-.249 2.813-.64.46-.368.687-.94.687-1.86 0-.92-.228-1.492-.687-1.86-.49-.391-1.346-.64-2.813-.64H7c-1.533 0-2.677-.251-3.437-.86C2.773 9.008 2.5 8.08 2.5 7s.272-2.008 1.063-2.64zM4 15a1 1 0 100 2 1 1 0 000-2zm0-1a2 2 0 100 4 2 2 0 000-4z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'sint-filled') {
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
                    d="M18 12.665v-4.76l-5.5 2.664v4.76l5.5-2.664zM6 7.905l5.5 2.664v4.76L6 12.665v-4.76zM15.32 6.037l2.12 1.027L12 9.7 9.88 8.673l5.44-2.636zM14.174 5.482L12 4.429 6.56 7.064l2.173 1.054 5.441-2.636zM4.996 9L2 9.002v-1L4.994 8l.001 1zM4.995 9.998L4.996 11H3v-1l1.995-.002zM4.996 13L2 13.002v-1L4.994 12l.001 1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'sint-outlined') {
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
                    d="M18 12.665v-5.33L12 4.43 6 7.335v5.33l6 2.906 6-2.906zm-3.326-5.83l1.62.785L12 9.7l-1.62-.784 4.294-2.08zm-1.147-.555L12 5.54 7.706 7.62l1.527.74 4.294-2.08zM7 12.038V8.389l4.5 2.18v3.649L7 12.038zm5.5 2.18l4.5-2.18V8.389l-4.5 2.18v3.649z"
                    fill="#FF8000"
                />
                <path
                    d="M4.996 10v1H3v-1l1.995-.002.001.002zM4.996 13L2 13.002v-1L4.994 12l.001 1zM4.996 9L2 9.002v-1L4.994 8l.001 1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'store-filled-1') {
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
                <path d="M3 6l7-4 7 4v12h-3.5V9.5h-7V18H3V6z" fill="#FF8000" />
                <path d="M7.5 10.5V18h5v-7.5h-5z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'store-filled') {
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
                    d="M6.466 5.797V6H4L2 18h16L16 6h-2.424v-.203c0-.976-.267-1.923-.869-2.636-.611-.724-1.526-1.155-2.707-1.155-1.181 0-2.088.431-2.69 1.16-.59.713-.844 1.66-.844 2.63zm6.11.203h1v4h-1V6zm-5.11 0v-.203c0-.81.213-1.509.615-1.995.39-.472 1-.796 1.92-.796.919 0 1.541.325 1.942.8.412.488.633 1.186.633 1.99V6h-5.11zm0 0h-1v4h1V6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'store-outlined-1') {
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
                    d="M3 18V6l7-4 7 4v12H3zm7-14.848l6 3.428V17h-3v-7H7v7H4V6.58l6-3.428zM8 17h4v-6H8v6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'store-outlined') {
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
                    d="M6.466 6v-.235c0-.963.255-1.903.846-2.61C7.914 2.431 8.82 2.005 10 2.005c1.18 0 2.094.426 2.706 1.144.602.707.87 1.647.87 2.615V6h2.39L18 18H2L4.033 6h2.433zm1-.235c0-.8.213-1.49.614-1.97.39-.467 1-.789 1.92-.789.921 0 1.544.323 1.945.793.41.482.63 1.171.63 1.966V6H7.467v-.235zM6.466 7v4h1V7h5.11v4h1V7h1.546l1.694 10H3.184L4.878 7h1.588z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'supplier-primary-filled') {
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
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM14.667 11L17 18H3l2.333-7h9.334z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'supplier-primary-outlined') {
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
                    d="M10 10a4 4 0 100-8 4 4 0 000 8zm3-4a3 3 0 11-6 0 3 3 0 016 0zM5.333 11h9.334L17 18H3l2.333-7zm-.946 6l1.667-5h7.892l1.667 5H4.387z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'supplier-secondary-filled') {
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
                    d="M10 10a4 4 0 100-8 4 4 0 000 8zM14.667 11L17 18H3l2.333-7h9.334zM18 9.5h-1.5V11h-1V9.5H14v-1h1.5V7h1v1.5H18v1z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'supplier-secondary-outlined') {
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
                    d="M10 10a4 4 0 100-8 4 4 0 000 8zm3-4a3 3 0 11-6 0 3 3 0 016 0zM5.333 11h9.334L17 18H3l2.333-7zm-.946 6l1.667-5h7.892l1.667 5H4.387z"
                    fill="#FF8000"
                />
                <path d="M15.5 9.5H14v-1h1.5V7h1v1.5H18v1h-1.5V11h-1V9.5z" fill="#FF8000" />
            </svg>
        );
    }
    if (icon === 'warehouse-filled') {
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
                <path d="M11.5 8v3h-3V8h3zM13.5 15h-3v-3h3v3zM6.5 12h3v3h-3v-3z" fill="#FF8000" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 1.913l7 4.308V18H3V6.22l7-4.307zM7.5 11V7h5v4h2v5h-9v-5h2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'warehouse-outlined') {
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
                    d="M5.5 11h2V7h5v4h2v5h-9v-5zm6 0V8h-3v3h3zm-5 1v3h3v-3h-3zm4 0v3h3v-3h-3z"
                    fill="#FF8000"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 1.913l7 4.308V18H3V6.22l7-4.308zM4 6.779V17h12V6.78l-6-3.693L4 6.78z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'workshop-filled') {
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
                    d="M2 4.5h2.5V3h1v1.5h7V3h1v1.5H16V8h2v4h-2v3h2v3H2v-3h10c0-1.924-.48-3.013-1.152-3.633C10.17 10.741 9.197 10.5 8 10.5H4.5V13h-1v-2.5H2v-6z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
    if (icon === 'workshop-outlined') {
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
                    d="M5.5 4.5V3h-1v1.5H2v6h1.5V13h1v-2.5H8c1.197 0 2.17.242 2.848.867C11.52 11.987 12 13.076 12 15H2v3h16v-3h-2v-3h2V8h-2V4.5h-2.5V3h-1v1.5h-7zM16 9v2h1V9h-1zM3 16v1h14v-1H3zm12-1V5.5H3v4h5c1.303 0 2.58.259 3.527 1.133C12.48 11.513 13 12.924 13 15h2z"
                    fill="#FF8000"
                />
            </svg>
        );
    }
};
export default SewingIcon;

