export const FiltersConfig = {
    search: [
        {
            usableIn: [ 'test' ],
            key: 'search',
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
        }
    ],
    testDate: [
        {
            usableIn: [ 'test' ],
            description: 'Mes',
            plural: 'Meses',
            key: 'test_date',
            visible: true,
            selected: [],
            options: []
        }
    ],
    product: [
        {
            usableIn: [ 'test' ],
            description: 'Producto',
            plural: 'Productos',
            key: 'cod_product',
            visible: true,
            selected: [],
            options: []
        },
        {
            usableIn: [ 'test' ],
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
            usableIn: [ 'test' ],
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
