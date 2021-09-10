export const data = [
  {
    _isTotal: true,
    name: 'total',
    amount: { value: 98123122, format: '0,0' },
    growth: { value: 0.9, format: '0,0.0%', decoration: 'red' },
  },
].concat(['España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan'].map((name, i) => ({
  _isTotal: false,
  name,
  amount: { value: Math.random() * 100000, format: '0,0' },
  growth: { value: Math.random() * (i % 2 ? -1 : 1), format: '0,0.0%', decoration: 'red' },
})));
export const childrenData = [
  {
    _isTotal: true,
    name: 'total',
    amount: { value: 98123122, format: '0,0' },
    growth: { value: 0.9, format: '0,0.0%', decoration: 'red' },
    _children: [
      {
        _loading: true,
      },
      {
        _loading: true,
      },
    ],
  },
].concat(['España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan'].map((name, i) => ({
  _isTotal: false,
  name,
  amount: { value: 11111, format: '0,0' },
  growth: { value: 0.2 * (i % 2 ? -1 : 1), format: '0,0.0%', decoration: 'red' },
  _children: [
    {
      _isTotal: false,
      name: 'CHILD',
      amount: { value: 11111, format: '0,0' },
      growth: { value: 0.2 * (i % 2 ? -1 : 1), format: '0,0.0%', decoration: 'red' },
    },
  ],
})));
export const actionData = [
  {
    _isTotal: true,
    name: 'total',
    amount: { value: 98123122, format: '0,0' },
    growth: { value: 0.9, format: '0,0.0%', decoration: 'red' },
  },
].concat(['España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan'].map((name, i) => ({
  _isTotal: false,
  _actions: i % 2
    ? [{ icon: 'bar_chart', title: 'Analize', action: () => alert('action') }]
    : [
      { icon: 'bar_chart', title: 'Analize', action: () => alert('analyze') },
      { icon: 'lightbulb', title: 'Insights', action: () => alert('insight') },
    ],
  name,
  amount: { value: 11111, format: '0,0' },
  growth: { value: 0.2 * (i % 2 ? -1 : 1), format: '0,0.0%', decoration: 'red' },
})));
