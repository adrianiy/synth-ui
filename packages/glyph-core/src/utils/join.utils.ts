export const crossJoin = (keys = [], leftData = [], rightData = []) => {
    return leftData
        .map(leftRow => {
            // for each left data row looks for first coincidence on right data.
            // to match a row all [keys] value must match on both rows
            const rightIndex = rightData.findIndex(rightRow =>
                keys.reduce((acc, key) => acc && leftRow[key] === rightRow[key], true),
            );

            if (rightIndex !== -1) {
                // if match is found, pop the index from right data.
                // by doing this we will end with right data array having only not found rows
                const rightRow = rightData.splice(rightIndex, 1)[0];
                leftRow = Object.assign(rightRow, leftRow);
            }
            return leftRow;
        })
        .concat(rightData);
};

export const leftOuterJoin = (keys = [], leftData = [], rightData = []) => {
    return leftData.map(leftRow => {
        // for each left data row looks for first coincidence on right data.
        // to match a row all [keys] value must match on both rows
        const rightRow = rightData.filter(rightRow =>
            keys.reduce((acc, curr) => {
                return acc && leftRow[curr] === rightRow[curr];
            }, true),
        )[0];
        if (rightRow) {
            // merge right with left rows, if keys are the same left keys will prevail
            leftRow = Object.assign(JSON.parse(JSON.stringify(rightRow)), leftRow);
        }
        return leftRow;
    });
};
