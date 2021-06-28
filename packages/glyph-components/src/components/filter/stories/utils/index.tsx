export const optionClickEvent = event => {
    const code = event.detail.option.code;
    const header = event.detail.option.header;
    let index = event.target.options.findIndex(option => option.code === code);
    let subindex = -1;
    if (index === -1) {
        index = event.target.options.findIndex(option => option.children?.some(child => child.code === code));
        subindex = event.target.options[index].children.findIndex(child => child.code === code);
    }
    let option = { ...event.target.options[index] };
    if (header) {
        event.target.options = [
            ...event.target.options.slice(0, index),
            {
                ...option,
                expanded: !option.expanded,
            },
            ...event.target.options.slice(index + 1),
        ];
        return null;
    }
    const multiSelect = event.target.multiSelect;
    if (!multiSelect) {
        event.target.options.forEach(opt => {
            opt.active = false;
            opt.children?.forEach(child => (child.active = false));
        });
        event.target.description = event.detail.option.description;
    }
    if (subindex === -1) {
        event.target.options = [
            ...event.target.options.slice(0, index),
            {
                ...option,
                active: !option.active,
            },
            ...event.target.options.slice(index + 1),
        ];
        event.target.active = true;
    } else {
        const child = option.children[subindex];
        const children = [
            ...option.children.slice(0, subindex),
            {
                ...child,
                active: !child.active,
            },
            ...option.children.slice(subindex + 1),
        ];
        event.target.options = [
            ...event.target.options.slice(0, index),
            {
                ...option,
                children,
                expanded: !option.expanded,
            },
            ...event.target.options.slice(index + 1),
        ];
        event.target.active = true;
    }
    if (multiSelect) {
        const selected = event.target.options.reduce((acc, curr) => {
            if (subindex === -1) {
                return acc + (curr.active ? 1 : 0);
            } else {
                return acc + curr.children?.filter(child => child.active).length;
            }
        }, 0);
        event.target.description = `${selected} ${event.target.plural}`;
    }
};

export const clearEvent = event => {
    if (event.target.haveMultiSelect) {
        event.target.options = [
            {
                description: 'header',
                display: true,
                header: true,
                code: 88,
                children: [
                    { description: 'option', active: false, display: true, code: 1 },
                    { description: 'option 2', active: false, display: true, code: 2 },
                    { description: 'option 3', active: false, display: true, code: 3 },
                ],
            },
            {
                description: 'header2',
                display: true,
                header: true,
                code: 99,
                children: [
                    { description: 'option', active: false, display: true, code: 4 },
                    { description: 'option 2', active: false, display: true, code: 5 },
                    { description: 'option 3', active: false, display: true, code: 6 },
                ],
            },
        ];
    } else {
        event.target.options = [
            { description: 'option', active: false, display: true },
            { description: 'option 2', active: false, display: true },
            { description: 'option 3', active: false, display: true },
        ];
    }
    event.target.active = false;
    event.target.description = 'Test filter';
};

export const multiSelectEvent = event => {
    event.target.multiSelect = !event.target.multiSelect;
    if (!event.target.multiSelect) {
        event.target.options.forEach(opt => {
            opt.active = false;
            opt.children?.forEach(child => (child.active = false));
        });
        event.target.description = 'Test filter';
        event.target.active = false;
    }
};
