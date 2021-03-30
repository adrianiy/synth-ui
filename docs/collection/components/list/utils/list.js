export const expandRows = (list, selectedCountryIdx) => {
  const shouldExpandAll = selectedCountryIdx === 0;
  if (shouldExpandAll) {
    return list.map((row) => (Object.assign(Object.assign({}, row), { expanded: true })));
  }
  else if (selectedCountryIdx) {
    return list.map((row, index) => index === selectedCountryIdx ? Object.assign(Object.assign({}, row), { _expanded: true }) : row);
  }
};
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
