export const filterEmptyRows = (list, fields) => {
  return list.filter((row) => fields.every((field) => row[field]));
};
export const sortList = (list, field, direction) => {
  const sortFunction = (a, b) => {
    if (direction === 'asc') {
      return a[field].value - b[field].value;
    }
    else {
      return b[field].value - a[field].value;
    }
  };
  return list.sort(sortFunction);
};
export const parseExcelData = (data, fields) => {
  const excelData = [];
  data.forEach(row => {
    excelData.push(_parseCsvRow(fields, row));
    if (row.children) {
      row.children.forEach((child) => excelData.push(_parseCsvRow(fields, child, `${row['name']}_`)));
    }
  });
  return excelData;
};
const _parseCsvRow = (fields, row, suffix = '') => {
  return [`${suffix}${row['name']}`].concat(fields.map(field => {
    const { value } = row[field];
    return value;
  }));
};
