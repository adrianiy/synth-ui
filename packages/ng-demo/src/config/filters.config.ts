export const FiltersConfig = {
  search: {
    usableIn: [],
    selected: [],
    lastSearchs: [],
    activePos: -1,
    suggestions: [],
    commonSearchs: [
      [
        { description: 'Ropa', type: 'product', parent: 'Producto', code: 0 },
        { description: 'señora', type: 'product', parent: 'Sección', code: 1 }
      ],
      [
        {
          description: 'Calzado',
          type: 'product',
          parent: 'Producto',
          code: 1
        },
        {
          description: 'caballero',
          type: 'product',
          parent: 'Sección',
          code: 2
        },
        { description: 'alovera', type: 'location', parent: 'Mercado', code: 1 }
      ]
    ],
    filters: []
  },
  budgetDate: [
    {
      usableIn: ['budget'],
      description: 'Mes',
      plural: 'Meses',
      key: 'budget_date',
      visible: true,
      selected: [],
      options: []
    }
  ],
  product: [
    {
      usableIn: ['budget'],
      description: 'Producto',
      plural: 'Productos',
      key: 'cod_product',
      visible: true,
      selected: [],
      options: []
    },
    {
      usableIn: ['budget'],
      description: 'Sección',
      plural: 'Secciones',
      key: 'cod_section',
      visible: true,
      selected: [],
      options: []
    }
  ],
  location: [
    {
      usableIn: ['budget'],
      description: 'Mercado',
      plural: 'Mercados',
      key: 'cod_market',
      search: 'Busca Alovera, Corea ...',
      searchText: '',
      visible: true,
      selected: [],
      options: []
    }
  ]
};
