export const FiltersConfig = {
    section: [
        {
            description: 'Señora',
            code: 1,
            display: true
        },
        {
            description: 'Caballero',
            code: 2,
            display: true
        },
        {
            description: 'Niño',
            code: 3,
            display: true
        }
    ],
    product: [
        {
            description: 'Ropa',
            code: 0,
            display: true
        },
        {
            description: 'Calzado',
            code: 1,
            display: true
        },
        {
            description: 'Perfumeria',
            code: 2,
            display: true
        },
        {
            description: 'Hogar',
            code: 4,
            display: true
        }
    ],
    product_line: [
        {
            parents: {
                Sección: 1,
                Producto: null
            },
            description: 'Señora',
            header: true,
            display: true,
            code: '1',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0, 0 ],
                    description: 'Lenceria',
                    code: [ 1637, 8, 8 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:prensa',
                    code: [ 2001027, 2001027 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Perfumeria',
                    code: [ 44, 53 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:woman',
                    code: [ 2001026, 2001026 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:comp.cro',
                    code: [ 2002121 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:col.int.mes_o',
                    code: [ 2001034, 2001034 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Basic',
                    code: [ 2, 24 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:caballero',
                    code: [ 2000121 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Cocina',
                    code: [ 1567 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Circular',
                    code: [ 1133 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Baño',
                    code: [ 1568 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0, 1 ],
                    description: 'Srpls',
                    code: [ 11000001, 12000001 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0, 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Cosmética',
                    code: [ 1559 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z:rest calz sra',
                    code: [ 2001091 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Punto',
                    code: [ 5, 27 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:bolsos sra',
                    code: [ 2001202, 2001202 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0, 0 ],
                    description: 'Zara studio',
                    code: [ 13000001, 1253 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:woman complen',
                    code: [ 2001201, 2001201 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Salón',
                    code: [ 1560 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Woman',
                    code: [ 1, 23 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Cosmetica',
                    code: [ 45, 54 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:basic',
                    code: [ 2001001, 2001001 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Special edition',
                    code: [ 14000001 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Kids',
                    code: [ 1294 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:trf',
                    code: [ 2001022, 2001022 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:niño',
                    code: [ 2000131 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:trf complemen',
                    code: [ 2001203, 2001203 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:comp.señora',
                    code: [ 2002111 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Varios',
                    code: [ 1295 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Complementos',
                    code: [ 4, 26 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Studio tempe',
                    code: [ 15000001 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Interior',
                    code: [ 1577 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'Dormitorio',
                    code: [ 1557 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:comp.niño',
                    code: [ 2002131 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:señora',
                    code: [ 2000111 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z:rest comp sra',
                    code: [ 2001291 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Trf',
                    code: [ 3, 25 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'Camisetas w+b',
                    code: [ 1073 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'Camisetas trf',
                    code: [ 1074 ],
                    section: 1,
                    display: true,
                    parents: {
                        Sección: 1,
                        Producto: [ 0 ]
                    }
                }
            ]
        },
        {
            parents: {
                Sección: 2,
                Producto: null
            },
            description: 'Caballero',
            header: true,
            display: true,
            code: '2',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Cosmetica',
                    code: [ 48, 57 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:watches',
                    code: [ 2001227, 2001227 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 0, 0, 0, 0, 0, 0 ],
                    description: 'Srpls',
                    code: [ 12200001, 36000001, 1353, 1354, 1353, 36000016, 1354 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0, 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Complementos',
                    code: [ 306, 36 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:moda',
                    code: [ 2001025, 2001025 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Vestir',
                    code: [ 1193, 1195 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Denim',
                    code: [ 486, 546 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Zara studio cro',
                    code: [ 1534, 1535 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Studio tempe',
                    code: [ 15200001 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z:rest calz cro',
                    code: [ 2001092 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Punto',
                    code: [ 12, 33 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:caballero',
                    code: [ 2001023, 2001023 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:bags/wallets',
                    code: [ 2001221, 2001221 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Circular',
                    code: [ 14, 35 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Perfumeria',
                    code: [ 47, 56 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z:rest comp cro',
                    code: [ 2001292 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Sport',
                    code: [ 1194, 1196 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 1 ],
                    description: 'Z:jeans wear',
                    code: [ 2001010 ],
                    section: 2,
                    display: true,
                    parents: {
                        Sección: 2,
                        Producto: [ 1 ]
                    }
                }
            ]
        },
        {
            parents: {
                Sección: 3,
                Producto: null
            },
            description: 'Niño',
            header: true,
            display: true,
            code: '3',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:meses niño',
                    code: [ 2001013, 2001013 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:niña',
                    code: [ 2001003, 2001003 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:bolsos meses',
                    code: [ 2001233, 2001233 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Byo colección',
                    code: [ 1910 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Niña circular',
                    code: [ 2671 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Accesorios niña',
                    code: [ 3334 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:bolsos niño',
                    code: [ 2001232, 2001232 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Niño plana',
                    code: [ 3325 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Punto niño',
                    code: [ 3124 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Bya circular',
                    code: [ 3328 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Byo circular',
                    code: [ 3330 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Punto byo',
                    code: [ 3333 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Bya colección',
                    code: [ 1909 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0, 0 ],
                    description: 'Mini',
                    code: [ 3062, 1873, 1873 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Accesorios',
                    code: [ 1267, 43 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:niño',
                    code: [ 2001004, 2001004 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Accesorios bb-meses',
                    code: [ 3336 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Studio tempe',
                    code: [ 15300001 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 1, 0 ],
                    description: 'Srpls',
                    code: [ 35000001, 12300001, 35000016 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0, 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0, 0 ],
                    description: 'Punto',
                    code: [ 41, 1266, 41 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:meses niña',
                    code: [ 2001012, 2001012 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Niño circular',
                    code: [ 3326 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Accesorios niño',
                    code: [ 3335 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Punto bya',
                    code: [ 3332 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Niña plana',
                    code: [ 2670 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Punto niña',
                    code: [ 3331 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Bya plana',
                    code: [ 3327 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Perfumeria',
                    code: [ 50, 59 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2, 2 ],
                    description: 'Cosmetica',
                    code: [ 51, 60 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0, 0 ],
                    description: 'Zara studio',
                    code: [ 2799, 1657 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Byo plana',
                    code: [ 3329 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Niño colección',
                    code: [ 1908 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z:rest calz niñ',
                    code: [ 2001093 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1, 1 ],
                    description: 'Z:bolsos niña',
                    code: [ 2001231, 2001231 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'Niño',
                    code: [ 39 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'Bb - meses',
                    code: [ 40 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'Niña',
                    code: [ 38 ],
                    section: 3,
                    display: true,
                    parents: {
                        Sección: 3,
                        Producto: [ 0 ]
                    }
                }
            ]
        }
    ],
    family: [
        {
            parents: {
                Producto: 0,
                Sección: null,
                Líneas: null
            },
            description: 'Ropa',
            header: true,
            display: true,
            code: '0',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'ACCESORIOS MASCOTA',
                    code: [ 95 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CALCETIN',
                    code: [ 13 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        36,
                        306,
                        36000001,
                        36000016,
                        4,
                        26,
                        11000001,
                        1637,
                        1073,
                        23,
                        38,
                        3334,
                        1267,
                        3335,
                        39,
                        2671,
                        35000001,
                        35000016,
                        2799,
                        1657
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            1637,
                            8,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            3334,
                            11000001,
                            12000001,
                            1267,
                            43,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3335,
                            4,
                            26,
                            2799,
                            1657,
                            39,
                            1073,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GUANTE BEBE',
                    code: [ 81 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'ABRIGO BEBE',
                    code: [ 67 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 1909, 40, 3333, 3332, 1266, 1910 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3333, 1909, 41, 1266, 3332, 3327, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PETO BEBE',
                    code: [ 84 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 1910, 40, 1266, 3327, 3332, 3329, 3333, 1909 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3333, 1909, 3062, 1873, 41, 1266, 3332, 3327, 3329, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'SUJETADOR',
                    code: [ 41 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637, 1073 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8, 1073 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CONJUNTO',
                    code: [ 19 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3326, 2671, 38, 1908, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 3326, 1908, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAMISON/PIJAMA',
                    code: [ 42 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 36, 306, 3335, 3334, 1267, 39, 38 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 306, 36, 3334, 1267, 43, 3335, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BUFANDA BEBE',
                    code: [ 78 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BAÑADOR BEBE',
                    code: [ 77 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'POLO BEBE',
                    code: [ 66 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 40, 1909, 1910, 3328 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 1909, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PRENDA EXT.BEBE',
                    code: [ 65 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1910, 3327, 40, 3329, 1909, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 1909, 3062, 1873, 3327, 3329, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BOLSAS Y MOCHILAS',
                    code: [ 14 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 306, 36, 2799 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 306, 36, 2799, 1657 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAMISA',
                    code: [ 4 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1196,
                        546,
                        486,
                        1193,
                        1194,
                        1195,
                        1534,
                        36000016,
                        1535,
                        306,
                        12,
                        36000001,
                        566,
                        33,
                        35,
                        36,
                        17,
                        14,
                        1,
                        25,
                        24,
                        2,
                        23,
                        3,
                        1073,
                        1253,
                        11000001,
                        7,
                        29,
                        1074,
                        3325,
                        2670,
                        39,
                        38,
                        35000001,
                        1908,
                        2799,
                        1657,
                        35000016,
                        1133
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            1133,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            2670,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAZADORA',
                    code: [ 6 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1196,
                        1194,
                        486,
                        35,
                        546,
                        12,
                        14,
                        1195,
                        1193,
                        36000016,
                        36000001,
                        1535,
                        306,
                        1534,
                        1,
                        24,
                        2,
                        3,
                        25,
                        23,
                        11000001,
                        1253,
                        7,
                        1133,
                        1074,
                        1908,
                        3325,
                        2670,
                        38,
                        2671,
                        39,
                        2799,
                        3326,
                        35000001,
                        1657,
                        1073,
                        36,
                        33,
                        35000016
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            1133,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            3326,
                            2670,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MONEDERO BILLETERA',
                    code: [ 29 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BRAGA/CALZONCILLO',
                    code: [ 40 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 36, 306, 1073, 1637, 36000001, 36000016 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 1637, 8, 12200001, 36000001, 1353, 1354, 36000016, 306, 36, 1073 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'SUDADERA',
                    code: [ 60 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        35,
                        14,
                        486,
                        546,
                        306,
                        36000016,
                        36,
                        36000001,
                        17,
                        1074,
                        11000001,
                        1073,
                        1133,
                        5,
                        27,
                        23,
                        2671,
                        35000001,
                        35000016,
                        2799,
                        39,
                        566,
                        1657
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            486,
                            546,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            14,
                            35,
                            2799,
                            1657,
                            39,
                            1073,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PAJARITA/FAJIN',
                    code: [ 38 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'INTERIORES',
                    code: [ 12 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3334, 3335, 38, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 3335, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHANDAL BEBE',
                    code: [ 75 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 40, 1910, 3328, 1909 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 1909, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAMISA BEBE',
                    code: [ 64 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3329, 1910, 1909, 40, 3327, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 1909, 3062, 1873, 3327, 3329, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PETO',
                    code: [ 34 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 23, 1, 38, 2670, 2671, 35000001 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2671, 35000001, 12300001, 35000016, 1, 23, 2670, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CALZADO',
                    code: [ 46 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637, 1073 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8, 1073 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CALCETIN BEBE',
                    code: [ 73 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHAQUETA BEBE',
                    code: [ 69 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 1266, 1909, 3332, 3062, 3333, 3328 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 3333, 1909, 3062, 1873, 41, 1266, 3332, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'FALDA',
                    code: [ 3 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [
                        2,
                        24,
                        25,
                        5,
                        1074,
                        1,
                        27,
                        3,
                        1133,
                        23,
                        1073,
                        1253,
                        11000001,
                        2671,
                        38,
                        2670,
                        1657,
                        3331,
                        35000016,
                        2799,
                        35000001,
                        39,
                        1266
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [
                            2671,
                            2,
                            24,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            41,
                            1266,
                            2670,
                            3331,
                            2799,
                            1657,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BERMUDA BEBE',
                    code: [ 80 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 3329, 40, 3328, 1909, 3327, 1910, 3062, 3332, 3333, 1266 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 3333, 1909, 3062, 1873, 41, 1266, 3332, 3327, 3329, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'UNIFORMES',
                    code: [ 99 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 17, 566, 7, 29 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'SOBRECAMISA',
                    code: [ 59 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 1194, 1193, 546, 12, 486, 14, 1195, 1196, 3, 35, 33, 39, 3325 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 1193, 1195, 486, 546, 3325, 12, 33, 14, 35, 1194, 1196, 3, 25, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CONJUNTO BEBE',
                    code: [ 79 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CORBATAS',
                    code: [ 24 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 306, 36, 3335, 39, 1267 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 306, 36, 1267, 43, 3335, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'LEGGINGS BEBE',
                    code: [ 93 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3328, 40, 1909 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'LEOTARDO BEBE',
                    code: [ 90 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BAÑO',
                    code: [ 37 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 36, 306, 4, 26, 1267, 3334, 3335, 39, 38, 2799, 2671, 1657 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 306, 36, 2671, 3334, 1267, 43, 3335, 4, 26, 2799, 1657, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PAÑOLETAS/FOULARD',
                    code: [ 26 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 36, 306, 36000016, 26, 4, 11000001, 3334, 3335, 1267, 39, 38, 36000001 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            11000001,
                            12000001,
                            1267,
                            43,
                            3335,
                            4,
                            26,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHALECO',
                    code: [ 31 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1194,
                        486,
                        546,
                        1196,
                        1195,
                        1193,
                        5,
                        2,
                        24,
                        25,
                        3,
                        23,
                        1,
                        27,
                        11000001,
                        1073,
                        1133,
                        1253,
                        38,
                        1908,
                        3325,
                        3331,
                        2670,
                        39,
                        3124,
                        2799,
                        3326,
                        35000016,
                        2671,
                        35000001,
                        1074,
                        36000016,
                        36000001,
                        7
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            3325,
                            3124,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3326,
                            2670,
                            3331,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PELELE BEBE',
                    code: [ 86 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'LEGGINGS',
                    code: [ 58 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 2, 3, 4, 24, 1133, 26, 5, 1074, 2671, 38, 1073 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2671, 2, 24, 1133, 5, 27, 4, 26, 3, 25, 1073, 38, 1074 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'COMPLEMENTOS',
                    code: [ 16 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [
                        4,
                        1637,
                        1073,
                        26,
                        11000001,
                        1253,
                        1267,
                        38,
                        39,
                        3334,
                        2799,
                        1657,
                        3335,
                        3327,
                        2671,
                        35000001
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [
                            1637,
                            8,
                            2671,
                            3334,
                            11000001,
                            12000001,
                            1267,
                            43,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            3335,
                            4,
                            26,
                            3327,
                            2799,
                            1657,
                            39,
                            1073,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BODY BEBE',
                    code: [ 72 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BLASIER',
                    code: [ 5 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1193,
                        1194,
                        1195,
                        1196,
                        12,
                        14,
                        1535,
                        17,
                        35,
                        33,
                        486,
                        36000016,
                        546,
                        566,
                        1,
                        2,
                        23,
                        24,
                        3,
                        25,
                        7,
                        1253,
                        11000001,
                        1534,
                        36000001,
                        3325,
                        2670,
                        39,
                        1908,
                        38,
                        2799,
                        35000001,
                        2671,
                        29,
                        1657
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            2670,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'SHORT',
                    code: [ 43 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 27, 1133, 5, 1073, 1074 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 5, 27, 1073, 1074 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'COMPLEMENTOS BEBE',
                    code: [ 76 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 3062, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GORRO BEBE',
                    code: [ 74 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267, 3062, 43 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'ABRIGO',
                    code: [ 7 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1193,
                        1195,
                        1196,
                        36000001,
                        33,
                        486,
                        1194,
                        1534,
                        36000016,
                        546,
                        35,
                        1535,
                        14,
                        12,
                        1,
                        24,
                        3,
                        2,
                        25,
                        1073,
                        23,
                        1133,
                        27,
                        5,
                        1253,
                        11000001,
                        1074,
                        38,
                        3124,
                        35000001,
                        2670,
                        39,
                        1266,
                        3331,
                        2799,
                        3325,
                        1908,
                        1657,
                        2671,
                        35000016
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            3124,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            41,
                            1266,
                            2670,
                            3331,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BUFANDA',
                    code: [ 18 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        306,
                        36,
                        4,
                        26,
                        11000001,
                        1267,
                        38,
                        3335,
                        39,
                        3334,
                        2799,
                        35000016,
                        23,
                        36000016,
                        35000001,
                        1657,
                        36000001
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            11000001,
                            12000001,
                            1267,
                            43,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3335,
                            4,
                            26,
                            2799,
                            1657,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'ANORAK',
                    code: [ 56 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 3, 2, 24, 2670, 3325, 38, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2, 24, 3325, 2670, 3, 25, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BRAGA/CALZONC.BEBE',
                    code: [ 89 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHAQUETON',
                    code: [ 55 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        36000016,
                        1194,
                        486,
                        306,
                        1196,
                        546,
                        36000001,
                        1195,
                        1193,
                        12,
                        1253,
                        2670,
                        35000001,
                        38,
                        39,
                        23,
                        33,
                        35000016,
                        2799,
                        36,
                        11000001
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            2670,
                            2799,
                            1657,
                            1194,
                            1196,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MEDIAS-PANTYS',
                    code: [ 36 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 4, 26, 3334, 1267, 38 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 3334, 1267, 43, 4, 26, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'JERSEY BEBE',
                    code: [ 70 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 3333, 3328, 1266, 3332, 3062, 3330, 1910, 1909 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 3333, 1909, 3062, 1873, 41, 1266, 3332, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAZADORA BEBE',
                    code: [ 83 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 3330, 3328, 1909, 40, 1910 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 1909, 3062, 1873, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BISUTERIA',
                    code: [ 45 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        306,
                        36,
                        36000016,
                        36000001,
                        4,
                        26,
                        13000001,
                        1253,
                        14000001,
                        11000001,
                        23,
                        3334,
                        3335
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            1,
                            23,
                            3335,
                            14000001,
                            4,
                            26
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CINTURON BEBE',
                    code: [ 82 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 1267, 3336 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PARKA',
                    code: [ 57 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3325, 2670, 38, 1908, 35000001, 39, 35000016 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 35000001, 12300001, 35000016, 2670, 1908, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'TIRANTES',
                    code: [ 23 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 306, 36, 1267, 39, 3335 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 306, 36, 1267, 43, 3335, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BERMUDA',
                    code: [ 20 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        14,
                        1194,
                        1196,
                        486,
                        546,
                        1195,
                        35,
                        12,
                        1534,
                        1193,
                        36,
                        33,
                        36000016,
                        306,
                        36000001,
                        1535,
                        3,
                        1,
                        2,
                        23,
                        24,
                        25,
                        1253,
                        11000001,
                        1073,
                        1133,
                        38,
                        3325,
                        2670,
                        3326,
                        1908,
                        39,
                        2671,
                        35000001,
                        2799,
                        1657,
                        35000016
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            1133,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            3326,
                            2670,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GABARDINA IMPERMEA',
                    code: [ 8 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1193,
                        1196,
                        1195,
                        1194,
                        36000016,
                        546,
                        486,
                        24,
                        23,
                        2,
                        1,
                        25,
                        7,
                        1253,
                        11000001,
                        2670,
                        38,
                        3325,
                        39,
                        1908,
                        36000001,
                        2799
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            3325,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            1,
                            23,
                            2670,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MONO',
                    code: [ 39 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [
                        1133,
                        25,
                        2,
                        11000001,
                        3,
                        24,
                        27,
                        5,
                        1074,
                        1073,
                        23,
                        1637,
                        1253,
                        1266,
                        35000001,
                        38,
                        35000016,
                        1
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [
                            1637,
                            8,
                            2,
                            24,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            41,
                            1266,
                            3,
                            25,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAMISETA',
                    code: [ 11 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        35,
                        14,
                        546,
                        36000001,
                        486,
                        36000016,
                        17,
                        36,
                        306,
                        566,
                        1133,
                        1073,
                        1074,
                        11000001,
                        7,
                        1253,
                        29,
                        23,
                        39,
                        38,
                        2671,
                        3326,
                        1908,
                        35000016,
                        35000001,
                        2799,
                        1657,
                        1535,
                        1534
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            486,
                            546,
                            1534,
                            1535,
                            1133,
                            11000001,
                            12000001,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3326,
                            14,
                            35,
                            2799,
                            1657,
                            1908,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'VESTIDO BEBE',
                    code: [ 62 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 3328, 1266, 1909, 40, 3332, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 3062, 1873, 41, 1266, 3332, 3327, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PANTALON',
                    code: [ 1 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        1193,
                        486,
                        1195,
                        1194,
                        546,
                        1196,
                        14,
                        35,
                        36000016,
                        1534,
                        12,
                        36000001,
                        306,
                        33,
                        1535,
                        17,
                        36,
                        2,
                        3,
                        1,
                        23,
                        1074,
                        1133,
                        11000001,
                        25,
                        24,
                        27,
                        5,
                        1073,
                        1637,
                        7,
                        1253,
                        29,
                        566,
                        3325,
                        39,
                        2670,
                        3326,
                        38,
                        1908,
                        2671,
                        35000001,
                        3331,
                        1657,
                        1266,
                        35000016,
                        2799,
                        3124,
                        40
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            1637,
                            8,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            2671,
                            1193,
                            1195,
                            486,
                            546,
                            2,
                            24,
                            1534,
                            1535,
                            3325,
                            3124,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            41,
                            1266,
                            3326,
                            2670,
                            3331,
                            14,
                            35,
                            2799,
                            1657,
                            1194,
                            1196,
                            1908,
                            3,
                            25,
                            39,
                            1073,
                            40,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CINTURONES',
                    code: [ 22 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        306,
                        36,
                        36000016,
                        26,
                        4,
                        23,
                        11000001,
                        36000001,
                        39,
                        3335,
                        1267,
                        3334,
                        38,
                        2799,
                        35000001,
                        35000016,
                        1657
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            11000001,
                            12000001,
                            1267,
                            43,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3335,
                            4,
                            26,
                            2799,
                            1657,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PANTALON BEBE',
                    code: [ 61 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 3333, 40, 1909, 3062, 1910, 3328, 3332, 3329, 3330, 1266 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 3333, 1909, 3062, 1873, 41, 1266, 3332, 3327, 3329, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHALECO PUNTO',
                    code: [ 30 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 12, 33, 2799 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 12, 33, 2799, 1657 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'VESTIDO',
                    code: [ 2 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [
                        1,
                        1133,
                        24,
                        27,
                        5,
                        1073,
                        1253,
                        3,
                        25,
                        2,
                        1074,
                        23,
                        1637,
                        11000001,
                        2671,
                        2670,
                        38,
                        39,
                        2799,
                        35000001,
                        3331,
                        1657,
                        1266,
                        35000016
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [
                            1637,
                            8,
                            2671,
                            2,
                            24,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            41,
                            1266,
                            2670,
                            3331,
                            2799,
                            1657,
                            3,
                            25,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PARAGUAS',
                    code: [ 28 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 36, 306, 4, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 306, 36, 4, 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'TOPS Y OTRAS P.',
                    code: [ 52 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 4, 1073, 5, 1074, 1637, 27, 26, 1133, 11000001, 39, 2670, 3334, 38, 23 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 1637, 8, 3334, 1133, 11000001, 12000001, 5, 27, 1, 23, 2670, 4, 26, 39, 1073, 38, 1074 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BODY',
                    code: [ 17 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 1133, 1074, 5, 1073, 27, 1637, 2671, 38 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 1637, 8, 2671, 1133, 5, 27, 1073, 38, 1074 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'POLO',
                    code: [ 27 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 14, 35, 17, 566, 1908, 3326, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2, 3 ],
                        Líneas: [ 3326, 14, 35, 1908, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BLUSA',
                    code: [ 54 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 1073, 1133, 1253, 38, 2670, 35000001 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 1133, 13000001, 1253, 35000001, 12300001, 35000016, 2670, 1073, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CAMISETA BEBE',
                    code: [ 71 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 1909, 3328, 40, 1910, 3062 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3328, 3330, 1909, 3062, 1873, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GORRO',
                    code: [ 35 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        306,
                        36,
                        36000001,
                        36000016,
                        26,
                        4,
                        23,
                        11000001,
                        39,
                        3334,
                        1267,
                        38,
                        3335,
                        2799,
                        35000016,
                        35000001,
                        1657,
                        1535
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            1534,
                            1535,
                            11000001,
                            12000001,
                            1267,
                            43,
                            35000001,
                            12300001,
                            35000016,
                            1,
                            23,
                            3335,
                            4,
                            26,
                            2799,
                            1657,
                            39,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHAQUETA',
                    code: [ 9 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        12,
                        33,
                        14,
                        36000001,
                        35,
                        5,
                        27,
                        1074,
                        1073,
                        1133,
                        1253,
                        11000001,
                        1637,
                        23,
                        1266,
                        3331,
                        38,
                        39,
                        1908,
                        3326,
                        3124,
                        2671,
                        1657,
                        36000016,
                        2799,
                        35000016,
                        35000001
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            1637,
                            8,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2671,
                            3124,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            13000001,
                            1253,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            41,
                            1266,
                            3326,
                            3331,
                            14,
                            35,
                            2799,
                            1657,
                            1908,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'TOALLA',
                    code: [ 32 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 39, 38, 1267, 3334 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 3335, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GAFAS DE SOL',
                    code: [ 33 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 306, 36, 36000001, 36000016, 26, 4, 1267, 3334, 3335, 38, 2799 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            3334,
                            1267,
                            43,
                            3335,
                            4,
                            26,
                            2799,
                            1657,
                            38
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'FALDA BEBE',
                    code: [ 63 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3328, 3327, 3332, 1909, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 3332, 3327, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PIJAMA BEBE',
                    code: [ 85 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'JERSEY',
                    code: [ 10 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        12,
                        33,
                        36000001,
                        36000016,
                        5,
                        23,
                        27,
                        1074,
                        11000001,
                        1073,
                        1133,
                        29,
                        3326,
                        1266,
                        2671,
                        38,
                        39,
                        1908,
                        3331,
                        35000001,
                        3124,
                        2799,
                        1657,
                        35000016
                    ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2671,
                            3124,
                            1133,
                            11000001,
                            12000001,
                            5,
                            27,
                            35000001,
                            12300001,
                            35000016,
                            12,
                            33,
                            1,
                            23,
                            41,
                            1266,
                            3326,
                            3331,
                            2799,
                            1657,
                            1908,
                            39,
                            1073,
                            38,
                            1074
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'GUANTE',
                    code: [ 21 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 306, 36, 4, 26, 1267, 38, 3335, 39, 3334 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 306, 36, 3334, 1267, 43, 3335, 4, 26, 39, 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CHALECO BEBE',
                    code: [ 68 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 3329, 1910, 3330, 1909, 3332, 3333 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 3333, 1909, 3332, 3327, 3329, 40 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 1,
                Sección: null,
                Líneas: null
            },
            description: 'Calzado',
            header: true,
            display: true,
            code: '1',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTIN',
                    code: [ 8 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2001023, 12200001, 2001025, 2001001, 2001004, 2001003, 12300001, 15300001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            2001003,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2001025,
                            2001004,
                            15300001,
                            35000001,
                            12300001,
                            35000016,
                            2001001,
                            2001023
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BAÑO/CHANCLA',
                    code: [ 3 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 2001012, 2001004, 2001013 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001003, 2001004, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'GAFAS DE VISTA',
                    code: [ 33 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'MOCASIN',
                    code: [ 41 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 15200001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 15200001, 2001023 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'BISUTERIA',
                    code: [ 37 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002111 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002111 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTA PLANA',
                    code: [ 6 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001026, 2001022 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 2001001, 2001022 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ZAPATO PLANO',
                    code: [ 24 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 2001022, 2001001, 2000131, 2000121, 2000111, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 2000121, 11000001, 12000001, 2001001, 2001022, 2000131, 2000111 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'RUNNING',
                    code: [ 48 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 12200001, 15200001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 15200001, 2001023 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'GENERICO',
                    code: [ 0 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2000000 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTA TACON',
                    code: [ 7 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001026, 2001022, 15000001, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 2001001, 2001022, 15000001 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'SANDALIA TACON',
                    code: [ 57 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTIN PLANO',
                    code: [ 9 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001022, 2001026, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 2001001, 2001022 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTA',
                    code: [ 5 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 2001001, 2001012, 2001013, 2001003, 12300001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2001013, 2001003, 35000001, 12300001, 35000016, 2001012, 2001001 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'GAFAS DE SOL',
                    code: [ 38 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'PALA/PINKY',
                    code: [ 20 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001022 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001, 2001022 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'DEPORTIVO BOTIN',
                    code: [ 14 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 2001023, 2001025, 2001003, 2001012, 2001013, 2001004, 12300001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2, 3 ],
                        Líneas: [ 2001013, 2001003, 2001025, 2001004, 35000001, 12300001, 35000016, 2001012, 2001023 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTA PEUCO',
                    code: [ 32 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013, 2001012 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ACCESORIOS',
                    code: [ 79 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2001221, 2002121, 2001202, 2001231 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 2002121, 2001202, 2001221, 2001231 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOLSOS',
                    code: [ 50 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        2001221,
                        12200001,
                        15200001,
                        2001202,
                        2001203,
                        2001201,
                        2002111,
                        12000001,
                        2001291,
                        2001027,
                        15000001,
                        2001231,
                        2001233,
                        2001232,
                        12300001,
                        15300001,
                        2001093
                    ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            2001027,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2001233,
                            2001232,
                            11000001,
                            12000001,
                            15200001,
                            2001202,
                            2001201,
                            15300001,
                            35000001,
                            12300001,
                            35000016,
                            2001221,
                            2001203,
                            2002111,
                            15000001,
                            2001093,
                            2001291,
                            2001231
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ZAPATO TACON',
                    code: [ 25 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001026, 2001022, 15000001, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 2001001, 2001022, 15000001 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'GORRO',
                    code: [ 62 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002111 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002111 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'LLUVIA',
                    code: [ 2 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012, 2001013, 2001003, 2001004 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001003, 2001004, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'SANDALIA PEUCO',
                    code: [ 30 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012, 2001013 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'DEPORTIVO',
                    code: [ 13 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [
                        2001023,
                        2001025,
                        12200001,
                        15200001,
                        2001022,
                        2001026,
                        2001001,
                        2001004,
                        2001003,
                        2001012,
                        2001013,
                        12300001
                    ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [
                            2001013,
                            2001003,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            2001026,
                            2001025,
                            15200001,
                            2001004,
                            35000001,
                            12300001,
                            35000016,
                            2001012,
                            2001001,
                            2001022,
                            2001023
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ZAPATERIA SPORT',
                    code: [ 17 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001023 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BOTIN TACON',
                    code: [ 10 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001026, 2001022, 15000001, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 2001001, 2001022, 15000001 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'SANDALIA E',
                    code: [ 19 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022, 2001026, 15000001, 12000001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 2001022, 15000001 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'RELOJES',
                    code: [ 97 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 2001227, 2002121 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2 ],
                        Líneas: [ 2001227, 2002121 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'UNIFORME',
                    code: [ 22 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2001007, 2001034, 2000111, 2000121, 2001004, 2001035 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 2001034, 2000121, 2001004, 2000111 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'SANDALIA PLANA',
                    code: [ 58 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2000131, 2000121, 2000111 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000121, 2000131, 2000111 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'BASICO',
                    code: [ 4 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2000121, 2000111, 2000131 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000121, 2000131, 2000111 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'SANDALIA',
                    code: [ 21 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [
                        2001001,
                        2001026,
                        2001022,
                        12000001,
                        2001012,
                        2001003,
                        2001004,
                        2001013,
                        15300001,
                        12300001
                    ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 3 ],
                        Líneas: [
                            2001013,
                            2001003,
                            2001026,
                            11000001,
                            12000001,
                            2001004,
                            15300001,
                            35000001,
                            12300001,
                            35000016,
                            2001012,
                            2001001,
                            2001022
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'LLAVERO',
                    code: [ 56 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BILLETERAS',
                    code: [ 51 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2001221, 2002121, 2002111, 2001231, 2001232 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 2002121, 2001232, 2001221, 2002111, 2001231 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ABIERTO',
                    code: [ 81 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 2001025, 12200001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001025, 2001023 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BAMBAS',
                    code: [ 42 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 2001004, 2001013, 2001012, 12300001, 15300001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001003, 2001004, 15300001, 35000001, 12300001, 35000016, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ZAPATO',
                    code: [ 23 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 2001023, 12200001, 15200001, 2001003, 2001004, 2001012, 2001013, 15300001, 12300001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2, 3 ],
                        Líneas: [
                            2001013,
                            2001003,
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            15200001,
                            2001004,
                            15300001,
                            35000001,
                            12300001,
                            35000016,
                            2001012,
                            2001023
                        ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'BAMBAS PEUCO',
                    code: [ 43 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013, 2001012 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013, 2001012 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'CUÑA',
                    code: [ 12 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022, 2001026, 2001001, 2000111 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 2001001, 2001022, 2000111 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'ALARMAS',
                    code: [ 98 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'CALZADO',
                    code: [ 1 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 2001092, 2001010, 2001292, 2001091, 2000111, 2001026, 2001093, 2001004 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 2001026, 2001091, 2001092, 2001004, 2001292, 2000111, 2001093, 2001010 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'CALCETINES',
                    code: [ 40 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002111, 2000131 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000131, 2002111 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'POLAINA',
                    code: [ 39 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001203 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001203 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'ZAPATO PEUCO',
                    code: [ 28 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 2000131, 2001012, 2001013 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2001013, 2001012, 2000131 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'HOME',
                    code: [ 11 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 2000111, 2000121, 2000131, 2002131, 2001003, 2001012, 2001004, 2001013 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2001013, 2001003, 2000121, 2001004, 2001012, 2000131, 2002131, 2000111 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 2,
                Sección: null,
                Líneas: null
            },
            description: 'Perfumeria',
            header: true,
            display: true,
            code: '2',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'MAQUILLAJE OJOS',
                    code: [ 57 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'TESTER',
                    code: [ 70 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 49, 46, 52 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'TOALLITA PERFUMADA',
                    code: [ 47 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 52 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'PAPEL PERFUMADO',
                    code: [ 45 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 46 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PERFUME',
                    code: [ 48 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 47, 56, 49, 58, 53, 44, 55, 46 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2 ],
                        Líneas: [ 44, 53, 47, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'EAU DE PERFUME',
                    code: [ 75 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 49, 58, 44, 53, 46, 55, 50, 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'GEL',
                    code: [ 54 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 57, 48, 54, 45, 46 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2 ],
                        Líneas: [ 48, 57, 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'EAU DE TOILETTE',
                    code: [ 50 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 49, 58, 44, 53, 46, 55, 54, 45, 50, 59, 52, 61 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 45, 54, 50, 59, 47, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'CHAMPU',
                    code: [ 15 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 48, 57, 45, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2 ],
                        Líneas: [ 48, 57, 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'MAQUILLAJE FACIAL',
                    code: [ 60 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'ESMALTE DE UÑAS',
                    code: [ 61 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 54, 45 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'BORLAS Y BROCHAS',
                    code: [ 62 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'VELAS',
                    code: [ 64 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 56, 47, 44, 53, 46, 50, 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'EAU DE COLOGNE',
                    code: [ 58 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 44, 53, 50, 59, 52, 61 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'CREMA MANOS',
                    code: [ 11 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 57, 48, 45, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2 ],
                        Líneas: [ 48, 57, 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'LOCION CORPORAL',
                    code: [ 55 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 51, 60 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 3 ],
                        Líneas: [ 51, 60 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'GEL COSMÉTICO',
                    code: [ 1 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 57, 48, 45, 46, 54, 51, 60 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 48, 57, 45, 54, 51, 60 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'MAQUILL.LABIOS',
                    code: [ 59 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 54, 45, 46 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PLASTICOS',
                    code: [ 71 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 55, 46 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'CREMA HIDRATANTE',
                    code: [ 9 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 4,
                Sección: null,
                Líneas: null
            },
            description: 'Hogar',
            header: true,
            display: true,
            code: '4',
            children: [
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANAS/FUNDAS',
                    code: [ 1 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOMBRAS BAÑO',
                    code: [ 15 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'UNIFORMES',
                    code: [ 87 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1414, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOBILIARIO NIÑO',
                    code: [ 80 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1577 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DELANTALES',
                    code: [ 27 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295, 1294, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISA/BLUSA',
                    code: [ 62 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAMPARAS',
                    code: [ 47 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1294, 1557, 1568, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CENICEROS/INCIENSA',
                    code: [ 76 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1560 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIO NIÑO/BEB',
                    code: [ 16 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUBRE CANAPE',
                    code: [ 93 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1559, 1295, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'UTENSIL. LIMPIEZA',
                    code: [ 82 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA COJIN',
                    code: [ 8 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1560, 1294, 1559, 1567, 1295, 1568, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHAQUETA',
                    code: [ 58 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ASIENTO',
                    code: [ 73 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1557, 1567, 1568, 1577, 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMINOS DE MESA',
                    code: [ 24 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JUGUETES',
                    code: [ 52 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOP Y OTRAS P.',
                    code: [ 96 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557, 1294, 1414 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS DECORAC',
                    code: [ 43 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1560, 1295, 1559, 1567, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VELA',
                    code: [ 65 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1295, 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS BAÑO',
                    code: [ 44 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568, 1559, 1567, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VESTIDO',
                    code: [ 63 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELLENO',
                    code: [ 10 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1294, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CERILLAS',
                    code: [ 86 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ROPA',
                    code: [ 7 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COJIN',
                    code: [ 9 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1560, 1557, 1577, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BANDEJAS',
                    code: [ 40 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1560, 1559, 1557, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS MESA*',
                    code: [ 53 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559, 1295, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1577 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLETEROS',
                    code: [ 39 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295, 1559, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLCHAS',
                    code: [ 6 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1559, 1567, 1295, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TIRADORES',
                    code: [ 48 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1295, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1560, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAÑOLETA/CHAL',
                    code: [ 59 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA EDREDON',
                    code: [ 88 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1295, 1294, 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PREPARACION LAVADO',
                    code: [ 83 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TEXTIL COCINA',
                    code: [ 23 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUBIERTOS',
                    code: [ 36 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1567, 1295, 1559, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PERCHAS',
                    code: [ 18 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1568, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LIBRERIA',
                    code: [ 54 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1294, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOALLAS',
                    code: [ 92 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294, 1295, 1557, 1577, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAJAS Y JOYEROS',
                    code: [ 79 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1560, 1294, 1559, 1567, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTAS',
                    code: [ 4 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1294, 1295, 1567, 1577, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ELECTRODOMESTICOS',
                    code: [ 61 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1577 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSAS Y MOCHILAS',
                    code: [ 19 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SEMILLAS',
                    code: [ 2 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559, 1557, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JERSEY',
                    code: [ 78 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TRAPOS DE COCINA',
                    code: [ 26 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1557, 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JARRONES',
                    code: [ 46 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PROTEC COLCH-ALMOH',
                    code: [ 11 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC. NO TEXTIL',
                    code: [ 27 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295, 1294, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PANTALON',
                    code: [ 95 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS COCINA',
                    code: [ 41 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559, 1294, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ROPA NIÑO/BEBE',
                    code: [ 12 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CD S',
                    code: [ 85 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTELERIA',
                    code: [ 21 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1577, 1295, 1557, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'POSAVASOS/SALVAMAN',
                    code: [ 25 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295, 1559, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALZAPAÑOS',
                    code: [ 33 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPELERIA',
                    code: [ 55 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1560, 1294, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLETAS',
                    code: [ 22 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577, 1559, 1557, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLGADORES',
                    code: [ 74 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1567, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VELA AROMATICA',
                    code: [ 71 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PRENDAS BAÑO',
                    code: [ 31 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1557, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOMBRAS',
                    code: [ 29 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1294, 1557, 1577, 1295, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COSMETICA',
                    code: [ 64 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1577 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALARMAS',
                    code: [ 34 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS NAVIDAD',
                    code: [ 60 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1559, 1294, 1567, 1557, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS MESA',
                    code: [ 42 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559, 1294, 1557, 1560 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANA BAJERA',
                    code: [ 90 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MESAS',
                    code: [ 72 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1567, 1294, 1577, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA ALMOHADA',
                    code: [ 91 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1295, 1294, 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE',
                    code: [ 37 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1567, 1295, 1559, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MARCOS FOTOS',
                    code: [ 45 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1294, 1557, 1295, 1559, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PRENDAS BEBE',
                    code: [ 70 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AMBIENTADOR',
                    code: [ 67 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INCIENSO',
                    code: [ 68 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BERMUDAS/SHORTS',
                    code: [ 69 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOBILIARIO',
                    code: [ 77 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1568, 1560, 1577, 1559, 1567, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELOJES',
                    code: [ 84 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALBORNOZ/BATA',
                    code: [ 99 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1557, 1294, 1295, 1577, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS JARDIN',
                    code: [ 3 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FALDA',
                    code: [ 56 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISETA',
                    code: [ 94 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISON/PIJAMA',
                    code: [ 97 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INTERIORES',
                    code: [ 66 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC. TEXTIL',
                    code: [ 17 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'EDREDON',
                    code: [ 5 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1567, 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TEXTIL BAÑO',
                    code: [ 13 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1577 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CESTAS',
                    code: [ 49 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1568, 1294, 1557, 1559, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS COCINA*',
                    code: [ 50 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CRISTALERIA',
                    code: [ 38 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557, 1295, 1560, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CORTINA',
                    code: [ 32 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1560, 1568, 1557, 1567, 1295, 1577, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSA OLOR ARMARIO',
                    code: [ 20 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567, 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VAJILLAS',
                    code: [ 35 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1295, 1560, 1577, 1557, 1559 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1294, 1295, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCES PARA GUARDAR',
                    code: [ 57 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1568 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANOPLAS COCINA',
                    code: [ 28 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FAROLILLOS',
                    code: [ 75 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANAS',
                    code: [ 89 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1295, 1559, 1567, 1294 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TEXTIL VARIOS',
                    code: [ 14 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557, 1567, 1559, 1568, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1294, 1295, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ESPEJOS',
                    code: [ 81 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1557, 1567, 1577 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1577, 1557 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PORTAVELAS',
                    code: [ 98 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1560, 1567, 1295 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PELUCHE',
                    code: [ 51 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568, 1560 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1294 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLCHON',
                    code: [ 30 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ]
                    }
                }
            ]
        }
    ],
    subfamily: [
        {
            parents: {
                Producto: 0,
                Sección: null,
                Líneas: null,
                Familia: null
            },
            description: 'Ropa',
            header: true,
            display: true,
            code: '0',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*PANTALON',
                    code: [ 201 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [
                        486,
                        1194,
                        35,
                        1196,
                        36000016,
                        14,
                        1195,
                        12,
                        1193,
                        546,
                        306,
                        33,
                        36000001,
                        36,
                        17,
                        566
                    ],
                    family: [ 1, 99 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 1, 99 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* PINKY',
                    code: [ 253 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*SOBRECAMISA',
                    code: [ 236 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 546, 486 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CAMISA',
                    code: [ 720 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38, 2799, 1657, 35000001, 35000016, 39 ],
                    family: [ 4, 54, 52, 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 52, 4, 54, 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'SUJETADOR',
                    code: [ 165 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 41 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 41 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-P.EXTERIOR',
                    code: [ 845 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1908, 3325, 35000001, 39, 2799, 35000016, 1657 ],
                    family: [ 6, 57, 7, 31, 56, 5, 55, 8, 59, 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 35000001, 12300001, 35000016, 2799, 1657, 1908, 39 ],
                        Familia: [ 57, 8, 6, 7, 59, 5, 11, 31, 55, 56 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'T.P-EXTER.CORTA',
                    code: [ 642 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25 ],
                    family: [ 56, 6, 7, 59, 5, 8, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 8, 6, 7, 59, 5, 31, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F PANTALON',
                    code: [ 301 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [
                        1193,
                        1195,
                        1194,
                        1534,
                        1196,
                        36000001,
                        36000016,
                        546,
                        1535,
                        17,
                        486,
                        12,
                        33,
                        35,
                        14,
                        566,
                        306
                    ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PANT.PIJ. CON B',
                    code: [ 164 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-PANT.DENIM',
                    code: [ 801 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3325, 1908, 39, 2799, 1657 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 2799, 1657, 1908, 39 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*POLO',
                    code: [ 230 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 35, 14, 17, 566 ],
                    family: [ 27, 99 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 14, 35 ],
                        Familia: [ 27, 99 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*BERM DENIM',
                    code: [ 208 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BY-O CTA.C/VTO',
                    code: [ 880 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 1910, 3330 ],
                    family: [ 71 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MINI P.EXTERIOR',
                    code: [ 888 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 40 ],
                    family: [ 65, 76 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ],
                        Familia: [ 76, 65 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ST. FALDA',
                    code: [ 489 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 11000001 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B BLASIER/CONJ',
                    code: [ 340 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.CAMISA',
                    code: [ 550 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 24, 2 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ACCESORIOS',
                    code: [ 152 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 16 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 16 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAMISETA',
                    code: [ 233 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 35, 14, 546, 36000001, 486, 36000016, 17, 36, 306, 566, 1535, 1534 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36, 486, 546, 1534, 1535, 14, 35 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BODY CON BOLSA',
                    code: [ 157 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 17 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'W.P-EXT.CORTA',
                    code: [ 510 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 11000001, 1253, 7 ],
                    family: [ 6, 8, 7, 31, 5, 9 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 8, 6, 7, 9, 5, 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Z-BUFANDAS',
                    code: [ 418 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26, 11000001, 23 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PETO RESTO',
                    code: [ 870 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1910, 40, 3329 ],
                    family: [ 84 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 84 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NIÑO-FUNDAS',
                    code: [ 982 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2799 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2799, 1657 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NÑA-COMPLEMENTO',
                    code: [ 988 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 38, 3334, 2799, 1657, 39, 2671, 35000001 ],
                    family: [ 16, 45, 35, 8, 18, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 3334, 1267, 43, 35000001, 12300001, 35000016, 2799, 1657, 39, 38 ],
                        Familia: [ 8, 16, 45, 18, 26, 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CAZADORA',
                    code: [ 324 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1196, 1194, 486, 1195, 546, 1193 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 1194, 1196 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A CTA M/C',
                    code: [ 862 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1909, 3328, 40 ],
                    family: [ 71, 66 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 40 ],
                        Familia: [ 66, 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A FALDA REST',
                    code: [ 854 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 1909, 40 ],
                    family: [ 63 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 63 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* BAÑO',
                    code: [ 254 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CHAQ/PARKA',
                    code: [ 327 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1196, 36000016, 1195, 1194, 306, 546, 486, 36000001, 12, 33, 36 ],
                    family: [ 8, 55, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            12,
                            33,
                            1194,
                            1196
                        ],
                        Familia: [ 8, 6, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAMISA DENIM',
                    code: [ 215 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 546, 486, 33, 12 ],
                    family: [ 4, 10 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546, 12, 33 ],
                        Familia: [ 10, 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CALCETIN',
                    code: [ 972 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 3334, 1267, 2671, 35000016, 2799, 1657, 35000001 ],
                    family: [ 13, 36 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 3334, 1267, 43, 35000001, 12300001, 35000016, 2799, 1657, 38 ],
                        Familia: [ 13, 36 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.FALDA',
                    code: [ 502 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 1253, 11000001 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-PUNTO',
                    code: [ 825 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3124, 35000001, 2799, 1657, 35000016 ],
                    family: [ 10, 7, 9, 1, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3124, 35000001, 12300001, 35000016, 2799, 1657, 39 ],
                        Familia: [ 1, 10, 7, 9, 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.FALDA',
                    code: [ 634 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 25, 3 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CALZADO',
                    code: [ 161 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 46 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 46 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-INTERIORES',
                    code: [ 944 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40 ],
                    family: [ 72, 89 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 72, 89 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*BERMUDA',
                    code: [ 207 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 14, 1194, 546, 35, 1196, 12, 486, 36, 1195, 1193, 33, 306, 36000001, 36000016, 1535 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-BILLETEROS',
                    code: [ 415 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 29 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 29 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.BLASIER',
                    code: [ 640 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* GUANTES',
                    code: [ 248 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F PANTALON/CONJ',
                    code: [ 343 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195, 1534, 36000001, 36000016, 1535 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 1193, 1195, 1534, 1535 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-PIJAMA',
                    code: [ 945 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40 ],
                    family: [ 85 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 85 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO PANTALON',
                    code: [ 681 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PANT PANA',
                    code: [ 867 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1910, 3329, 40 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.SUDADERA FANT',
                    code: [ 598 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 60, 10 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 10, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'T.CAMISA PAQUET',
                    code: [ 639 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3 ],
                    family: [ 4, 59 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 4, 59 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.VESTIDO',
                    code: [ 548 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 24, 2 ],
                    family: [ 2, 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 4, 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'MONO',
                    code: [ 169 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 39 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NO-PROMO',
                    code: [ 800 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2799 ],
                    family: [ 30 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2799, 1657 ],
                        Familia: [ 30 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO CHAQUETA',
                    code: [ 578, 685 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 9 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 9 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CINTURON',
                    code: [ 986 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3335, 1267, 2799, 1657 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 2799, 1657, 39 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CAMISA DENIM',
                    code: [ 314 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 486, 546, 3 ],
                    family: [ 4, 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 486, 546, 3, 25 ],
                        Familia: [ 4, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O BERM.DENIM',
                    code: [ 871 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 3329, 1910 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'SUJ. BASIC',
                    code: [ 156 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 41 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 41 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAZAD. DENIM',
                    code: [ 227 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546, 36000001, 36000016 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 486, 546 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-PANT.PANA',
                    code: [ 802 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 1908, 3325, 1657, 2799 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 2799, 1657, 1908, 39 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CAMISA',
                    code: [ 210 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1196, 1193, 1195, 1194, 546, 486, 566, 17 ],
                    family: [ 4, 99 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 1194, 1196 ],
                        Familia: [ 4, 99 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MINI CONFECCION',
                    code: [ 885 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 40 ],
                    family: [ 84, 62, 64, 76, 86, 80, 61, 79 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ],
                        Familia: [ 80, 62, 76, 84, 86, 64, 79, 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-LEOTARDOS',
                    code: [ 950 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 1267, 40 ],
                    family: [ 90 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 90 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Z-BAÑO-BIKINI',
                    code: [ 436 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BRAGA CON BOLSA',
                    code: [ 158 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 40 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.BERMUDA',
                    code: [ 530 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 1253, 11000001 ],
                    family: [ 20, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 34, 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO CHALECO',
                    code: [ 688 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-INTERIORES',
                    code: [ 966 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3335, 39 ],
                    family: [ 12 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 39 ],
                        Familia: [ 12 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.BLASIER',
                    code: [ 508 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 7, 1253, 11000001, 29 ],
                    family: [ 5, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 6, 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'W.P-EXT.LARGA',
                    code: [ 511, 3744 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 1253, 11000001 ],
                    family: [ 7, 6, 8, 5, 31, 9, 55 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 8, 6, 7, 9, 5, 31, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PUNTO',
                    code: [ 878 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 3333, 1266 ],
                    family: [ 70, 61, 69, 84, 67, 80, 68 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3333, 41, 1266, 40 ],
                        Familia: [ 80, 67, 84, 70, 61, 69, 68 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CTAS.BASICAS',
                    code: [ 584 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1073, 29, 1133 ],
                    family: [ 11, 52, 1, 60, 2, 17, 3, 10, 4, 9, 99, 39, 54 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 1073 ],
                        Familia: [ 1, 3, 52, 10, 4, 9, 39, 60, 54, 99, 2, 11, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A BERM DENIM',
                    code: [ 851 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 1909, 40 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.PANT.PAQUETER',
                    code: [ 501 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 11000001, 29 ],
                    family: [ 1, 34, 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23 ],
                        Familia: [ 1, 34, 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O P.EXTERIOR',
                    code: [ 883 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1910, 3329, 40 ],
                    family: [ 65, 67, 68, 69 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 67, 65, 69, 68 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'T.FALDA PAQUET.',
                    code: [ 635 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 1133 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 3, 25 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O BERM.RESTO',
                    code: [ 872 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3329, 1910, 40 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'VEST ZARA PAQ',
                    code: [ 582 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*JERSEY',
                    code: [ 217 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 33, 36000001, 36000016 ],
                    family: [ 10, 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 12, 33 ],
                        Familia: [ 10, 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-BISUTERIA ZA',
                    code: [ 423 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26, 13000001, 1253, 14000001, 11000001, 23 ],
                    family: [ 45 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23, 14000001, 4, 26 ],
                        Familia: [ 45 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* BISUTERIA',
                    code: [ 241 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36, 36000016, 36000001 ],
                    family: [ 45 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 45 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C. BODY',
                    code: [ 607 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 17 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PETO DENIM',
                    code: [ 869 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3329, 40, 1910 ],
                    family: [ 84 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 84 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-FALD.DENIM',
                    code: [ 710 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38 ],
                    family: [ 3, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 38 ],
                        Familia: [ 3, 34 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PANT.RESTO',
                    code: [ 848 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 1909 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO LEGGINGS',
                    code: [ 692 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 58 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A FALDA DEN.',
                    code: [ 853 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 1909, 40 ],
                    family: [ 63 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 63 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-BAÑO',
                    code: [ 962 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3335, 39, 2799 ],
                    family: [ 37, 32 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 2799, 1657, 39 ],
                        Familia: [ 37, 32 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B BERMUDA',
                    code: [ 306 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1196, 1195, 1194, 1193 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 1194, 1196 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A CTA.C/VTO',
                    code: [ 860 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1909, 3328, 40 ],
                    family: [ 71 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 40 ],
                        Familia: [ 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CAMISA',
                    code: [ 820 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3325, 39, 35000001, 1908, 2799, 35000016, 1657 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 35000001, 12300001, 35000016, 2799, 1657, 1908, 39 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PUNTO BASICO',
                    code: [ 579 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 27, 5 ],
                    family: [ 10, 9, 52, 1, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 1, 52, 10, 9, 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ST complementos',
                    code: [ 626 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1253 ],
                    family: [ 16 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 13000001, 1253 ],
                        Familia: [ 16 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'W.FALDA PAQUET.',
                    code: [ 503 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1, 23 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'TOP PIJ.CON B',
                    code: [ 166 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NIÑA-PIJAMAS',
                    code: [ 968 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 1267, 38 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CTA.C/VTO',
                    code: [ 840 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3326, 1908 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3326, 1908, 39 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CTA.M/LARG',
                    code: [ 841 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3326, 1908, 35000016, 35000001 ],
                    family: [ 11, 27, 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 3326, 1908, 39 ],
                        Familia: [ 27, 52, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* SOMBRERO',
                    code: [ 242 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36000001, 36, 36000016, 1535 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36, 1534, 1535 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* CINTURON',
                    code: [ 251 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36, 36000016, 36000001 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-GAFAS DE SOL',
                    code: [ 422, 432 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4 ],
                    family: [ 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 33 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A VEST.RESTO',
                    code: [ 856 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 1909 ],
                    family: [ 62, 63 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 62, 63 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*SOBRECAMISA',
                    code: [ 237, 347 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1193, 546, 12, 486, 35, 14, 1195, 1196, 33 ],
                    family: [ 59, 60 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 12, 33, 14, 35, 1194, 1196 ],
                        Familia: [ 59, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CTAS COLGADAS Z',
                    code: [ 507 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 7, 11000001, 1133 ],
                    family: [ 11, 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 11000001, 12000001 ],
                        Familia: [ 52, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-GORROS',
                    code: [ 420 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4, 11000001, 23 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-BUFANDA',
                    code: [ 956 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 39, 1267, 2799, 1657 ],
                    family: [ 26, 18 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 2799, 1657, 39 ],
                        Familia: [ 18, 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CTA.M/CORT',
                    code: [ 842 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3326, 1908, 35000001, 2799, 1657, 35000016 ],
                    family: [ 11, 27 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 3326, 2799, 1657, 1908, 39 ],
                        Familia: [ 27, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*BERM DENIM',
                    code: [ 209 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 546, 486 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O CTA M/C',
                    code: [ 882 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 1910, 40 ],
                    family: [ 71, 66 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 66, 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* CALZONCILLO',
                    code: [ 245 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306, 36000001, 36000016 ],
                    family: [ 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 40 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ST. VESTIDO',
                    code: [ 486 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 11000001 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'TOP PIJAMA',
                    code: [ 154 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A VEST.DENIM',
                    code: [ 855 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 1909, 40 ],
                    family: [ 62, 63, 84 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 62, 84, 63 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B BLASIER',
                    code: [ 322 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1196, 14, 1193, 1195, 35 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 14, 35, 1194, 1196 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO JERSEY',
                    code: [ 686, 580 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5, 27, 11000001, 23, 1253 ],
                    family: [ 10, 2, 43, 3, 1, 9, 52, 39, 60, 7, 17, 31, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 5, 27, 13000001, 1253, 1, 23 ],
                        Familia: [ 1, 3, 52, 43, 6, 10, 7, 9, 39, 60, 2, 31, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CAZAD. DENIM',
                    code: [ 226 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*SUDADERA',
                    code: [ 234 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 35, 14, 17, 566 ],
                    family: [ 60 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 14, 35 ],
                        Familia: [ 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.VESTIDO BASIC',
                    code: [ 591 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.VESTIDO FANTA',
                    code: [ 594 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*P.DENIM',
                    code: [ 203 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 1196, 546, 1194, 17, 36000001, 36000016, 566 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 486, 546, 1194, 1196 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'PIEL',
                    code: [ 330 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1196, 1195, 1193, 486, 546, 36000016, 1534, 36000001, 1535 ],
                    family: [ 6, 55, 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            1194,
                            1196
                        ],
                        Familia: [ 6, 7, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CAMISA DENIM',
                    code: [ 315 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546, 1194, 1196 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546, 1194, 1196 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-PUNTO',
                    code: [ 725 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1266, 3331, 38, 35000001, 39, 1657, 2799, 35000016 ],
                    family: [ 10, 9, 1, 31, 3, 39, 7, 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 41, 1266, 3331, 2799, 1657, 39, 38 ],
                        Familia: [ 1, 3, 10, 7, 9, 39, 2, 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MINI PUNTO',
                    code: [ 887 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 40 ],
                    family: [ 61, 70, 69, 86, 74, 84, 79 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ],
                        Familia: [ 84, 70, 86, 79, 61, 69, 74 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CAMISA',
                    code: [ 311 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1195, 1193, 1194, 1196, 1534, 486, 36000016, 1535, 546, 306, 14, 36000001, 36, 35 ],
                    family: [ 4, 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 4, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-FALD.RESTO',
                    code: [ 712 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2670, 1657, 35000016, 2799, 35000001, 39 ],
                    family: [ 3, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 3, 34 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.P-EXTER.LARGA',
                    code: [ 643 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25 ],
                    family: [ 7, 56, 59, 6, 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 6, 7, 59, 5, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '*CHALECO',
                    code: [ 222 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 486, 33, 546 ],
                    family: [ 30, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546, 12, 33 ],
                        Familia: [ 31, 30 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-PARAGUAS',
                    code: [ 421 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 28 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 28 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.PTON-LEGGING',
                    code: [ 601 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 1, 43, 58, 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 1, 58, 43, 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NÑO-COMPLEMENTO',
                    code: [ 990 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3335, 1267, 1657, 3327, 2799, 35000001 ],
                    family: [ 16, 24, 23, 35, 45 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 35000001, 12300001, 35000016, 3335, 3327, 2799, 1657, 39 ],
                        Familia: [ 16, 24, 45, 23, 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* PIJAMAS',
                    code: [ 255 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-VESTIDO',
                    code: [ 715 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38, 39, 2799, 35000001, 1657, 35000016 ],
                    family: [ 2, 34, 39, 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 3, 39, 34, 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NA-LEOTARDO',
                    code: [ 973 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 1267, 38 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO TOPS Y OT',
                    code: [ 691 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PANT.PANA',
                    code: [ 847 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 1909, 3327 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-CALCETIN',
                    code: [ 946 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    family: [ 73 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 73 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CHAQ/PARKA',
                    code: [ 326 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 1194, 1195, 1196, 546, 1193 ],
                    family: [ 55, 8 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 1194, 1196 ],
                        Familia: [ 8, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-GUANTES',
                    code: [ 948 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267 ],
                    family: [ 81 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 81 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BY-A BERM.RESTO',
                    code: [ 852 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1909, 3327, 40 ],
                    family: [ 80, 63 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 80, 63 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B ABRIGO',
                    code: [ 328 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195 ],
                    family: [ 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195 ],
                        Familia: [ 7 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CAMISA DENIM',
                    code: [ 214 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'COMPL ROPA CONF',
                    code: [ 440 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.PANTALON',
                    code: [ 544 ],
                    display: true,
                    section: [ 1, 3 ],
                    product_line: [ 2, 24, 7, 1133, 2670, 1908, 1909 ],
                    family: [ 1, 39, 58, 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 3 ],
                        Líneas: [ 2, 24, 1133, 1909, 2670, 1908 ],
                        Familia: [ 1, 58, 39, 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CHAQUETA',
                    code: [ 221 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 14, 33, 36000001, 35, 36000016 ],
                    family: [ 9, 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 12, 33, 14, 35 ],
                        Familia: [ 9, 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A P.EXTERIOR',
                    code: [ 863 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 1909 ],
                    family: [ 65, 68, 67, 69 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 67, 65, 69, 68 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CHALECO',
                    code: [ 321 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 546, 1193, 12, 1196, 486, 1195, 33, 36000016, 36000001 ],
                    family: [ 31, 30 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 1193, 1195, 486, 546, 12, 33, 1194, 1196 ],
                        Familia: [ 31, 30 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'A-M*CAZAD/CHALE',
                    code: [ 223 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1196 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1194, 1196 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-PANT.RESTO',
                    code: [ 803 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3325, 39, 1908, 35000001, 35000016, 1657, 2799 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 35000001, 12300001, 35000016, 2799, 1657, 1908, 39 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.BERMUDA',
                    code: [ 662 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25, 27 ],
                    family: [ 20, 43 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27, 3, 25 ],
                        Familia: [ 43, 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A FELPA',
                    code: [ 859 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3328, 1909, 40 ],
                    family: [ 62, 93, 61, 70, 69, 75, 80, 63, 83 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 40 ],
                        Familia: [ 80, 62, 93, 70, 63, 75, 83, 61, 69 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-P.EXTERIOR',
                    code: [ 745 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2670, 35000001, 2799, 39, 1657, 2671, 35000016 ],
                    family: [ 7, 57, 6, 56, 31, 55, 5, 8, 9, 60, 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 57, 8, 6, 7, 9, 60, 5, 2, 31, 55, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-BAÑO',
                    code: [ 943 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    family: [ 77 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 77 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.SUDADERA BASI',
                    code: [ 596 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 60, 10 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 10, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BATA CON BOLSA',
                    code: [ 159 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 40, 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 40, 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'T.VESTID.PAQUET',
                    code: [ 637 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 1133 ],
                    family: [ 2, 39, 59 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 3, 25 ],
                        Familia: [ 39, 59, 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BY-O CTA. M/L',
                    code: [ 881 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 1910, 40 ],
                    family: [ 71, 66 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 66, 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-BAÑO',
                    code: [ 960 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3334, 38, 2799, 2671, 1657 ],
                    family: [ 37, 32, 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 3334, 1267, 43, 2799, 1657, 38 ],
                        Familia: [ 52, 37, 32 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CTA.M/LARG',
                    code: [ 741 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2671, 35000016, 35000001, 39 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 35000001, 12300001, 35000016, 39, 38 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CTA.C/VTO',
                    code: [ 740 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2671, 38 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 38 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-BERM.DENIM',
                    code: [ 705 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38 ],
                    family: [ 20, 34, 3, 2, 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 38 ],
                        Familia: [ 1, 3, 34, 2, 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.BERMUDA',
                    code: [ 574 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2, 24 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAMISA',
                    code: [ 211 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1195, 1193, 486, 1196, 1194, 546, 36000016, 36000001 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 1193, 1195, 486, 546, 1194, 1196 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F BLASIER/CONJ',
                    code: [ 342 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195, 1535, 36000016, 1534, 36000001 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 1193, 1195, 1534, 1535 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.CAMISA',
                    code: [ 638, 1935 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 25, 3 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.VESTIDO',
                    code: [ 504 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 1253, 23, 11000001, 1133 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PANT. PIJAMA',
                    code: [ 155 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NIÑA-GAFAS SOL',
                    code: [ 951 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3334, 38, 2799 ],
                    family: [ 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 2799, 1657, 38 ],
                        Familia: [ 33 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*JERSEY M/C',
                    code: [ 218 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 33 ],
                    family: [ 10 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12, 33 ],
                        Familia: [ 10 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CHAQUETA/SUD',
                    code: [ 153 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 9 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 9 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'SUJE CON B',
                    code: [ 156 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 41 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 41 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'VEST. CON BOLSA',
                    code: [ 167 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'UNIFORMES ZARA',
                    code: [ 999, 199 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 7, 29 ],
                    family: [ 99, 11, 1, 8, 4, 6, 5, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Familia: [ 1, 8, 6, 4, 5, 99, 11, 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* CALCETIN',
                    code: [ 252 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306, 36000001, 36000016 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.PANTALON',
                    code: [ 500 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 11000001, 7, 1253 ],
                    family: [ 1, 39, 34, 99 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 1, 39, 34, 99 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'COMPL ROPA PAQ',
                    code: [ 439 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-BUFANDA',
                    code: [ 955 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 38, 3334, 2799, 35000016, 35000001 ],
                    family: [ 18, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 35000001, 12300001, 35000016, 2799, 1657, 38 ],
                        Familia: [ 18, 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*BERMUDA',
                    code: [ 206 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 14, 1196, 1194, 486, 35, 1193, 1195, 546, 33, 12 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 12, 33, 14, 35, 1194, 1196 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CHALECO/CONJ',
                    code: [ 344 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1195, 1193 ],
                    family: [ 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195 ],
                        Familia: [ 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* GORRA',
                    code: [ 243 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36, 36000001, 36000016 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-FALD.PANA',
                    code: [ 711 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38, 2799 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 2799, 1657, 38 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CTA.M/CORT',
                    code: [ 742 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2671, 35000016, 39, 35000001, 1657 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 35000001, 12300001, 35000016, 2799, 1657, 39, 38 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C. ABRIGO',
                    code: [ 605 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 7, 9, 6, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 6, 7, 9, 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-PAÑUELOS',
                    code: [ 417 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4, 11000001 ],
                    family: [ 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 4, 26 ],
                        Familia: [ 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.VESTIDO',
                    code: [ 314, 636 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 486, 3, 25, 1133, 546 ],
                    family: [ 4, 2, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 486, 546, 1133, 3, 25 ],
                        Familia: [ 4, 39, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.CHALECO',
                    code: [ 560 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2, 24 ],
                    family: [ 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.FALDA',
                    code: [ 546 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2, 24 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-INTERIORES',
                    code: [ 964 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 1267, 38 ],
                    family: [ 12 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 12 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-PANT.RESTO',
                    code: [ 703 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 35000001, 38, 39, 1657, 35000016, 2799 ],
                    family: [ 1, 2, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 1, 34, 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'B.FALDA PAQUET.',
                    code: [ 547 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CAZADORA',
                    code: [ 325 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [
                        1196,
                        1194,
                        486,
                        12,
                        14,
                        546,
                        1195,
                        35,
                        1193,
                        36000016,
                        36000001,
                        1535,
                        306,
                        1534,
                        36,
                        33
                    ],
                    family: [ 6, 60 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 6, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'MUESTRA CRO',
                    code: [ 102 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 7 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CAMISETA',
                    code: [ 170 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-CINTURON',
                    code: [ 984 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 38, 1267, 2799, 35000001, 35000016 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 35000001, 12300001, 35000016, 2799, 1657, 38 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CAMISETA',
                    code: [ 232 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 35, 14, 17, 566 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 14, 35 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CTAS TRF',
                    code: [ 672 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1074, 1133, 29 ],
                    family: [ 1, 11, 60, 3, 2, 52, 9, 39, 17, 43, 7, 58, 10, 4, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 1074 ],
                        Familia: [ 1, 58, 3, 52, 43, 6, 10, 4, 7, 9, 39, 60, 2, 11, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CAMISA M/C',
                    code: [ 212 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 14, 35 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 14, 35 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BBY-COMPLEMENTO',
                    code: [ 949 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    family: [ 76, 82 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 76, 82 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* GAFAS',
                    code: [ 256 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36, 36000001, 36000016 ],
                    family: [ 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 33 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO VESTIDO',
                    code: [ 682 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-GUANTES',
                    code: [ 419 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B PANTALON/CONJ',
                    code: [ 341 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C. MONO',
                    code: [ 602 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-FELPA',
                    code: [ 730 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2671, 38, 35000001 ],
                    family: [ 58, 3, 2, 60, 10, 20, 1, 34, 6, 19, 9, 17, 31, 39, 5, 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 35000001, 12300001, 35000016, 38 ],
                        Familia: [ 1, 58, 3, 6, 19, 10, 7, 9, 39, 60, 34, 5, 2, 20, 31, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-GORRO',
                    code: [ 953 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 38, 1267, 2799, 1657, 39 ],
                    family: [ 35, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 2799, 1657, 39, 38 ],
                        Familia: [ 26, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO MONO',
                    code: [ 689 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A CTA M/L',
                    code: [ 861 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3328, 40, 1909 ],
                    family: [ 71, 66 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3328, 1909, 40 ],
                        Familia: [ 66, 71 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'A-*COMPLEMENT',
                    code: [ 288 ],
                    display: true,
                    section: [ 1, 2 ],
                    product_line: [ 4, 26, 11000001, 306, 36 ],
                    family: [ 16, 95, 45, 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 306, 36, 11000001, 12000001, 4, 26 ],
                        Familia: [ 95, 16, 33, 45 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.CAMISA',
                    code: [ 506 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 1253, 7, 11000001, 29, 5 ],
                    family: [ 4, 2, 11, 54, 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 5, 27, 13000001, 1253, 1, 23 ],
                        Familia: [ 52, 4, 54, 2, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B PANTALON',
                    code: [ 300 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195, 1196, 1194, 1534, 1535 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 1534, 1535, 1194, 1196 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'UNIFORME',
                    code: [ 993, 399 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 17, 566, 7 ],
                    family: [ 99, 5, 4, 1, 11, 27 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Familia: [ 1, 27, 4, 5, 99, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-MEDIAS',
                    code: [ 435 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B SOBRECAMISA',
                    code: [ 346 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1196, 1195, 1194 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 1194, 1196 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CAMISA M/C',
                    code: [ 313 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 1196, 1194, 1195, 1193, 546, 1535, 36000016, 36000001, 1534, 36, 306 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            1194,
                            1196
                        ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-BERM.RESTO',
                    code: [ 807 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3325, 39, 1908, 35000001, 2799, 1657, 35000016 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 35000001, 12300001, 35000016, 2799, 1657, 1908, 39 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'VESTIDO',
                    code: [ 150 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-CALCETIN',
                    code: [ 974 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3335, 39, 35000001, 2799, 1657 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 35000001, 12300001, 35000016, 3335, 2799, 1657, 39 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PANT.DENIM',
                    code: [ 866 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1910, 3329, 40 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* COMPLEMENTO',
                    code: [ 240 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36 ],
                    family: [ 18, 14, 38, 23, 28 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 14, 38, 23, 18, 28 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'CALCETINES',
                    code: [ 434 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26, 11000001, 23 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O FELPA',
                    code: [ 879 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 1910, 40 ],
                    family: [ 75, 80, 61, 70, 83, 68 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 80, 70, 75, 83, 61, 68 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO FALDA',
                    code: [ 683 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O PANT.RESTO',
                    code: [ 868 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3329, 40, 1910 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.CTAS BASICAS',
                    code: [ 589 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 11, 52 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 52, 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CALCETIN/MEDIAS',
                    code: [ 151 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-FELPA',
                    code: [ 830 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3326, 39, 1908, 35000001, 35000016, 2799, 1657 ],
                    family: [ 10, 20, 1, 19, 9, 60, 6, 31, 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 3326, 2799, 1657, 1908, 39 ],
                        Familia: [ 1, 6, 19, 10, 9, 60, 5, 20, 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'B.P-EXTER.CORTA',
                    code: [ 554 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 24, 2 ],
                    family: [ 8, 6, 7, 56, 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 8, 6, 7, 5, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PETO DENIM',
                    code: [ 849 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 1909 ],
                    family: [ 84, 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 84, 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*PANTALON',
                    code: [ 200 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1193, 546, 14, 1196, 486, 35, 1195, 36, 306 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36, 1193, 1195, 486, 546, 14, 35, 1194, 1196 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* GORRO PUNTO',
                    code: [ 244 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306, 36000001, 36000016 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.CHALECO',
                    code: [ 648 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 25, 3 ],
                    family: [ 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CHALECO',
                    code: [ 320 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 1196, 1194, 1195, 546, 1193, 33, 12 ],
                    family: [ 31, 30 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 12, 33, 1194, 1196 ],
                        Familia: [ 31, 30 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NO TIENE OFERTA',
                    code: [ 996 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 7 ],
                    family: [ 11, 99 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Familia: [ 99, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*JERSEY M/C',
                    code: [ 219 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 33, 12, 36000001, 36000016 ],
                    family: [ 10, 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 12, 33 ],
                        Familia: [ 10, 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-GORRO',
                    code: [ 954 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 1267, 3335, 2799, 35000016, 35000001, 1657 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 35000001, 12300001, 35000016, 3335, 2799, 1657, 39 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-CINTURONES',
                    code: [ 416, 429 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4, 11000001, 23 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*CHAQUETA',
                    code: [ 220 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 33 ],
                    family: [ 9 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12, 33 ],
                        Familia: [ 9 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F ABRIGO',
                    code: [ 329 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195, 1196, 36000001, 33, 486, 1194, 1534, 36000016, 546, 35, 1535, 14, 12 ],
                    family: [ 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 7 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'W.CHALECO',
                    code: [ 516 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23, 1, 11000001 ],
                    family: [ 31, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23 ],
                        Familia: [ 6, 31 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-BERM.DENIM',
                    code: [ 805 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3325, 1908, 1657, 2799 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3325, 2799, 1657, 1908, 39 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* FOULARD',
                    code: [ 247 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 36, 306, 36000016, 36000001 ],
                    family: [ 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 26 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F CHALECO/CONJ',
                    code: [ 345 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1195, 1193 ],
                    family: [ 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195 ],
                        Familia: [ 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO ABRIGO',
                    code: [ 684 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 7 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.PANT.PAQUETER',
                    code: [ 545 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2, 24, 5 ],
                    family: [ 1, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24, 5, 27 ],
                        Familia: [ 1, 58 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* BUFANDA',
                    code: [ 246 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36, 36000016, 36000001 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'MUESTRAS SEÑORA',
                    code: [ 101 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 29, 7 ],
                    family: [ 99, 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Familia: [ 1, 99 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-GUANTES',
                    code: [ 957 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 38, 3334 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-PANT.DENIM',
                    code: [ 701 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38 ],
                    family: [ 1, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 38 ],
                        Familia: [ 1, 34 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'B.P-EXTER.LARGA',
                    code: [ 555 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2 ],
                    family: [ 7, 8, 56, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 8, 6, 7, 56 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'CTAS ZARA',
                    code: [ 581 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1073, 11000001, 1133, 1253, 23, 29, 7 ],
                    family: [ 2, 60, 40, 11, 4, 1, 7, 3, 41, 9, 39, 52, 54, 10, 17, 16, 43, 20, 13, 46, 31, 6, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 11000001, 12000001, 13000001, 1253, 1, 23, 1073 ],
                        Familia: [ 1, 13, 16, 58, 3, 52, 43, 41, 6, 10, 4, 7, 9, 40, 39, 60, 54, 46, 2, 20, 11, 31, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B.BLASIER',
                    code: [ 552 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2, 24 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'Z-LEGGING',
                    code: [ 437 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4 ],
                    family: [ 37, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 58, 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NIÑO-PIJAMAS',
                    code: [ 970 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 1267, 39 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 39 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CAMISA',
                    code: [ 310 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1193, 1195, 1194, 1196, 546, 486 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 486, 546, 1194, 1196 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BATA',
                    code: [ 168 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*P.DENIM',
                    code: [ 202 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 546, 1196, 1194 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 486, 546, 1194, 1196 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*SUDADERA',
                    code: [ 235 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 14, 35, 486, 546, 306, 36000016, 36, 36000001 ],
                    family: [ 60 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 306, 36, 486, 546, 14, 35 ],
                        Familia: [ 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO SUDADERA',
                    code: [ 693 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 60 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 60 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F BLASIER',
                    code: [ 323 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [
                        1194,
                        1193,
                        1195,
                        14,
                        35,
                        486,
                        12,
                        1196,
                        546,
                        17,
                        1534,
                        36000001,
                        566,
                        33,
                        1535,
                        36000016
                    ],
                    family: [ 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.PANT.PAQUETER',
                    code: [ 664 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25, 1133 ],
                    family: [ 1, 58, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 3, 25 ],
                        Familia: [ 1, 58, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'Z-STUDIO CONFEC',
                    code: [ 537 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23, 11000001, 1253 ],
                    family: [ 1, 4, 60, 11, 9, 7, 3, 39, 2, 5, 10, 6, 52, 55 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 1, 3, 52, 6, 10, 4, 7, 9, 39, 60, 5, 2, 11, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAZADORA',
                    code: [ 225 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 35, 486, 1194, 546, 14, 1196, 1195, 12, 36000001, 36000016, 1193, 33, 36, 306 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            306,
                            36,
                            1193,
                            1195,
                            486,
                            546,
                            12,
                            33,
                            14,
                            35,
                            1194,
                            1196
                        ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* CORBATAS',
                    code: [ 249 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36 ],
                    family: [ 24 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 24 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BODY',
                    code: [ 160 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 17 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: '* PAJARITAS',
                    code: [ 250 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 306, 36 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 306, 36 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ST. PANTALON',
                    code: [ 487 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 11000001 ],
                    family: [ 1, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001 ],
                        Familia: [ 1, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*POLO',
                    code: [ 231 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 14, 35, 17, 566 ],
                    family: [ 27 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 14, 35 ],
                        Familia: [ 27 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B CAMISA M/C',
                    code: [ 312 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1196, 1195, 1194, 1193, 35, 14 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 1193, 1195, 14, 35, 1194, 1196 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'T.PANTALON',
                    code: [ 632 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25, 1133 ],
                    family: [ 1, 39, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 3, 25 ],
                        Familia: [ 1, 58, 39 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PETO RESTO',
                    code: [ 850 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 3327, 1909 ],
                    family: [ 84, 62 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 62, 84 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'BRAGA',
                    code: [ 163 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 40 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 40 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'NIÑO-GAFAS SOL',
                    code: [ 952 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 1267 ],
                    family: [ 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335 ],
                        Familia: [ 33 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO BODY',
                    code: [ 687 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 17 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-PANT.PANA',
                    code: [ 702 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2670, 38 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 38 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-BERM.RESTO',
                    code: [ 707 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2670, 39, 2799, 1657, 35000001, 35000016 ],
                    family: [ 20, 34, 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 35000001, 12300001, 35000016, 2670, 2799, 1657, 39, 38 ],
                        Familia: [ 3, 34, 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'MINI CIRCULAR',
                    code: [ 886 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3062, 40 ],
                    family: [ 84, 71, 86, 61, 72, 70, 74, 62, 83, 64, 79, 76 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3062, 1873, 40 ],
                        Familia: [ 62, 76, 84, 70, 86, 83, 64, 79, 61, 74, 71, 72 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A CAMISA',
                    code: [ 857 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1909, 40, 3327 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.CTAS FANTASI',
                    code: [ 586 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 11, 52, 54, 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 52, 4, 54, 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C. FALDA',
                    code: [ 604 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 3 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-GUANTES',
                    code: [ 958 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 1267, 39 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 39 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F BERMUDA',
                    code: [ 307 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 1194, 1195, 1534, 1196, 1193, 36000016, 1535, 36000001 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 1193, 1195, 1534, 1535, 1194, 1196 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-O CAMISA',
                    code: [ 877 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3329, 1910, 40 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3329, 40 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-BERM.PANA',
                    code: [ 706 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38, 2670 ],
                    family: [ 20, 3 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2670, 38 ],
                        Familia: [ 3, 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'PUNTO SHORT',
                    code: [ 690 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 5 ],
                    family: [ 43 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27 ],
                        Familia: [ 43 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'ACC. CON BOLSA',
                    code: [ 162 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1637 ],
                    family: [ 16 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1637, 8 ],
                        Familia: [ 16 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-GORRO',
                    code: [ 942 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267, 43 ],
                    family: [ 74 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 74 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PUNTO',
                    code: [ 858 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1266, 40, 3332 ],
                    family: [ 62, 69, 70, 61, 84, 67, 63, 68, 80 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 41, 1266, 3332, 40 ],
                        Familia: [ 80, 62, 67, 84, 70, 63, 61, 69, 68 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 0 ],
                    description: 'C.CTAS POSICIO',
                    code: [ 587 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1133 ],
                    family: [ 11, 52, 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133 ],
                        Familia: [ 52, 4, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BY-A PANT.DENIM',
                    code: [ 846 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3327, 40, 1909 ],
                    family: [ 61, 84 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 84, 61 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'BABY-BUFANDA',
                    code: [ 947 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3336, 40, 1267 ],
                    family: [ 78 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 78 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'B*JERSEY',
                    code: [ 216 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 12, 33 ],
                    family: [ 10 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [ 12, 33 ],
                        Familia: [ 10 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 0 ],
                    description: 'F*CAMISA M/C',
                    code: [ 213 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 486, 1193, 546, 1195, 36000001, 1194, 36000016, 1534, 1196, 1535 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 2 ],
                        Líneas: [
                            12200001,
                            36000001,
                            1353,
                            1354,
                            36000016,
                            1193,
                            1195,
                            486,
                            546,
                            1534,
                            1535,
                            1194,
                            1196
                        ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'A-*COMPLEMENTOS',
                    code: [ 288 ],
                    display: true,
                    section: [ 1, 2 ],
                    product_line: [ 4, 26, 11000001, 306, 36 ],
                    family: [ 16, 95, 45, 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1, 2 ],
                        Líneas: [ 306, 36, 11000001, 12000001, 4, 26 ],
                        Familia: [ 95, 16, 33, 45 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-COMPLEMENT',
                    code: [ 988 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 38, 3334, 2799, 1657, 39, 2671, 35000001 ],
                    family: [ 16, 45, 35, 8, 18, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 2671, 3334, 1267, 43, 35000001, 12300001, 35000016, 2799, 1657, 39, 38 ],
                        Familia: [ 8, 16, 45, 18, 26, 35 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NA-PROMO',
                    code: [ 700 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 40 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'T.PRENDA EXTER.',
                    code: [ 642 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 3, 25 ],
                    family: [ 56, 6, 7, 59, 5, 8, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 8, 6, 7, 59, 5, 31, 56 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-LEOTARDOS',
                    code: [ 973 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 1267, 38 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'CTA.FANTASI.TRF',
                    code: [ 672 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1074, 1133, 29 ],
                    family: [ 1, 11, 60, 3, 2, 52, 9, 39, 17, 43, 7, 58, 10, 4, 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 1074 ],
                        Familia: [ 1, 58, 3, 52, 43, 6, 10, 4, 7, 9, 39, 60, 2, 11, 17 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'T.CAZADORA',
                    code: [ 644 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 25 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BAÑO.',
                    code: [ 437 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26, 4 ],
                    family: [ 37, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 58, 37 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'CTA.FANTASI W-B',
                    code: [ 581 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1073, 11000001, 1133, 1253, 23, 29, 7 ],
                    family: [ 2, 60, 40, 11, 4, 1, 7, 3, 41, 9, 39, 52, 54, 10, 17, 16, 43, 20, 13, 46, 31, 6, 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 11000001, 12000001, 13000001, 1253, 1, 23, 1073 ],
                        Familia: [ 1, 13, 16, 58, 3, 52, 43, 41, 6, 10, 4, 7, 9, 40, 39, 60, 54, 46, 2, 20, 11, 31, 17 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'MEDIA Y LEGGING',
                    code: [ 425 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 26 ],
                    family: [ 58 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 4, 26 ],
                        Familia: [ 58 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BY-O CTA.C/VUEL',
                    code: [ 880 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40, 1910, 3330 ],
                    family: [ 71 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 71 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'M.ALGODON FANT.',
                    code: [ 951 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3334, 38, 2799 ],
                    family: [ 33 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 2799, 1657, 38 ],
                        Familia: [ 33 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NÑA-GOR.BUF.GUA',
                    code: [ 976 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 38 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NÑO-GOR.BUF.GUA',
                    code: [ 978 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39 ],
                    family: [ 35, 26 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 39 ],
                        Familia: [ 26, 35 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BY-A BERM RESTO',
                    code: [ 852 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1909, 3327, 40 ],
                    family: [ 80, 63 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1909, 3327, 40 ],
                        Familia: [ 80, 63 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-PIJAMA',
                    code: [ 970 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3335, 1267, 39 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3335, 39 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BBA-BERM.DENIM',
                    code: [ 755 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 38 ],
                    family: [ 20 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 38 ],
                        Familia: [ 20 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'W.PRENDA EXTER.',
                    code: [ 510 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1, 23, 11000001, 1253, 7 ],
                    family: [ 6, 8, 7, 31, 5, 9 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 13000001, 1253, 1, 23 ],
                        Familia: [ 8, 6, 7, 9, 5, 31 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'CTA. BASICO TRF',
                    code: [ 674 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1074 ],
                    family: [ 11, 1, 17, 10, 2, 60, 39 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1074 ],
                        Familia: [ 1, 10, 39, 60, 2, 11, 17 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'W.CAZADORA',
                    code: [ 512 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1, 23 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'PANTALON VESTIR',
                    code: [ 101 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 29, 7 ],
                    family: [ 99, 1 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Familia: [ 1, 99 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BY-O CTA.M/L',
                    code: [ 881 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3330, 1910, 40 ],
                    family: [ 71, 66 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1910, 3330, 40 ],
                        Familia: [ 66, 71 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'PTO ZARA',
                    code: [ 580 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 27, 5, 23 ],
                    family: [ 2, 10, 43, 3, 1, 9, 52, 39, 60, 7, 17, 31 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 5, 27, 1, 23 ],
                        Familia: [ 1, 3, 52, 43, 10, 7, 9, 39, 60, 2, 31, 17 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'COMPLEMENTOS.',
                    code: [ 416 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 11000001, 26, 23 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'W.ABRIGO',
                    code: [ 514 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23 ],
                    family: [ 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1, 23 ],
                        Familia: [ 7 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NIÑO-COMPLEMENT',
                    code: [ 990 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 39, 3335, 1267, 1657, 3327, 2799, 35000001 ],
                    family: [ 16, 24, 23, 35, 45 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 35000001, 12300001, 35000016, 3335, 3327, 2799, 1657, 39 ],
                        Familia: [ 16, 24, 45, 23, 35 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'CTA.BASICO W-B',
                    code: [ 584 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1073, 29, 1133 ],
                    family: [ 11, 52, 1, 60, 2, 17, 3, 10, 4, 9, 99, 39, 54 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1133, 1073 ],
                        Familia: [ 1, 3, 52, 10, 4, 9, 39, 60, 54, 99, 2, 11, 17 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BBA-PANT.DENIM',
                    code: [ 751 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 40 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 40 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'W.PETO',
                    code: [ 135 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23 ],
                    family: [ 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 1, 23 ],
                        Familia: [ 34 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'B.PRENDA EXTER.',
                    code: [ 554 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 24, 2 ],
                    family: [ 8, 6, 7, 56, 5 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24 ],
                        Familia: [ 8, 6, 7, 5, 56 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'NIÑA-PIJAMA',
                    code: [ 968 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 3334, 1267, 38 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 3334, 1267, 43, 38 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'T.ABRIGO',
                    code: [ 646 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 25 ],
                    family: [ 7 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 3, 25 ],
                        Familia: [ 7 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BUFANDA.',
                    code: [ 418 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 4, 26, 11000001, 23 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 1, 23, 4, 26 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'E-COMMERCE SRA',
                    code: [ 195 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 23, 24, 27, 1074, 26, 1073, 25 ],
                    family: [ 10, 6, 22, 35, 17, 33, 7, 11, 31, 60, 8, 2, 5, 9, 1, 39, 37, 43, 55, 20, 52, 3, 34 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 1 ],
                        Líneas: [ 2, 24, 5, 27, 1, 23, 4, 26, 3, 25, 1073, 1074 ],
                        Familia: [ 1, 8, 3, 52, 43, 33, 37, 6, 10, 7, 9, 39, 60, 34, 5, 2, 20, 11, 31, 55, 22, 17, 35 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 0 ],
                    description: 'BABY-COMPLEMENT',
                    code: [ 949 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 1267, 3336, 40 ],
                    family: [ 76, 82 ],
                    parents: {
                        Producto: 0,
                        Sección: [ 3 ],
                        Líneas: [ 1267, 43, 3336, 40 ],
                        Familia: [ 76, 82 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 1,
                Sección: null,
                Líneas: null,
                Familia: null
            },
            description: 'Calzado',
            header: true,
            display: true,
            code: '1',
            children: [
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z3BO:DEPORT',
                    code: [ 345 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:NIÑO',
                    code: [ 553 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2000131, 2002131 ],
                    family: [ 28, 11, 24, 58, 4, 40 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000131, 2002131 ],
                        Familia: [ 58, 24, 4, 40, 11, 28 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:BOTA',
                    code: [ 323 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004, 12300001, 15300001 ],
                    family: [ 8, 2 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004, 15300001, 35000001, 12300001, 35000016 ],
                        Familia: [ 8, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:MOCHILA',
                    code: [ 260 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221, 12200001 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BABY:BOLSOS',
                    code: [ 383 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001233 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001233 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:ZAPATO PLAN',
                    code: [ 101 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001, 2001091 ],
                    family: [ 24, 1, 13, 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001091, 2001001 ],
                        Familia: [ 1, 13, 24, 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:BOTIN.DEPO',
                    code: [ 336 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:BOTIN',
                    code: [ 144 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 12000001, 15000001 ],
                    family: [ 10, 9 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 15000001 ],
                        Familia: [ 10, 9 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:ZAPATO PLAN',
                    code: [ 141 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 12000001 ],
                    family: [ 24, 1, 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001 ],
                        Familia: [ 1, 13, 24 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:ZAP. SPORT',
                    code: [ 217, 213 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 12200001, 15200001 ],
                    family: [ 48, 23, 17 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 15200001, 2001023 ],
                        Familia: [ 48, 23, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z:UNIFORME',
                    code: [ 311, 211 ],
                    display: true,
                    section: [ 2, 3 ],
                    product_line: [ 2001007, 2001004, 2001035 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2, 3 ],
                        Líneas: [ 2001004 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:LLUVIA',
                    code: [ 308 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BOTIN',
                    code: [ 304 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 12300001 ],
                    family: [ 8 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 35000001, 12300001, 35000016 ],
                        Familia: [ 8 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:ABIERTO TAC',
                    code: [ 105 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 21, 12, 20 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 12, 20, 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:ZAPATO TACO',
                    code: [ 102 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 25, 12, 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 12, 21, 25 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:ABIERTO TAC',
                    code: [ 125 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 12, 21, 19 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 19, 12, 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z2M:ZAPATO',
                    code: [ 226 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001092 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001092 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:ABIERTO/YUTE',
                    code: [ 244 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 2001025, 12200001 ],
                    family: [ 81 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001025, 2001023 ],
                        Familia: [ 81 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:ABIERTO TAC',
                    code: [ 145 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 12000001 ],
                    family: [ 21, 57, 12, 19 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001 ],
                        Familia: [ 57, 19, 12, 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:BAMBA',
                    code: [ 321 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004, 12300001, 15300001 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004, 15300001, 35000001, 12300001, 35000016 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:BOTA',
                    code: [ 143 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 15000001, 12000001 ],
                    family: [ 7, 6 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 15000001 ],
                        Familia: [ 6, 7 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:SANDALIA',
                    code: [ 337 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:TROLLEY',
                    code: [ 253 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:BOTA',
                    code: [ 103 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 6, 7, 5, 12 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 6, 7, 12, 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:ZAPATO TACO',
                    code: [ 142 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 15000001, 12000001 ],
                    family: [ 25, 12 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 15000001 ],
                        Familia: [ 12, 25 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BAMBA',
                    code: [ 301 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 15300001 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 15300001 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:BOWLING',
                    code: [ 258 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221, 12200001 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:ZAPATO',
                    code: [ 338 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 23 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 23 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:BAÑO/HOME',
                    code: [ 343 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 3, 11 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 3, 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'BOLSOS BASIC',
                    code: [ 137 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001291 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001291 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:BANDOLE',
                    code: [ 255 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:RUNNING',
                    code: [ 217 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 12200001, 15200001 ],
                    family: [ 48, 17 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 15200001, 2001023 ],
                        Familia: [ 48, 17 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:SANDALIA',
                    code: [ 309 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 15300001, 12300001 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 15300001, 35000001, 12300001, 35000016 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:BOLSOS',
                    code: [ 171 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001201 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001201 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:HOME',
                    code: [ 307 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:SOBRE',
                    code: [ 259 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:BILLETERAS',
                    code: [ 251 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 51, 56, 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50, 56, 51 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:BOTIN',
                    code: [ 124 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 9, 10 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 10, 9 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z: UNIFORME',
                    code: [ 111, 211 ],
                    display: true,
                    section: [ 2, 1 ],
                    product_line: [ 2001007, 2001034 ],
                    family: [ 22 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1, 2 ],
                        Líneas: [ 2001034 ],
                        Familia: [ 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:ABIERTO PLA',
                    code: [ 146 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026, 15000001, 12000001 ],
                    family: [ 19, 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026, 11000001, 12000001, 15000001 ],
                        Familia: [ 19, 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:BOTA/BOTIN',
                    code: [ 228 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 12200001, 2001025 ],
                    family: [ 8 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001025, 2001023 ],
                        Familia: [ 8 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1COMP:COLGANTE',
                    code: [ 565 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002111 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002111 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:DEPORTIVO',
                    code: [ 335 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:BAÑO/HOME',
                    code: [ 322 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004 ],
                    family: [ 3, 11 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004 ],
                        Familia: [ 3, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:ABIERTO PLA',
                    code: [ 126 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 19, 20, 21, 24 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 24, 19, 20, 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:RELOJ',
                    code: [ 271 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001227 ],
                    family: [ 97 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001227 ],
                        Familia: [ 97 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:ABIERTO PLA',
                    code: [ 106 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 20, 21, 24 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 24, 20, 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1C:GAFAS SOL',
                    code: [ 567 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:PEUCO',
                    code: [ 342 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 32, 43, 30, 28 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 43, 32, 30, 28 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:CABALLERO',
                    code: [ 552 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2000121 ],
                    family: [ 4, 11, 24, 58, 22 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000121 ],
                        Familia: [ 58, 24, 4, 11, 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1:PRENSA',
                    code: [ 148 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001027 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001027 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:SEÑORA',
                    code: [ 551 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2000111 ],
                    family: [ 11, 4, 24, 12, 58, 1, 22 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2000111 ],
                        Familia: [ 1, 58, 24, 4, 12, 11, 22 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BAÑO',
                    code: [ 302 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003 ],
                    family: [ 3, 11 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003 ],
                        Familia: [ 3, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:BOTA',
                    code: [ 344 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 5, 2 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 5, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:MOCASIN',
                    code: [ 218, 11943 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 15200001 ],
                    family: [ 41 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 15200001, 2001023 ],
                        Familia: [ 41 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:BAÑO/HOME',
                    code: [ 333 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 3, 11 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 3, 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z1:ACCESORIOS',
                    code: [ 161 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001203, 2001202 ],
                    family: [ 50, 79, 39 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001202, 2001203 ],
                        Familia: [ 39, 79, 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:ZAP. VESTIR',
                    code: [ 212 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 12200001, 15200001 ],
                    family: [ 23 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 15200001, 2001023 ],
                        Familia: [ 23 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1:BOLSOS',
                    code: [ 151 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001202, 12000001, 15000001 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 11000001, 12000001, 2001202, 15000001 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:ZAPATO TACO',
                    code: [ 122 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 25, 12 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 12, 25 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:MALETIN',
                    code: [ 257 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BOLSOS',
                    code: [ 381 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001231, 12300001, 15300001 ],
                    family: [ 50, 79, 51 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 15300001, 35000001, 12300001, 35000016, 2001231 ],
                        Familia: [ 79, 50, 51 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:ZAPATO',
                    code: [ 330 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004, 12300001 ],
                    family: [ 23, 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004, 35000001, 12300001, 35000016 ],
                        Familia: [ 1, 23 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z3BO:BAMBAS',
                    code: [ 341 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1COMP:ELECTRO.',
                    code: [ 561 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 79 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 79 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z2C:ZAPATO',
                    code: [ 206 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001092 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001092 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:BAMBA',
                    code: [ 331 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:DEPORTIVO',
                    code: [ 214 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 2001025, 12200001, 15200001 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 2001025, 15200001, 2001023 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'ALARMAS',
                    code: [ 999 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 98 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 98 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:BOTA',
                    code: [ 334 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 5, 2 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 5, 2 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:MIN.BAN',
                    code: [ 254 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221, 15200001, 12200001 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 12200001, 36000001, 1353, 1354, 36000016, 15200001, 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:BOLSOS',
                    code: [ 161 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001203, 2001202 ],
                    family: [ 50, 79, 39 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001202, 2001203 ],
                        Familia: [ 39, 79, 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:BOTA',
                    code: [ 123 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 6, 7 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 6, 7 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:ZAPATO PLAN',
                    code: [ 121 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 24, 13, 25 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 13, 24, 25 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:SHOPPER',
                    code: [ 256 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221, 15200001 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 15200001, 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:ZAPATO',
                    code: [ 348 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 23 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 23 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1COMP:FUNDAS',
                    code: [ 563 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 79 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 79 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:DEPORTIVO',
                    code: [ 305 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 12300001 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 35000001, 12300001, 35000016 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1C:GAFAS LECT',
                    code: [ 566 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 38, 33 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 33, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'BOLSOS NINO',
                    code: [ 162 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001093 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001093 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:ZAPATO',
                    code: [ 310 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 2001093, 15300001 ],
                    family: [ 23, 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 15300001, 2001093 ],
                        Familia: [ 1, 23 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BA:PEUCO',
                    code: [ 332 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001012 ],
                    family: [ 28, 32, 30, 43 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001012 ],
                        Familia: [ 43, 32, 30, 28 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1T:DEPORTIVO',
                    code: [ 127 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001022 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001022 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'Z2C:BOTA/BOTIN',
                    code: [ 202 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001092 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001092 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:DEPORTIVO',
                    code: [ 107 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:BOTIN.DEPOR',
                    code: [ 326 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004, 12300001 ],
                    family: [ 14, 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004, 35000001, 12300001, 35000016 ],
                        Familia: [ 13, 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'BOLSOS CLASSIC',
                    code: [ 150 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001292 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001292 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:BOTIN.DEPO',
                    code: [ 346 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:DEPORTIVO',
                    code: [ 325 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004, 12300001 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004, 35000001, 12300001, 35000016 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BOTA',
                    code: [ 303 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 2001093, 12300001 ],
                    family: [ 5, 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 35000001, 12300001, 35000016, 2001093 ],
                        Familia: [ 1, 5 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:BOLSOS',
                    code: [ 382 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001232, 12300001, 15300001 ],
                    family: [ 50, 51 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001232, 15300001, 35000001, 12300001, 35000016 ],
                        Familia: [ 50, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H:COMP.SEÑORA',
                    code: [ 554 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002111 ],
                    family: [ 40, 50, 62, 51 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002111 ],
                        Familia: [ 62, 40, 50, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1C:PEG. MOVIL',
                    code: [ 568 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 51 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 51 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3A:BOTIN.DEPOR',
                    code: [ 306 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001003, 12300001 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001003, 35000001, 12300001, 35000016 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1B:BOTIN',
                    code: [ 104 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001001 ],
                    family: [ 10, 9, 8 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001001 ],
                        Familia: [ 8, 10, 9 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z1W:DEPORTIVO',
                    code: [ 147 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2001026 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2001026 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 1 ],
                    description: 'H1COMP:RELOJ',
                    code: [ 562 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 2002121 ],
                    family: [ 97 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 1 ],
                        Líneas: [ 2002121 ],
                        Familia: [ 97 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:ACCESORIOS',
                    code: [ 262 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 79, 56 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 79, 56 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z2:DEP.BOTIN',
                    code: [ 216 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001023, 2001025 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001025, 2001023 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3O:SANDALIA',
                    code: [ 329 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001004 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001004 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:SANDALIA',
                    code: [ 347 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 1 ],
                    description: 'CALZADO',
                    code: [ 119 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001010 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001010 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:DEPORTIVO',
                    code: [ 345 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 13 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 13 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 1 ],
                    description: 'Z2COMP:BOLSOS',
                    code: [ 252 ],
                    display: true,
                    section: [ 2 ],
                    product_line: [ 2001221 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 2 ],
                        Líneas: [ 2001221 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 1 ],
                    description: 'Z3BO:BAMBA',
                    code: [ 341 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 2001013 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 1,
                        Sección: [ 3 ],
                        Líneas: [ 2001013 ],
                        Familia: [ 42 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 2,
                Sección: null,
                Líneas: null,
                Familia: null
            },
            description: 'Perfumeria',
            header: true,
            display: true,
            code: '2',
            children: [
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'COSM-PACK',
                    code: [ 759, 659, 859 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 57, 48, 45, 54, 51, 60 ],
                    family: [ 11, 59, 55 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 48, 57, 45, 54, 51, 60 ],
                        Familia: [ 59, 11, 55 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PERFU-REGULAR',
                    code: [ 850, 750, 650, 14003 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 53, 44, 50, 59, 52, 61 ],
                    family: [ 50, 48, 75, 58 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ],
                        Familia: [ 58, 48, 75, 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PERFU-PACK',
                    code: [ 651, 851, 751 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 53, 44, 50, 59 ],
                    family: [ 50, 48, 75, 58 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ],
                        Familia: [ 58, 48, 75, 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PERFU-TRAVEL',
                    code: [ 752, 652, 852 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 47, 56, 44, 53, 50, 59 ],
                    family: [ 50, 48, 75, 58 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ],
                        Familia: [ 58, 48, 75, 50 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'COSM-REGULAR',
                    code: [ 856, 756, 656 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 48, 57, 54, 45, 51, 60 ],
                    family: [ 15, 54, 11, 1, 61, 59, 62, 9, 60, 57, 50 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 48, 57, 45, 54, 51, 60 ],
                        Familia: [ 1, 57, 15, 62, 9, 59, 60, 54, 61, 50, 11 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'MUESTRAS',
                    code: [ 853, 653, 753 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 49, 58, 46, 55, 52, 61 ],
                    family: [ 70, 48, 75, 50, 71, 59, 1, 45, 64, 54, 47, 58 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Familia: [ 1, 47, 58, 70, 48, 45, 59, 75, 54, 64, 50, 71 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'VELAS',
                    code: [ 854, 654, 754 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 56, 47, 44, 53, 46, 50, 59 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 50, 59, 47, 56 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'COSM-SET',
                    code: [ 658 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    family: [ 59, 1, 54 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 1, 59, 54 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'PERFU-SET',
                    code: [ 755, 655, 855 ],
                    display: true,
                    section: [ 2, 1, 3 ],
                    product_line: [ 56, 47, 44, 53, 54, 50, 59 ],
                    family: [ 50, 48, 75, 1 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1, 2, 3 ],
                        Líneas: [ 44, 53, 45, 54, 50, 59, 47, 56 ],
                        Familia: [ 1, 48, 75, 50 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'PERFILAD.LABIOS',
                    code: [ 909 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'BALSAMO LABIAL',
                    code: [ 910 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'LIPGLOSS/ICEGLO',
                    code: [ 907 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: '*PERFUMERIA*',
                    code: [ 997 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 52 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 3 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 2 ],
                    description: 'BARRA DE LABIOS',
                    code: [ 908 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 45 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 59 ]
                    }
                },
                {
                    cod_brand: [ 1, 16 ],
                    product: [ 2 ],
                    description: 'COSM-REFILL',
                    code: [ 657 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 54, 45 ],
                    family: [ 59, 60, 57 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 57, 59, 60 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 2 ],
                    description: 'PROMO NIÑO',
                    code: [ 980 ],
                    display: true,
                    section: [ 3 ],
                    product_line: [ 59 ],
                    family: [ 50 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 3 ],
                        Líneas: [ 50, 59 ],
                        Familia: [ 50 ]
                    }
                },
                {
                    cod_brand: [ 16 ],
                    product: [ 2 ],
                    description: 'NO PERFUMERIA',
                    code: [ 603 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 54 ],
                    family: [ 59 ],
                    parents: {
                        Producto: 2,
                        Sección: [ 1 ],
                        Líneas: [ 45, 54 ],
                        Familia: [ 59 ]
                    }
                }
            ]
        },
        {
            parents: {
                Producto: 4,
                Sección: null,
                Líneas: null,
                Familia: null
            },
            description: 'Hogar',
            header: true,
            display: true,
            code: '4',
            children: [
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR SERVIR',
                    code: [ 313 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO HONDO',
                    code: [ 201 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559 ],
                    family: [ 35, 67, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 67, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'KIDS MOBI/TRANS',
                    code: [ 142 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 80, 73, 52, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 80, 73, 52, 77 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TIJERA',
                    code: [ 479 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567, 1560 ],
                    family: [ 42, 36, 53, 55 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560 ],
                        Familia: [ 42, 53, 36, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA VIAL',
                    code: [ 737 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BAÑADOR NIÑA',
                    code: [ 586 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568 ],
                    family: [ 70, 31 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294 ],
                        Familia: [ 70, 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PACK CRISTAL',
                    code: [ 561 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'NECESER',
                    code: [ 126 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1557, 1560 ],
                    family: [ 70, 14, 55, 99, 17, 92, 97 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1557 ],
                        Familia: [ 70, 14, 92, 99, 55, 17, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISA',
                    code: [ 579 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    family: [ 62, 94 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 62, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISÓN',
                    code: [ 121 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1567, 1295 ],
                    family: [ 97, 63, 95, 5, 8, 2 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295, 1557 ],
                        Familia: [ 95, 8, 63, 5, 2, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO LLANO KDS',
                    code: [ 900 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DISCOS',
                    code: [ 85 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 85 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 85 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SHORT',
                    code: [ 123 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1567 ],
                    family: [ 95, 69, 6, 8 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ],
                        Familia: [ 95, 8, 6, 69 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS DECO',
                    code: [ 154 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1568 ],
                    family: [ 43, 40, 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568 ],
                        Familia: [ 52, 43, 40 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE COCINA',
                    code: [ 131, 751 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557 ],
                    family: [ 41, 54, 50, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ],
                        Familia: [ 41, 42, 54, 50 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'UTEN DE COCINA',
                    code: [ 41 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1559 ],
                    family: [ 41, 42, 43, 55, 35, 50, 37, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1294 ],
                        Familia: [ 87, 43, 41, 37, 42, 50, 55, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARITA MOKA',
                    code: [ 305 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SHORT KDS',
                    code: [ 855 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOBI ESCAPARATE',
                    code: [ 173 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1295 ],
                    family: [ 77, 14, 7, 43, 60 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295 ],
                        Familia: [ 43, 77, 14, 7, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BODY BEBÉ',
                    code: [ 537 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUIDADO DE PIEL',
                    code: [ 798 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LIMPIASUELOS',
                    code: [ 929 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COL ROPA DORMIR',
                    code: [ 116 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1577, 1557 ],
                    family: [ 62, 2, 99, 95, 97, 69, 58, 78 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577, 1557 ],
                        Familia: [ 95, 62, 58, 78, 69, 99, 2, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CERILLAS',
                    code: [ 795 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FCOJIN.EDRE KDS',
                    code: [ 807 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 8, 5, 60, 6 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 8, 6, 60, 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET CUBIERTOS',
                    code: [ 311 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PROTECTOR MESA',
                    code: [ 82 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAMPARA',
                    code: [ 145 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1567, 1557 ],
                    family: [ 47 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1557 ],
                        Familia: [ 47 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOALLA BEBE',
                    code: [ 423 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACONDICIONADOR',
                    code: [ 790 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHUPITO LICOR',
                    code: [ 449 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'HUCHA',
                    code: [ 710 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 43, 46 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 43, 46 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISETA KDS',
                    code: [ 897 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 97, 70, 94 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 97, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TAZA+PLATO',
                    code: [ 209 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'UTENSLIO.LAVADO',
                    code: [ 782 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 82, 96 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 82, 96 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PACK ACEIT+VINA',
                    code: [ 228 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.DORMITORIO',
                    code: [ 780 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    family: [ 8, 1, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 1, 8, 77 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'GUANTE.MANOPLA',
                    code: [ 28 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1567, 1294, 1557 ],
                    family: [ 92, 28, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1294, 1557 ],
                        Familia: [ 14, 92, 28 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BODY WASH',
                    code: [ 769 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAPOTA',
                    code: [ 534 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLETAS',
                    code: [ 22 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577, 1295 ],
                    family: [ 22, 55, 21, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295, 1577 ],
                        Familia: [ 87, 21, 55, 22 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PERCHAS KDS',
                    code: [ 818 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PROTECTORES',
                    code: [ 138 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1577 ],
                    family: [ 21 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577 ],
                        Familia: [ 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET SÁB. CUNA',
                    code: [ 596 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUIDAD CORPORAL',
                    code: [ 489 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1559 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.LIMPIEZA',
                    code: [ 762 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 82, 43, 50, 3 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 82, 3, 43, 50 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PALA PESCADO',
                    code: [ 307 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MINIPLATO',
                    code: [ 206 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577 ],
                    family: [ 38, 35, 42, 37, 53 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577 ],
                        Familia: [ 37, 42, 53, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARA MES KDS',
                    code: [ 904 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 36, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MESAS',
                    code: [ 72 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1577, 1567, 1568 ],
                    family: [ 72, 77, 73, 76 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1577, 1557 ],
                        Familia: [ 76, 73, 77, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CNJTO ROPA KDS',
                    code: [ 864 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 97 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TAZA+PLAT.CAFÉ',
                    code: [ 207 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR PESCADO',
                    code: [ 306, 314 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVIDORES',
                    code: [ 320 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 37, 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PANTALON BEBÉ',
                    code: [ 548 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PUF',
                    code: [ 31 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 73, 30 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 73, 30 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSAS TXT KDS',
                    code: [ 819 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 19, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 19, 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHALECO',
                    code: [ 433 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 58 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 58 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SONAJERO',
                    code: [ 784 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 52, 51 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 52, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MARCOS DE FOTOS',
                    code: [ 45 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1295 ],
                    family: [ 45 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1295, 1557 ],
                        Familia: [ 45 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AC.PARA GUARDAR',
                    code: [ 57 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 55, 57, 79 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 57, 79, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSAS TEXTIL',
                    code: [ 19 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557, 1568, 1560, 1294 ],
                    family: [ 19, 14, 3, 13, 17 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1557 ],
                        Familia: [ 13, 3, 19, 14, 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MARCO FOTO',
                    code: [ 156 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1568 ],
                    family: [ 45 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568 ],
                        Familia: [ 45 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AGARRADERA',
                    code: [ 531 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 28 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 28 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAVAVAJILLAS',
                    code: [ 772 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PORTAVELAS',
                    code: [ 48, 163 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1568 ],
                    family: [ 98, 38, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560 ],
                        Familia: [ 44, 38, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TAZA + PLATO TÉ',
                    code: [ 208 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOTE BAÑO',
                    code: [ 455 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TIRADORES KDS',
                    code: [ 922 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 48 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 48 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTA JUEGOS',
                    code: [ 770 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOTELLA',
                    code: [ 439 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    family: [ 38, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 37, 42, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PELELE',
                    code: [ 529 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 97, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 14, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CORTI DUCHA KDS',
                    code: [ 816 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 32 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 32 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VASO',
                    code: [ 400 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 37, 35, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BANDEJA BAÑO',
                    code: [ 102 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1295, 1567 ],
                    family: [ 44, 16 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1295 ],
                        Familia: [ 16, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAMPARA PIL KDS',
                    code: [ 928 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 47 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 47 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARA POSTRE',
                    code: [ 308 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALBORNOCES',
                    code: [ 14 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1295, 1577 ],
                    family: [ 99, 92, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1295, 1577 ],
                        Familia: [ 14, 92, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANA ENCIMERA',
                    code: [ 89 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577, 1295 ],
                    family: [ 1, 89 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1577, 1557 ],
                        Familia: [ 1, 89 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SALERO',
                    code: [ 551 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 38, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS BAÑO',
                    code: [ 155 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AZUCARERO',
                    code: [ 217 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 35, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PILLOW MIST',
                    code: [ 750 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE CUBIERTO',
                    code: [ 130 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'GORRO KDS',
                    code: [ 857 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 17 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLGADOR',
                    code: [ 517 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1568 ],
                    family: [ 74, 44, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560 ],
                        Familia: [ 44, 77, 74 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FAROLILLO',
                    code: [ 436 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1295 ],
                    family: [ 75, 98 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1295 ],
                        Familia: [ 75, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABONERA',
                    code: [ 105 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294, 1295 ],
                    family: [ 44, 41 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1295 ],
                        Familia: [ 41, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JUGUETES KDS',
                    code: [ 852 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568, 1560 ],
                    family: [ 51, 52, 9, 18, 73 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1294 ],
                        Familia: [ 73, 52, 9, 18, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIOS MESA',
                    code: [ 153 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557 ],
                    family: [ 42, 35, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOWL',
                    code: [ 211 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577, 1560 ],
                    family: [ 42, 35, 38, 41, 37, 36, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1577 ],
                        Familia: [ 43, 41, 37, 42, 38, 36, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TAZA',
                    code: [ 463 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VESTIDO BEBÉ',
                    code: [ 569 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DOSIF.JABÓN KDS',
                    code: [ 917 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOWL APERITIVOS',
                    code: [ 467 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 42, 38, 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 36, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.ARMARIO',
                    code: [ 83 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'GASAS',
                    code: [ 767 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VARIOS KDS',
                    code: [ 522 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 92, 18, 70, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 14, 18, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CORTINA DUCHA',
                    code: [ 16 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 32, 16 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 16, 32 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABON EN ESPUMA',
                    code: [ 741 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOMBRAS BAÑO',
                    code: [ 15 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 15, 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 15, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JARRONES',
                    code: [ 157, 46 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1568, 1295 ],
                    family: [ 46, 3, 43, 98, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1295 ],
                        Familia: [ 3, 43, 44, 46, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DELANTALES',
                    code: [ 27 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295, 1559 ],
                    family: [ 96, 27, 87, 26 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295 ],
                        Familia: [ 87, 27, 96, 26 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO PASTA',
                    code: [ 203 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BAJOPLATO',
                    code: [ 205 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577 ],
                    family: [ 37, 38, 42, 35, 53 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577 ],
                        Familia: [ 37, 42, 53, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ESCOBILLA',
                    code: [ 723 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLET/POSAV',
                    code: [ 151 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 39, 25 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 39, 25 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BODY MIST',
                    code: [ 771 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMINOS DE MESA',
                    code: [ 24 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 24, 21, 22 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 24, 21, 22 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUND.COJIN.EDRE',
                    code: [ 7 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1577 ],
                    family: [ 8, 5, 7, 60, 6, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1577, 1557 ],
                        Familia: [ 8, 43, 6, 7, 60, 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUNA KDS',
                    code: [ 518 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SALES DE BAÑO',
                    code: [ 788 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PIJAMA KDS',
                    code: [ 896 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 97 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TÚNICA',
                    code: [ 532 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1568 ],
                    family: [ 99, 63, 62, 97, 94, 58 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1557 ],
                        Familia: [ 62, 58, 63, 99, 97, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ARTICULOS PLAYA',
                    code: [ 170 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 63 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 63 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'HUEVERA',
                    code: [ 715 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 35, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHILLO CHULET',
                    code: [ 462 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABÓN-PASTILLA',
                    code: [ 702 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLCHAS',
                    code: [ 6 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1559, 1295, 1577 ],
                    family: [ 6, 79, 4 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295, 1577, 1557 ],
                        Familia: [ 6, 4, 79 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INDIVIDUALES',
                    code: [ 23 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 21, 23, 24 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 24, 23, 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSITA.ARMARIO',
                    code: [ 20 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567, 1557 ],
                    family: [ 20, 14, 82 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1557 ],
                        Familia: [ 82, 14, 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLCHÓN',
                    code: [ 523 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 80, 30 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 80, 30 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'NECESER KDS',
                    code: [ 898 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14, 19 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 19, 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO POSTR KDS',
                    code: [ 901 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 35, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 42, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLEC ALFOMBRAS',
                    code: [ 115 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577 ],
                    family: [ 29 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577 ],
                        Familia: [ 29 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESOR.TEXTIL',
                    code: [ 149 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567 ],
                    family: [ 17 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560 ],
                        Familia: [ 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PANTALÓN KDS',
                    code: [ 854 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 95 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 95, 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PROTEC ALMOHADA',
                    code: [ 87 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1577, 1557 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577, 1557 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SUDADERA',
                    code: [ 542 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 58, 78, 94 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 58, 78, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VELAS',
                    code: [ 65, 135 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1568, 1295, 1567 ],
                    family: [ 65, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1295 ],
                        Familia: [ 65, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.JARDIN',
                    code: [ 3 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559 ],
                    family: [ 53, 3, 43, 50, 34 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 3, 43, 53, 34, 50 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHAQUETA BEBÉ',
                    code: [ 549 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VESTIDO',
                    code: [ 538 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 63 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 63 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SCENTED CERAMIC',
                    code: [ 768 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOTE',
                    code: [ 428 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1567, 1560 ],
                    family: [ 37, 35, 42, 38, 41, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294 ],
                        Familia: [ 43, 41, 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHUCHILLOS',
                    code: [ 776 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36, 42, 41 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 41, 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AGUA DE PLANCHA',
                    code: [ 727 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PALA SVR.PESCAD',
                    code: [ 315 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPEL PINTADO',
                    code: [ 55 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 55 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET BRAGUITAS',
                    code: [ 563 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PONCHO',
                    code: [ 446 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 99, 92, 78, 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 70, 78, 92, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPEL PERFUMADO',
                    code: [ 778 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VARIOS COSMETIC',
                    code: [ 729 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 86, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 43, 86 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPELERA',
                    code: [ 743 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1567 ],
                    family: [ 44, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568 ],
                        Familia: [ 43, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLEC SABANA',
                    code: [ 107 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294 ],
                    family: [ 1, 91, 88, 89 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 1, 88, 89, 91 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA ALMOHADA',
                    code: [ 91 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577, 1294, 1295 ],
                    family: [ 1, 91 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1295, 1577, 1557 ],
                        Familia: [ 1, 91 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TIRADORES',
                    code: [ 101 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1568 ],
                    family: [ 48, 1, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1560, 1557 ],
                        Familia: [ 1, 44, 48 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TEN POSTRE KDS',
                    code: [ 908 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUSELINA',
                    code: [ 745 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO POSTRE',
                    code: [ 202 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    family: [ 35, 37, 38, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SALSERA',
                    code: [ 223 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SACO BEBÉS',
                    code: [ 500 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LIBRETAS',
                    code: [ 111 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1567, 1557 ],
                    family: [ 55, 54, 5, 8 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1557 ],
                        Familia: [ 8, 54, 5, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BATA/KIMONO KDS',
                    code: [ 915 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 97, 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 99, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHILL MES KDS',
                    code: [ 906 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 36, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FND.COJIN KDS',
                    code: [ 808 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 8 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 8 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ART.NAVIDAD',
                    code: [ 146 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 60 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABON EXF CORPO',
                    code: [ 775 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'HUCHA KDS',
                    code: [ 923 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 43, 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 52, 43 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAÑUELO',
                    code: [ 593 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 92, 59 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 59, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE CRISTAL',
                    code: [ 128 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1557 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1557 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TARJETA PERFMDA',
                    code: [ 740 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELLENO ALMOH',
                    code: [ 12 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1577 ],
                    family: [ 10, 12 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1577, 1557 ],
                        Familia: [ 10, 12 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COMPLEMENTOS',
                    code: [ 717 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 14, 55 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 14, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TAZON',
                    code: [ 438 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SEMILLAS',
                    code: [ 792 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 2 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 2 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TABLAS',
                    code: [ 754 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTELES',
                    code: [ 21 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577, 1295, 1294 ],
                    family: [ 21, 23, 22, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1295, 1577 ],
                        Familia: [ 87, 23, 21, 22 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ANTIFAZ KDS',
                    code: [ 856 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JUEGOS',
                    code: [ 52 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUG KDS',
                    code: [ 902 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CESTAS KDS',
                    code: [ 849 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 49 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 49 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET CUBIERT KDS',
                    code: [ 909 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 36, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACEITERA',
                    code: [ 226 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 42, 38, 35, 41 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 41, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLCHAS KDS',
                    code: [ 806 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 6 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 6 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BANDEJAS KDS',
                    code: [ 840 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOALLAS KDS',
                    code: [ 813 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 92, 70, 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 92, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ESPEJOS KDS',
                    code: [ 894 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 81 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 81 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COJIN DECO',
                    code: [ 9 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1560, 1557, 1577, 1294 ],
                    family: [ 9, 8, 78, 28 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1577, 1557 ],
                        Familia: [ 8, 78, 9, 28 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHICHONERA',
                    code: [ 421 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1, 10 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1, 10 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOM BAÑO KDS',
                    code: [ 815 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 15 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 15 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.DECORA',
                    code: [ 43 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1559, 1567, 1568, 1294, 1557, 1295 ],
                    family: [ 43, 74, 20, 35, 60, 44, 52, 38, 14, 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1294, 1295, 1557 ],
                        Familia: [ 52, 43, 44, 14, 60, 38, 64, 20, 74, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARITA KDS',
                    code: [ 907 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SOPORTE MACETA',
                    code: [ 748 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567 ],
                    family: [ 43, 3 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560 ],
                        Familia: [ 3, 43 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLETERO',
                    code: [ 39 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295 ],
                    family: [ 39, 25, 42, 38, 35, 36, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295 ],
                        Familia: [ 43, 42, 39, 38, 36, 25, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE VAJILLA',
                    code: [ 129 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557, 1560 ],
                    family: [ 35, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294, 1557 ],
                        Familia: [ 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'KDS SET VAJILLA',
                    code: [ 731 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'GORRO',
                    code: [ 514 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'EDREDÓN DECO',
                    code: [ 5 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1557 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ELECTRODOMESTIC',
                    code: [ 783 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1577 ],
                    family: [ 61 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1577 ],
                        Familia: [ 61 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SERVILLETAS KDS',
                    code: [ 926 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JARRAS',
                    code: [ 213 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557, 1294 ],
                    family: [ 38, 35, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1557 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABÓN LÍQUIDO',
                    code: [ 700 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CINTA METRICA',
                    code: [ 540 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 55, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 43, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIO KDS',
                    code: [ 519 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUEBLE AUXILIAR',
                    code: [ 143 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577, 1560, 1557 ],
                    family: [ 72, 77, 47, 73, 74, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1577, 1557 ],
                        Familia: [ 47, 73, 43, 77, 74, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISETA',
                    code: [ 120 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1567 ],
                    family: [ 94, 96, 87, 89, 90, 88, 91 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295, 1557 ],
                        Familia: [ 87, 96, 88, 90, 89, 91, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BAÑADOR NIÑO',
                    code: [ 587 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 31 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 31 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLEC MANTAS',
                    code: [ 110 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1557 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DOSIF. JABÓN',
                    code: [ 466 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1567, 1294 ],
                    family: [ 44, 82 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1294 ],
                        Familia: [ 82, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CENICERO',
                    code: [ 222 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 76, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 76, 43 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PERCHAS',
                    code: [ 18 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577 ],
                    family: [ 18 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577, 1557 ],
                        Familia: [ 18 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VACIABOLSILLOS',
                    code: [ 53 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295 ],
                    family: [ 14, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1557 ],
                        Familia: [ 87, 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDAS COJIN',
                    code: [ 8 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1560, 1294, 1559, 1295, 1568 ],
                    family: [ 8, 60, 9 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559, 1560, 1294, 1295, 1557 ],
                        Familia: [ 8, 9, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JERSEY BEBÉ',
                    code: [ 559 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOISES KDS',
                    code: [ 503 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ESPEJOS',
                    code: [ 161, 106 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1568, 1557, 1567, 1577 ],
                    family: [ 81, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1577, 1557 ],
                        Familia: [ 81, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VELA AROMÁTICA',
                    code: [ 705 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    family: [ 98, 71 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 71, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TÚNICA KDS',
                    code: [ 858 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568 ],
                    family: [ 63, 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294 ],
                        Familia: [ 63, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MIKADO/DIFUSOR',
                    code: [ 703 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    family: [ 67, 64, 71 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 67, 64, 71 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MALETIN',
                    code: [ 447 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 79, 57, 55 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 57, 79, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABONERA KDS',
                    code: [ 893 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOWL KDS',
                    code: [ 903 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PALILLOS',
                    code: [ 319 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MESAS KDS',
                    code: [ 872 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 80, 73, 72 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80, 73, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FNDA NORDIC KDS',
                    code: [ 888 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUG',
                    code: [ 210 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 38, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COPA',
                    code: [ 401 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 37, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARA MESA',
                    code: [ 300 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295 ],
                    family: [ 36, 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295 ],
                        Familia: [ 36, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHILLO POSTRE',
                    code: [ 310 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR MESA',
                    code: [ 301 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1295 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'NEVERA',
                    code: [ 602 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1567 ],
                    family: [ 19, 70, 14, 21 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 70, 19, 14, 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'EXCL.INTERNET',
                    code: [ 999 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1295, 1294, 1557 ],
                    family: [ 43, 35, 36, 38, 65, 37, 48, 34, 14, 98, 79 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1295, 1557 ],
                        Familia: [ 43, 65, 37, 48, 14, 38, 36, 79, 34, 35, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLGADOR KDS',
                    code: [ 919 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 74, 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80, 74 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'HOME SPRAY',
                    code: [ 706 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOMBRAS',
                    code: [ 29 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1557, 1577, 1295 ],
                    family: [ 29, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1295, 1577, 1557 ],
                        Familia: [ 87, 29 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMBIADOR',
                    code: [ 742 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CANDELABRO',
                    code: [ 468 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567 ],
                    family: [ 98, 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560 ],
                        Familia: [ 43, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PASTA.D.DIENTES',
                    code: [ 785 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANA BAJERA',
                    code: [ 90 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1577 ],
                    family: [ 1, 89 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1577, 1557 ],
                        Familia: [ 1, 89 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUBRECANAPE',
                    code: [ 93 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1577 ],
                    family: [ 93 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1577, 1557 ],
                        Familia: [ 93 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUEBLES KIDS',
                    code: [ 140 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1577 ],
                    family: [ 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577 ],
                        Familia: [ 80 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOBILIARIO KDS',
                    code: [ 80 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 80, 73, 74, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80, 73, 77, 74 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PORTAINCIENSO',
                    code: [ 509 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 76 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 76 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET FRAG+DIFUSO',
                    code: [ 736 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ENSALADERA',
                    code: [ 216 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    family: [ 35, 37, 38, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MOBILIARIO',
                    code: [ 77 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1568, 1560, 1567, 1577 ],
                    family: [ 77, 72, 43, 73, 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1577, 1557 ],
                        Familia: [ 73, 43, 44, 77, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELOJES',
                    code: [ 84 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294 ],
                    family: [ 43, 84 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294 ],
                        Familia: [ 43, 84 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LIBROS',
                    code: [ 54 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1560 ],
                    family: [ 54, 55 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294 ],
                        Familia: [ 54, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOPE PUERTA',
                    code: [ 108 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1294, 1567 ],
                    family: [ 43, 21, 51, 22, 23 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1294, 1557 ],
                        Familia: [ 43, 23, 21, 22, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JOYERO',
                    code: [ 604 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 79 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 79 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAJAS Y JOYEROS',
                    code: [ 160 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1567 ],
                    family: [ 79 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 79 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INDIVIDUAL. KDS',
                    code: [ 823 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 21, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 21 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JABÓN CORPORAL',
                    code: [ 781 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BANDEJ PLAT KDS',
                    code: [ 739 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARA SALSA',
                    code: [ 317 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VASO BAÑO KDS',
                    code: [ 892 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARITA CAFÉ',
                    code: [ 304 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TRAJES DE BAÑO',
                    code: [ 606 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1557 ],
                    family: [ 31, 56 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1557 ],
                        Familia: [ 31, 56 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PLATO LLANO',
                    code: [ 200 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1295 ],
                    family: [ 35, 38, 37, 42, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1295 ],
                        Familia: [ 87, 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET BEBE',
                    code: [ 547 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VESTIDO KDS',
                    code: [ 920 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568 ],
                    family: [ 70, 97, 63 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294 ],
                        Familia: [ 70, 63, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BABERO',
                    code: [ 437 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14, 70, 99, 17 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 14, 99, 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALFOMBRAS KDS',
                    code: [ 829 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1577, 1560 ],
                    family: [ 29 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294, 1577 ],
                        Familia: [ 29 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHUPETE',
                    code: [ 796 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LIMPIACRISTALES',
                    code: [ 930 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'OVERALL',
                    code: [ 536 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PETO',
                    code: [ 572 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 97 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PALILLOS KDS',
                    code: [ 911 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VASO BAÑO',
                    code: [ 104 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294, 1557 ],
                    family: [ 44, 10 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1557 ],
                        Familia: [ 44, 10 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MUÑECOS',
                    code: [ 51 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 51, 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 52, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VASO KDS',
                    code: [ 910 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.NAVIDAD',
                    code: [ 60 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 60, 72 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 60, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TOALLAS',
                    code: [ 13 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1295, 1294, 1577 ],
                    family: [ 92, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1295, 1577 ],
                        Familia: [ 77, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHILLO MESA',
                    code: [ 302 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AGENDAS',
                    code: [ 112 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1295 ],
                    family: [ 55, 8, 54, 53, 6 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1295, 1557 ],
                        Familia: [ 8, 6, 53, 54, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET SAB.MOISES',
                    code: [ 499 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAMPARAS',
                    code: [ 47 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1557, 1577 ],
                    family: [ 47, 60, 65 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1577, 1557 ],
                        Familia: [ 47, 65, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'EDREDÓN DEC KDS',
                    code: [ 805 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 5 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 5 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'NIÑO ACCESORIOS',
                    code: [ 127 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294 ],
                    family: [ 51, 43, 27, 57 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294 ],
                        Familia: [ 57, 27, 43, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SALVAMANTELES',
                    code: [ 494 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 42, 25, 53, 50 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 53, 50, 25 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PIJAMA',
                    code: [ 117 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1567, 1295 ],
                    family: [ 97, 8, 95, 94, 2 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1295, 1557 ],
                        Familia: [ 95, 8, 2, 97, 94 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET SAL/PMNTA',
                    code: [ 541 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 42, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SUAVIZANTE',
                    code: [ 726 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTAS KDS',
                    code: [ 804 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 4 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 4 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLEC CORTINAS',
                    code: [ 114 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577 ],
                    family: [ 32 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577 ],
                        Familia: [ 32 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPELERÍA',
                    code: [ 728 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567 ],
                    family: [ 55, 82, 54 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560 ],
                        Familia: [ 82, 54, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELLENOS COJIN',
                    code: [ 11 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1559 ],
                    family: [ 10, 34 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1560 ],
                        Familia: [ 10, 34 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CINTA PELO KDS',
                    code: [ 863 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 52 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FALDA',
                    code: [ 720 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 56 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 56 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SOPERA',
                    code: [ 465 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LÁMPARA PILA',
                    code: [ 763 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1567 ],
                    family: [ 60, 47 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1560, 1557 ],
                        Familia: [ 47, 60 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COJIN RELLENO',
                    code: [ 431 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1568 ],
                    family: [ 9 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294 ],
                        Familia: [ 9 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PACK SABANAS',
                    code: [ 565 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BUFANDA/FOULARD',
                    code: [ 566 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 59, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 14, 59 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SACO DORMIR BEB',
                    code: [ 501 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PANT LÁMPARA',
                    code: [ 592 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 47 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 47 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BANDEJAS',
                    code: [ 40 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1560, 1559, 1557, 1295 ],
                    family: [ 40, 38, 41, 43, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1560, 1295, 1557 ],
                        Familia: [ 43, 41, 37, 42, 40, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INTERNET VARIOS',
                    code: [ 169 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1295, 1559, 1557, 1567 ],
                    family: [ 35, 8, 14, 43, 25, 79, 42, 37, 65, 38, 60, 98, 46, 36, 48, 2, 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1557 ],
                        Familia: [ 8, 43, 65, 37, 42, 48, 14, 60, 38, 36, 64, 79, 46, 2, 25, 35, 98 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MENAJE KIDS',
                    code: [ 139 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568 ],
                    family: [ 36, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISA KDS',
                    code: [ 861 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 62, 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 62, 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BATA/KIMONO',
                    code: [ 434 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1294 ],
                    family: [ 99, 2, 58, 97, 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1295, 1557 ],
                        Familia: [ 58, 70, 99, 2, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPELERÍA KDS',
                    code: [ 925 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 55, 79, 57 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 57, 79, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DECANTADOR',
                    code: [ 415 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUIDADO DE CALZ',
                    code: [ 797 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JARRA.BOTELLA',
                    code: [ 927 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHAQUETA',
                    code: [ 124 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1568, 1559, 1294 ],
                    family: [ 58, 92, 97, 70, 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1559, 1294, 1557 ],
                        Familia: [ 58, 70, 92, 99, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MANTAS',
                    code: [ 4 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1295, 1294, 1577 ],
                    family: [ 4, 35, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1294, 1295, 1577, 1557 ],
                        Familia: [ 14, 4, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LAMPARAS KDS',
                    code: [ 847 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 47 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 47 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COJIN DECO KDS',
                    code: [ 809 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 51, 9, 14, 8 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 8, 14, 9, 51 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SUDADERA KDS',
                    code: [ 860 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 96 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 96, 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACCESORIO BAÑO',
                    code: [ 744 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1294, 1577, 1295 ],
                    family: [ 13, 44, 33, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1295, 1577 ],
                        Familia: [ 87, 13, 33, 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAZO',
                    code: [ 316 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUENTE',
                    code: [ 220 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294 ],
                    family: [ 35, 38, 42, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294 ],
                        Familia: [ 37, 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET TOALLAS',
                    code: [ 724 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1568, 1577 ],
                    family: [ 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1577 ],
                        Familia: [ 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FALDA KDS',
                    code: [ 862 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 56 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 56 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MARCOS KDS',
                    code: [ 845 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 45 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 45 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'POSAVASOS',
                    code: [ 25 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 25 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 25 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'MONO',
                    code: [ 600 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISA BEBÉ',
                    code: [ 580 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHARA SERVIR',
                    code: [ 312 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAJAS',
                    code: [ 99 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1560, 1567, 1568, 1294 ],
                    family: [ 79, 57, 82, 44, 3, 41 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1557 ],
                        Familia: [ 57, 82, 3, 41, 44, 79 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUCHILLO MANTEQ',
                    code: [ 526 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 42, 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CHAMPÚ',
                    code: [ 789 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COSMETICA',
                    code: [ 134 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1577 ],
                    family: [ 67, 68, 35, 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1577 ],
                        Familia: [ 67, 64, 68, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISON KDS',
                    code: [ 853 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 99 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SILLAS.TABURETE',
                    code: [ 73 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1294, 1557, 1567, 1568, 1577, 1295 ],
                    family: [ 73, 80, 72, 77 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1560, 1294, 1295, 1577, 1557 ],
                        Familia: [ 80, 73, 77, 72 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COFRE AROMATICO',
                    code: [ 747 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67, 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67, 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.MESA KDS',
                    code: [ 842 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 42 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ART "OUTLET"',
                    code: [ 167 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1295 ],
                    family: [
                        34,
                        6,
                        41,
                        2,
                        35,
                        98,
                        60,
                        22,
                        92,
                        8,
                        29,
                        93,
                        53,
                        44,
                        5,
                        88,
                        67,
                        91,
                        36,
                        25,
                        38,
                        89,
                        43,
                        40,
                        73,
                        49,
                        32,
                        39,
                        26,
                        21,
                        45,
                        48,
                        65,
                        4,
                        99,
                        46,
                        14
                    ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295 ],
                        Familia: [
                            8,
                            93,
                            73,
                            67,
                            43,
                            41,
                            65,
                            6,
                            44,
                            48,
                            14,
                            4,
                            40,
                            53,
                            39,
                            45,
                            29,
                            88,
                            60,
                            38,
                            36,
                            92,
                            34,
                            46,
                            5,
                            99,
                            2,
                            26,
                            32,
                            21,
                            25,
                            22,
                            89,
                            91,
                            49,
                            35,
                            98
                        ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FLOR ARTIFICIAL',
                    code: [ 746 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560 ],
                    family: [ 43 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560 ],
                        Familia: [ 43 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUENTE HORNO',
                    code: [ 757 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 35, 41 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 41, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANA ENCI KDS',
                    code: [ 889 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SPRAY TEJIDO',
                    code: [ 721 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TETERA',
                    code: [ 545 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 35, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CORTINAS DECO',
                    code: [ 32 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1557, 1295 ],
                    family: [ 32 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1560, 1295, 1557 ],
                        Familia: [ 32 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR POSTRE',
                    code: [ 309 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PANTALÓN',
                    code: [ 122 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1295, 1567 ],
                    family: [ 95, 97, 66, 87, 4, 69 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1295, 1557 ],
                        Familia: [ 87, 95, 66, 4, 69, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA NORDICA',
                    code: [ 88 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1295, 1577 ],
                    family: [ 1, 88 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1295, 1577, 1557 ],
                        Familia: [ 1, 88 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CINTA DE PELO',
                    code: [ 722 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1568 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1557 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOLSA DE AGUA',
                    code: [ 461 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'BOTE BAÑO KDS',
                    code: [ 916 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 44 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 44 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAÑO DE COCINA',
                    code: [ 26 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1294, 1295 ],
                    family: [ 26, 27, 87 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1294, 1295 ],
                        Familia: [ 87, 27, 26 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'AMBIENTADOR',
                    code: [ 707 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 67 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 67 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'UNIFORMES',
                    code: [ 136 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1414, 1295 ],
                    family: [ 87, 27, 96 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1295 ],
                        Familia: [ 87, 27, 96 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SABANA BAJ KDS',
                    code: [ 890 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUBITERA',
                    code: [ 473 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 38, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 38 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'KIDS.ACC.TEXTIL',
                    code: [ 141 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SET CUCHARITAS',
                    code: [ 567 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'VARIOS',
                    code: [ 1 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 3, 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 1, 3 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'GEL LIMPIAMANOS',
                    code: [ 793 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.DECORA KDS',
                    code: [ 843 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1559 ],
                    family: [ 43, 20, 42, 52 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1294 ],
                        Familia: [ 52, 43, 42, 20 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CREMA',
                    code: [ 701 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PALA TARTA',
                    code: [ 318 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'JERSEY',
                    code: [ 544 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 70, 78 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 70, 78 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CESTAS',
                    code: [ 49, 144 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1560, 1567, 1568, 1557, 1559, 1295 ],
                    family: [ 49, 3, 60, 77, 43, 53, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568, 1559, 1560, 1295, 1557 ],
                        Familia: [ 3, 43, 42, 77, 53, 60, 49 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SOMBREROS',
                    code: [ 585 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1294, 1568 ],
                    family: [ 14, 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1568, 1294, 1557 ],
                        Familia: [ 14, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CALCETINES',
                    code: [ 539 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557 ],
                    family: [ 66 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1557 ],
                        Familia: [ 66 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FRAGANCIAS',
                    code: [ 66 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559, 1567 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CALCETINES KDS',
                    code: [ 859 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 66, 97 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 66, 97 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUIDADO DE MARM',
                    code: [ 800 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUIDADO DE MADE',
                    code: [ 799 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ACC.MESA',
                    code: [ 42 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1559 ],
                    family: [ 38, 42, 53, 35, 43, 41, 36, 37 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559 ],
                        Familia: [ 43, 41, 37, 42, 53, 38, 36, 35 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DETERGENTE',
                    code: [ 725 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PROTEC.COLCHÓN',
                    code: [ 86 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577 ],
                    family: [ 11 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1577, 1557 ],
                        Familia: [ 11 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMBIADOR VIAJE',
                    code: [ 515 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 14, 92, 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 14, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CORTINAS KDS',
                    code: [ 832 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 32 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 32 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SETS POSAVASOS',
                    code: [ 550 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 25, 39, 42 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 42, 39, 25 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR BRUNCH',
                    code: [ 730 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567 ],
                    family: [ 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567 ],
                        Familia: [ 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CAMISETA BEBÉ',
                    code: [ 118 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294, 1557 ],
                    family: [ 70, 26 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294, 1557 ],
                        Familia: [ 70, 26 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'FUNDA ALMOH KDS',
                    code: [ 891 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 1 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 1 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'INCIENSO',
                    code: [ 704 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 68 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 68 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'RELLENO NÓRDICO',
                    code: [ 10 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1559, 1577 ],
                    family: [ 10, 14 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559, 1577, 1557 ],
                        Familia: [ 10, 14 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ANTIFAZ',
                    code: [ 125 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1567 ],
                    family: [ 14, 9, 8 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1557 ],
                        Familia: [ 8, 14, 9 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'SILLAS.TABU KDS',
                    code: [ 873 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 73, 80 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 80, 73 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'DELANTALES KDS',
                    code: [ 827 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 96, 17, 27 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 27, 96, 17 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'COLEC TOALLAS',
                    code: [ 109 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1557, 1577, 1567, 1295, 1559 ],
                    family: [ 92, 15, 38 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1559, 1295, 1577, 1557 ],
                        Familia: [ 15, 38, 92 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'ALBORNOCES KDS',
                    code: [ 814 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70, 99, 92 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70, 92, 99 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'TENEDOR MES KDS',
                    code: [ 905 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 37, 36 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 37, 36 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CREMA DE MANOS',
                    code: [ 738 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 64 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 64 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'PAPELERIA',
                    code: [ 147 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1567, 1568 ],
                    family: [ 55, 18 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1567, 1568 ],
                        Familia: [ 18, 55 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'CUBREPAÑAL',
                    code: [ 584 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1294 ],
                    family: [ 70 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1294 ],
                        Familia: [ 70 ]
                    }
                },
                {
                    cod_brand: [ 1 ],
                    product: [ 4 ],
                    description: 'LMPIADOR M-USOS',
                    code: [ 774 ],
                    display: true,
                    section: [ 1 ],
                    product_line: [ 1559 ],
                    family: [ 83 ],
                    parents: {
                        Producto: 4,
                        Sección: [ 1 ],
                        Líneas: [ 1559 ],
                        Familia: [ 83 ]
                    }
                }
            ]
        }
    ],
    campaign: [
        {
            year: 2019,
            season: 'I',
            code: 'I2019',
            description: 'I2019',
            display: true
        },
        {
            year: 2019,
            season: 'V',
            code: 'V2019',
            description: 'V2019',
            display: true
        },
        {
            cod_brand: 1,
            year: 2020,
            season: 'I',
            state: 'ACTIVA',
            code: 'I2020',
            description: 'I2020',
            display: true
        },
        {
            cod_brand: 16,
            year: 2020,
            season: 'V',
            state: 'ACTIVA',
            code: 'V2020',
            description: 'V2020',
            display: true
        },
        {
            cod_brand: 16,
            year: 2021,
            season: 'I',
            state: 'ACTIVA',
            code: 'I2021',
            description: 'I2021',
            display: true
        },
        {
            cod_brand: 1,
            year: 2021,
            season: 'V',
            state: 'ACTIVA',
            code: 'V2021',
            description: 'V2021',
            display: true
        }
    ],
    platform: [
        {
            parents: {
                Mercado: 1
            },
            description: 'Alovera',
            header: true,
            display: true,
            code: '1',
            children: [
                {
                    _id: '5e58ef774788cc814dd9dd46',
                    brand: 1,
                    country: 'ES',
                    locations: [ 9700, 9701, 9705, 9706 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.065Z',
                    updated_at: '2020-04-20T10:39:05.849Z',
                    description: 'España',
                    code: 11,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef77875150e77b8875db',
                    brand: 1,
                    country: 'PT',
                    locations: [ 9709, 9710, 9711 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.967Z',
                    updated_at: '2020-04-17T10:52:31.406Z',
                    description: 'Portugal',
                    code: 10,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef77875150b9398875d6',
                    brand: 1,
                    country: 'IE',
                    locations: [ 9725 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.804Z',
                    updated_at: '2021-01-13T12:54:36.591Z',
                    description: 'Irlanda',
                    code: 7,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc4f33d9dd40',
                    brand: 1,
                    country: 'CH',
                    locations: [ 9733 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.955Z',
                    updated_at: '2020-02-28T10:46:14.955Z',
                    description: 'Suiza',
                    code: 39,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc7615d9dd41',
                    brand: 1,
                    country: 'GR',
                    locations: [ 9713 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.957Z',
                    updated_at: '2020-02-28T10:46:14.957Z',
                    description: 'Grecia',
                    code: 9,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc7f94d9dd44',
                    brand: 1,
                    country: 'NO',
                    locations: [ 9730 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.021Z',
                    updated_at: '2020-02-28T10:46:15.021Z',
                    description: 'Noruega',
                    code: 28,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7787515069d18875d5',
                    brand: 1,
                    country: 'MT',
                    locations: [ 10965 ],
                    warehouses: [
                        {
                            code: 'ZARAESCAB',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        },
                        {
                            code: 'ZARAESMAR',
                            main: 0,
                            weight: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.734Z',
                    updated_at: '2020-02-28T10:46:14.734Z',
                    description: 'Malta',
                    code: 46,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f463d325ed91965693b37c0',
                    brand: 1,
                    country: 'AD',
                    locations: [ 13809 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAESMAR',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-26T10:45:06.380Z',
                    updated_at: '2020-08-26T10:45:06.380Z',
                    description: 'Andorra',
                    code: 43,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc99ead9dd48',
                    brand: 1,
                    country: 'AE',
                    locations: [ 13567, 13568 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.074Z',
                    updated_at: '2020-04-06T15:47:18.231Z',
                    description: 'Emiratos árabes',
                    code: 647,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e3840440c8ec88f18000a46',
                    brand: 1,
                    country: 'AL',
                    locations: [ 13797 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-03T15:46:12.326Z',
                    updated_at: '2020-02-03T15:46:12.326Z',
                    description: 'Albania',
                    code: 70,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f993e002dba17572d489b00',
                    brand: 1,
                    country: 'AM',
                    locations: [ 13815 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-10-28T09:46:40.886Z',
                    updated_at: '2020-10-28T09:46:40.886Z',
                    description: 'Armenia',
                    code: 13815,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5fa95c3d0030e0de8a99dbc9',
                    brand: 1,
                    country: 'AZ',
                    locations: [ 13813 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-11-09T15:11:57.151Z',
                    updated_at: '2020-11-09T15:11:57.151Z',
                    description: 'Azerbayan',
                    code: 13813,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e8c6398723c00d72ab0308f',
                    brand: 1,
                    country: 'BA',
                    locations: [ 13798 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-04-07T11:27:20.762Z',
                    updated_at: '2020-04-07T11:27:20.762Z',
                    description: 'Bosnia',
                    code: 93,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7711db0ee8fe7ae0d6',
                    brand: 1,
                    country: 'BH',
                    locations: [ 13694 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.162Z',
                    updated_at: '2020-02-28T10:46:15.162Z',
                    description: 'Bahrain',
                    code: 640,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef778751509a968875e0',
                    brand: 1,
                    country: 'CO',
                    locations: [ 13696 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.144Z',
                    updated_at: '2020-02-28T10:46:15.144Z',
                    description: 'Colombia',
                    code: 480,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f4fb0ff6dba943ebb7da23f',
                    brand: 1,
                    country: 'CR',
                    locations: [ 13802 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-02T14:49:35.780Z',
                    updated_at: '2020-09-02T14:49:35.780Z',
                    description: 'Costa rica',
                    code: 436,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f8ef800552a5266e72d1beb',
                    brand: 1,
                    country: 'CY',
                    locations: [ 10960 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-10-20T14:45:20.499Z',
                    updated_at: '2020-10-20T15:18:28.227Z',
                    description: 'Chipre',
                    code: 1400,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f57a9dc45661f5c00fe7ccc',
                    brand: 1,
                    country: 'DZ',
                    locations: [ 13814 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-08T15:57:16.243Z',
                    updated_at: '2020-09-08T15:57:16.243Z',
                    description: 'Argelia',
                    code: 208,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef77875150ba0e8875e3',
                    brand: 1,
                    country: 'EG',
                    locations: [ 13565 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.263Z',
                    updated_at: '2020-02-28T10:46:15.263Z',
                    description: 'Egipto',
                    code: 220,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5fabcbfa0030e0097799dbd0',
                    brand: 1,
                    country: 'GE',
                    locations: [ 13811 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-11-11T11:33:14.021Z',
                    updated_at: '2020-11-11T11:33:14.021Z',
                    description: 'Georgia',
                    code: 76,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f4fb0b86dba94c63e7da23e',
                    brand: 1,
                    country: 'GT',
                    locations: [ 13804 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-02T14:48:24.576Z',
                    updated_at: '2020-09-02T14:48:24.576Z',
                    description: 'Guatemala',
                    code: 416,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f4fb1646dba942d4c7da241',
                    brand: 1,
                    country: 'HN',
                    locations: [ 13805 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-02T14:51:16.788Z',
                    updated_at: '2020-09-02T14:51:16.788Z',
                    description: 'Honduras',
                    code: 424,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7787515065ec8875f2',
                    brand: 1,
                    country: 'ID',
                    locations: [ 13570 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.618Z',
                    updated_at: '2020-02-28T10:46:15.618Z',
                    description: 'Indonesia',
                    code: 700,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7787515004458875df',
                    brand: 1,
                    country: 'IL',
                    locations: [ 13562 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.063Z',
                    updated_at: '2020-04-01T08:03:40.720Z',
                    description: 'Israel',
                    code: 624,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f993e012dba174a4c489b01',
                    brand: 1,
                    country: 'IS',
                    locations: [ 13819 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-10-28T09:46:41.489Z',
                    updated_at: '2020-10-28T09:46:41.489Z',
                    description: 'Islandia',
                    code: 13819,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc1473d9dd4c',
                    brand: 1,
                    country: 'JO',
                    locations: [ 13693 ],
                    warehouses: [],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.175Z',
                    updated_at: '2020-02-28T10:46:15.175Z',
                    description: 'Jordania',
                    code: 628,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7787515079648875e5',
                    brand: 1,
                    country: 'KW',
                    locations: [ 13692 ],
                    warehouses: [],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.327Z',
                    updated_at: '2020-02-28T10:46:15.327Z',
                    description: 'Kuwait',
                    code: 636,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f57aaee45661f428bfe7ccd',
                    brand: 1,
                    country: 'KZ',
                    locations: [ 13810 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-08T16:01:50.017Z',
                    updated_at: '2020-09-08T16:01:50.017Z',
                    description: 'Kazajistan',
                    code: 79,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cc2ec8d9dd49',
                    brand: 1,
                    country: 'LB',
                    locations: [ 13569 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.175Z',
                    updated_at: '2020-02-28T10:46:15.175Z',
                    description: 'Líbano',
                    code: 604,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58efa687515013ed88760e',
                    brand: 1,
                    country: 'MA',
                    locations: [ 13566 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:47:02.296Z',
                    updated_at: '2020-02-28T10:47:02.296Z',
                    description: 'Marruecos',
                    code: 204,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f21321bccca311d74c477a4',
                    brand: 1,
                    country: 'ME',
                    locations: [ 13818 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-29T08:23:55.536Z',
                    updated_at: '2020-07-29T08:23:55.536Z',
                    description: 'Montenegro',
                    code: 97,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f2131ffccca3128f9c477a3',
                    brand: 1,
                    country: 'MK',
                    locations: [ 13812 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-29T08:23:27.614Z',
                    updated_at: '2020-07-29T08:23:27.614Z',
                    description: 'Macedonia',
                    code: 96,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f4fb1266dba9449a17da240',
                    brand: 1,
                    country: 'NI',
                    locations: [ 13806 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-02T14:50:14.031Z',
                    updated_at: '2020-09-02T14:50:14.031Z',
                    description: 'Nicaragua',
                    code: 432,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58efa64788cc6e9cd9dd77',
                    brand: 1,
                    country: 'OM',
                    locations: [ 13695 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:47:02.462Z',
                    updated_at: '2020-02-28T10:47:02.462Z',
                    description: 'Oman',
                    code: 649,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5fa1751d2dba17302e489b02',
                    brand: 1,
                    country: 'PA',
                    locations: [ 13807 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-11-03T15:19:57.212Z',
                    updated_at: '2020-11-03T15:19:57.212Z',
                    description: 'Panama',
                    code: 13807,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef784788cc3921d9dd6a',
                    brand: 1,
                    country: 'PH',
                    locations: [ 13697 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.729Z',
                    updated_at: '2020-02-28T10:46:15.729Z',
                    description: 'Filipinas',
                    code: 708,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5fa1751e2dba171e81489b03',
                    brand: 1,
                    country: 'PR',
                    locations: [ 13824 ],
                    warehouses: [
                        {
                            code: 'ZARAESMAR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-11-03T15:19:58.322Z',
                    updated_at: '2020-11-03T15:19:58.322Z',
                    description: 'Puerto rico',
                    code: 13824,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef7711db0efdcc7ae0d2',
                    brand: 1,
                    country: 'QA',
                    locations: [ 13691 ],
                    warehouses: [],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.042Z',
                    updated_at: '2020-02-28T10:46:15.042Z',
                    description: 'Qatar',
                    code: 644,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef77875150e1258875e1',
                    brand: 1,
                    country: 'RS',
                    locations: [ 13563 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.168Z',
                    updated_at: '2020-02-28T10:46:15.168Z',
                    description: 'Serbia',
                    code: 98,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e58ef774788cca792d9dd50',
                    brand: 1,
                    country: 'SA',
                    locations: [ 13564 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.407Z',
                    updated_at: '2020-02-28T10:46:15.407Z',
                    description: 'Arabia saudí',
                    code: 632,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f6a2b66767a79402c6a71cd',
                    brand: 1,
                    country: 'SV',
                    locations: [ 13803 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-22T16:50:46.546Z',
                    updated_at: '2020-09-22T16:50:46.546Z',
                    description: 'El salvador',
                    code: 428,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f43cd118e9ad74b6b534a18',
                    brand: 1,
                    country: 'TJ',
                    locations: [ 1321 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:22:09.127Z',
                    updated_at: '2020-08-24T14:22:09.127Z',
                    description: 'Tajikistan',
                    code: 1321,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f463d675ed919503b3b37c1',
                    brand: 1,
                    country: 'TN',
                    locations: [ 13808 ],
                    warehouses: [],
                    deleted: false,
                    created_at: '2020-08-26T10:45:59.526Z',
                    updated_at: '2020-08-26T10:45:59.526Z',
                    description: 'Tunez',
                    code: 212,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5e38403a0c8ec82230000a45',
                    brand: 1,
                    country: 'XK',
                    locations: [ 13799 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-03T15:46:02.936Z',
                    updated_at: '2020-02-03T15:46:02.936Z',
                    description: 'Kosovo',
                    code: 95,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f43ccde8e9ad7b4b1534a15',
                    brand: 1,
                    country: 'NF',
                    locations: [ 1318 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:21:17.991Z',
                    updated_at: '2020-08-24T14:21:17.991Z',
                    description: 'Norfolk island',
                    code: 1318,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                },
                {
                    _id: '5f43cd058e9ad71fb1534a17',
                    brand: 1,
                    country: 'PS',
                    locations: [ 1320 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:21:56.872Z',
                    updated_at: '2020-08-24T14:21:56.872Z',
                    description: 'Palestine',
                    code: 1320,
                    display: true,
                    market: 1,
                    parents: {
                        Mercado: 1
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 2
            },
            description: 'Mainland china',
            header: true,
            display: true,
            code: '2',
            children: [
                {
                    _id: '5f75fe91fc36e0d09f914c7d',
                    brand: 1,
                    country: 'CN',
                    locations: [ 14504 ],
                    warehouses: [
                        {
                            code: 'ZHBYZARACNBAO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-10-01T16:06:41.851Z',
                    updated_at: '2020-10-08T13:53:22.953Z',
                    description: '(cn) zara home by zara',
                    code: -22,
                    display: true,
                    market: 2,
                    parents: {
                        Mercado: 2
                    }
                },
                {
                    _id: '5e58ef7711db0e1f557ae0cc',
                    brand: 1,
                    country: 'CN',
                    locations: [ 9743 ],
                    warehouses: [
                        {
                            code: 'ZARACNSON2',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNSON',
                            main: 1,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNDNG',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNJIN',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNBEI',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'FFMZARAXT',
                            main: 0,
                            weight: 0.2
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.864Z',
                    updated_at: '2020-08-13T07:50:11.405Z',
                    description: 'Tmall',
                    code: -1,
                    display: true,
                    market: 2,
                    parents: {
                        Mercado: 2
                    }
                },
                {
                    _id: '5e58ef7711db0ec3ff7ae0ec',
                    brand: 1,
                    country: 'CN',
                    locations: [ 9738 ],
                    warehouses: [
                        {
                            code: 'ZARACNSON2',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNSON',
                            main: 1,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNDNG',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNJIN',
                            main: 0,
                            weight: 0.2
                        },
                        {
                            code: 'ZARACNBEI',
                            main: 0,
                            weight: 0.2
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.608Z',
                    updated_at: '2020-06-17T13:12:00.320Z',
                    description: 'Mainland china',
                    code: 720,
                    display: true,
                    market: 2,
                    parents: {
                        Mercado: 2
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 3
            },
            description: 'Polonia 2',
            header: true,
            display: true,
            code: '3',
            children: [
                {
                    _id: '5f08337ffc1c514403c03ecf',
                    brand: 1,
                    country: 'NL',
                    locations: [ 13971 ],
                    warehouses: [
                        {
                            code: 'ZH-EWMS-PLPL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-10T09:23:11.053Z',
                    updated_at: '2020-09-02T14:05:38.883Z',
                    description: '(nl) zara home by zara',
                    code: -18,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7711db0e7d3c7ae0cd',
                    brand: 1,
                    country: 'NL',
                    locations: [ 9727 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.862Z',
                    updated_at: '2020-02-28T10:46:14.862Z',
                    description: 'Holanda',
                    code: 3,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5f08335cfc1c519d68c03ece',
                    brand: 1,
                    country: 'PL',
                    locations: [ 13973 ],
                    warehouses: [
                        {
                            code: 'ZH-EWMS-PLPL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-10T09:22:36.774Z',
                    updated_at: '2020-09-02T14:05:34.960Z',
                    description: '(pl) zara home by zara',
                    code: -19,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7787515054058875d8',
                    brand: 1,
                    country: 'PL',
                    locations: [ 9737 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.861Z',
                    updated_at: '2020-02-28T10:46:14.861Z',
                    description: 'Polonia',
                    code: 60,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef778751500b3d8875d9',
                    brand: 1,
                    country: 'SE',
                    locations: [ 9729 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.897Z',
                    updated_at: '2020-02-28T10:46:14.897Z',
                    description: 'Suecia',
                    code: 30,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef774788ccdb3ad9dd43',
                    brand: 1,
                    country: 'AT',
                    locations: [ 9724 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.021Z',
                    updated_at: '2020-02-28T10:46:15.021Z',
                    description: 'Austria',
                    code: 38,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5f083334fc1c5150cfc03ecd',
                    brand: 1,
                    country: 'BE',
                    locations: [ 13972 ],
                    warehouses: [
                        {
                            code: 'ZH-EWMS-PLPL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-10T09:21:56.373Z',
                    updated_at: '2020-09-02T14:05:27.433Z',
                    description: '(be) zara home by zara',
                    code: -20,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef77875150c9468875dc',
                    brand: 1,
                    country: 'BE',
                    locations: [ 9726 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.016Z',
                    updated_at: '2020-02-28T10:46:15.016Z',
                    description: 'Bélgica',
                    code: 2,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef774788ccc7b9d9dd3d',
                    brand: 1,
                    country: 'DK',
                    locations: [ 9731 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.806Z',
                    updated_at: '2020-02-28T10:46:14.806Z',
                    description: 'Dinamarca',
                    code: 8,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef77875150f68f8875f5',
                    brand: 1,
                    country: 'HR',
                    locations: [ 9699 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.619Z',
                    updated_at: '2020-02-28T10:46:15.619Z',
                    description: 'Croacia',
                    code: 92,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7711db0e1bef7ae0d3',
                    brand: 1,
                    country: 'SK',
                    locations: [ 10959 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.124Z',
                    updated_at: '2020-02-28T10:46:15.124Z',
                    description: 'Eslovaquia',
                    code: 63,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7711db0ebfd57ae0dc',
                    brand: 1,
                    country: 'CZ',
                    locations: [ 10958 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.296Z',
                    updated_at: '2020-02-28T10:46:15.296Z',
                    description: 'Rep. checa',
                    code: 61,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7711db0e4a817ae0ce',
                    brand: 1,
                    country: 'HU',
                    locations: [ 10957 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.882Z',
                    updated_at: '2020-02-28T10:46:14.882Z',
                    description: 'Hungría',
                    code: 64,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef778751507d658875d7',
                    brand: 1,
                    country: 'FI',
                    locations: [ 10956 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.830Z',
                    updated_at: '2021-01-13T10:42:19.688Z',
                    description: 'Finlandia',
                    code: 32,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef7711db0e36b47ae0db',
                    brand: 1,
                    country: 'LU',
                    locations: [ 9728 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 0,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.222Z',
                    updated_at: '2020-02-28T10:46:15.222Z',
                    description: 'Luxemburgo',
                    code: 18,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e58ef778751505b958875e4',
                    brand: 1,
                    country: 'SI',
                    locations: [ 10961 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.302Z',
                    updated_at: '2020-02-28T10:46:15.302Z',
                    description: 'Eslovenia',
                    code: 91,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                },
                {
                    _id: '5e4eab2887515063d58875c9',
                    brand: 1,
                    country: 'UA',
                    locations: [ 13561 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-20T15:52:08.941Z',
                    updated_at: '2021-01-11T12:14:49.319Z',
                    description: 'Ucrania',
                    code: 72,
                    display: true,
                    market: 3,
                    parents: {
                        Mercado: 3
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 5
            },
            description: 'Corea',
            header: true,
            display: true,
            code: '5',
            children: [
                {
                    _id: '5e58ef788751507eac887601',
                    brand: 1,
                    country: 'KR',
                    locations: [ 9742 ],
                    warehouses: [
                        {
                            code: 'ZARAKOR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.772Z',
                    updated_at: '2020-02-28T10:46:15.772Z',
                    description: 'Corea del sur',
                    code: 728,
                    display: true,
                    market: 5,
                    parents: {
                        Mercado: 5
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 6
            },
            description: 'Japon',
            header: true,
            display: true,
            code: '6',
            children: [
                {
                    _id: '5f7f1c27fa19cd60c6898728',
                    brand: 1,
                    country: 'JP',
                    locations: [ 14511 ],
                    warehouses: [
                        {
                            code: 'ZHBYZARAJPICHI',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-10-08T14:03:19.317Z',
                    updated_at: '2020-10-08T14:03:19.317Z',
                    description: '(jp) zara home by zara',
                    code: -23,
                    display: true,
                    market: 6,
                    parents: {
                        Mercado: 6
                    }
                },
                {
                    _id: '5e58ef778751507cc78875e6',
                    brand: 1,
                    country: 'JP',
                    locations: [ 9735 ],
                    warehouses: [
                        {
                            code: 'ZARAJPTYO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.325Z',
                    updated_at: '2020-02-28T10:46:15.325Z',
                    description: 'Japón',
                    code: 732,
                    display: true,
                    market: 6,
                    parents: {
                        Mercado: 6
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 7
            },
            description: 'México',
            header: true,
            display: true,
            code: '7',
            children: [
                {
                    _id: '6050c36594093b8a70c842cc',
                    brand: 1,
                    country: 'MX',
                    locations: [ 14649 ],
                    warehouses: [
                        {
                            code: 'ZHBYZARAMXTUL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2021-03-16T14:40:37.690Z',
                    updated_at: '2021-03-16T14:40:37.690Z',
                    description: '(mx) zh by zara',
                    code: -25,
                    display: true,
                    market: 7,
                    parents: {
                        Mercado: 7
                    }
                },
                {
                    _id: '5e58efa64788ccc207d9dd76',
                    brand: 1,
                    country: 'MX',
                    locations: [ 9741 ],
                    warehouses: [
                        {
                            code: 'ZARAMEX',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:47:02.282Z',
                    updated_at: '2020-02-28T10:47:02.282Z',
                    description: 'México',
                    code: 412,
                    display: true,
                    market: 7,
                    parents: {
                        Mercado: 7
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 8
            },
            description: 'Polonia',
            header: true,
            display: true,
            code: '8',
            children: [
                {
                    _id: '5f50af9c961162403a9a7054',
                    brand: 1,
                    country: 'DE',
                    locations: [ 14503 ],
                    warehouses: [
                        {
                            code: 'ZH-EWMS-PLPL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-09-03T08:55:56.924Z',
                    updated_at: '2020-09-03T08:55:56.924Z',
                    description: '(de) zara home by zara',
                    code: -17,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef774788cc1fb4d9dd45',
                    brand: 1,
                    country: 'DE',
                    locations: [ 9704 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.048Z',
                    updated_at: '2020-02-28T10:46:15.048Z',
                    description: 'Alemania',
                    code: 4,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef774788cce264d9dd56',
                    brand: 1,
                    country: 'RO',
                    locations: [ 9695 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.472Z',
                    updated_at: '2020-02-28T10:46:15.472Z',
                    description: 'Rumanía',
                    code: 66,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef77875150c75f8875f0',
                    brand: 1,
                    country: 'BG',
                    locations: [ 10955 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.617Z',
                    updated_at: '2020-02-28T10:46:15.617Z',
                    description: 'Bulgaria',
                    code: 68,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef778751501c9d8875ef',
                    brand: 1,
                    country: 'LT',
                    locations: [ 10964 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.615Z',
                    updated_at: '2020-02-28T10:46:15.615Z',
                    description: 'Lituania',
                    code: 55,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef774788cc2f10d9dd3e',
                    brand: 1,
                    country: 'LV',
                    locations: [ 10963 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.841Z',
                    updated_at: '2020-02-28T10:46:14.841Z',
                    description: 'Letonia',
                    code: 54,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                },
                {
                    _id: '5e58ef774788cc4cc8d9dd4b',
                    brand: 1,
                    country: 'EE',
                    locations: [ 10962 ],
                    warehouses: [
                        {
                            code: 'ZARAPLSTR',
                            weight: 0,
                            main: 0
                        },
                        {
                            code: 'ZARAPOL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.176Z',
                    updated_at: '2020-02-28T10:46:15.176Z',
                    description: 'Estonia',
                    code: 53,
                    display: true,
                    market: 8,
                    parents: {
                        Mercado: 8
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 9
            },
            description: 'Rusia',
            header: true,
            display: true,
            code: '9',
            children: [
                {
                    _id: '5e58ef774788cc51dbd9dd42',
                    brand: 1,
                    country: 'RU',
                    locations: [ 9712 ],
                    warehouses: [
                        {
                            code: 'ZARARUS',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.956Z',
                    updated_at: '2020-02-28T10:46:14.956Z',
                    description: 'Rusia',
                    code: 75,
                    display: true,
                    market: 9,
                    parents: {
                        Mercado: 9
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 10
            },
            description: 'Usa',
            header: true,
            display: true,
            code: '10',
            children: [
                {
                    _id: '5e58ef7711db0e5c237ae0d0',
                    brand: 1,
                    country: 'US',
                    locations: [ 13597 ],
                    warehouses: [
                        {
                            code: 'ZARAUSEAS',
                            weight: 0.7,
                            main: 1
                        },
                        {
                            code: 'ZARAUSRIA',
                            weight: 0.3,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.940Z',
                    updated_at: '2020-02-28T10:46:14.940Z',
                    description: 'Instagram usa',
                    code: -16,
                    display: true,
                    market: 10,
                    parents: {
                        Mercado: 10
                    }
                },
                {
                    _id: '5e58ef774788cc583ad9dd53',
                    brand: 1,
                    country: 'US',
                    locations: [ 9703 ],
                    warehouses: [
                        {
                            code: 'ZARAUSEAS',
                            weight: 0.7,
                            main: 1
                        },
                        {
                            code: 'ZARAUSRIA',
                            weight: 0.3,
                            main: 0
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.471Z',
                    updated_at: '2020-02-28T10:46:15.471Z',
                    description: 'U.s.a.',
                    code: 400,
                    display: true,
                    market: 10,
                    parents: {
                        Mercado: 10
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 11
            },
            description: 'Taiwan, china',
            header: true,
            display: true,
            code: '11',
            children: [
                {
                    _id: '5e58efa64788cc20a5d9dd75',
                    brand: 1,
                    country: 'TW',
                    locations: [ 10272 ],
                    warehouses: [
                        {
                            code: 'ZARATWTAO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:47:02.220Z',
                    updated_at: '2020-02-28T10:47:02.220Z',
                    description: 'Taiwan, china',
                    code: 736,
                    display: true,
                    market: 11,
                    parents: {
                        Mercado: 11
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 12
            },
            description: 'Francia',
            header: true,
            display: true,
            code: '12',
            children: [
                {
                    _id: '5f072791fc1c51ac93c03ecc',
                    brand: 1,
                    country: 'FR',
                    locations: [ 9702 ],
                    warehouses: [
                        {
                            code: 'ZARAFRBRE',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-09T14:20:01.148Z',
                    updated_at: '2020-07-09T14:20:01.148Z',
                    description: 'Francia',
                    code: 1,
                    display: true,
                    market: 12,
                    parents: {
                        Mercado: 12
                    }
                },
                {
                    _id: '5e58ef7711db0e75aa7ae0e6',
                    brand: 1,
                    country: 'MC',
                    locations: [ 9734 ],
                    warehouses: [
                        {
                            code: 'ZARAFRBRE',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.560Z',
                    updated_at: '2020-02-28T10:46:15.560Z',
                    description: 'Mónaco',
                    code: 101,
                    display: true,
                    market: 12,
                    parents: {
                        Mercado: 12
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 13
            },
            description: 'Marchamalo sur',
            header: true,
            display: true,
            code: '13',
            children: [
                {
                    _id: '5e5d1d808c3cfcdadfdbce9e',
                    brand: 16,
                    country: 'PE',
                    locations: [ 13801 ],
                    warehouses: [
                        {
                            code: 'ZARAESMARSUR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-03-02T14:51:44.218Z',
                    updated_at: '2020-09-11T10:23:43.794Z',
                    description: 'Perú',
                    code: 504,
                    display: true,
                    market: 13,
                    parents: {
                        Mercado: 13
                    }
                },
                {
                    _id: '5e5d1d4e8c3cfc434cdbce9c',
                    brand: 16,
                    country: 'PY',
                    locations: [ 13821 ],
                    warehouses: [
                        {
                            code: 'ZARAESMARSUR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-03-02T14:50:54.400Z',
                    updated_at: '2020-09-11T10:23:21.872Z',
                    description: 'Paraguay',
                    code: 520,
                    display: true,
                    market: 13,
                    parents: {
                        Mercado: 13
                    }
                },
                {
                    _id: '5e5d1d628c3cfc557bdbce9d',
                    brand: 16,
                    country: 'UY',
                    locations: [ 13822 ],
                    warehouses: [
                        {
                            code: 'ZARAESMARSUR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-03-02T14:51:14.773Z',
                    updated_at: '2020-09-11T10:23:25.245Z',
                    description: 'Uruguay',
                    code: 524,
                    display: true,
                    market: 13,
                    parents: {
                        Mercado: 13
                    }
                },
                {
                    _id: '5e58ef7711db0e326a7ae0d8',
                    brand: 16,
                    country: 'ZA',
                    locations: [ 13571 ],
                    warehouses: [
                        {
                            code: 'ZARAESMARSUR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.161Z',
                    updated_at: '2020-02-28T10:46:15.161Z',
                    description: 'Sudáfrica',
                    code: 388,
                    display: true,
                    market: 13,
                    parents: {
                        Mercado: 13
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 100
            },
            description: 'Canada',
            header: true,
            display: true,
            code: '100',
            children: [
                {
                    _id: '5e58ef7711db0e597b7ae0e8',
                    brand: 1,
                    country: 'CA',
                    locations: [ 9739 ],
                    warehouses: [
                        {
                            code: 'ZARACATOR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.611Z',
                    updated_at: '2020-02-28T10:46:15.611Z',
                    description: 'Canadá',
                    code: 404,
                    display: true,
                    market: 100,
                    parents: {
                        Mercado: 100
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 110
            },
            description: 'Turquia',
            header: true,
            display: true,
            code: '110',
            children: [
                {
                    _id: '5e58ef7811db0e99a67ae0fc',
                    brand: 1,
                    country: 'TR',
                    locations: [ 9694 ],
                    warehouses: [
                        {
                            code: 'ZARATRIST',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.770Z',
                    updated_at: '2020-02-28T10:46:15.770Z',
                    description: 'Turquía',
                    code: 52,
                    display: true,
                    market: 110,
                    parents: {
                        Mercado: 110
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 114
            },
            description: 'Northampton',
            header: true,
            display: true,
            code: '114',
            children: [
                {
                    _id: '5df9f745a0399e3ea7ef28da',
                    brand: 1,
                    country: 'GB',
                    locations: [ 13737 ],
                    warehouses: [
                        {
                            code: 'ZH-EWMS-GBNO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2019-12-18T09:54:13.325Z',
                    updated_at: '2019-12-18T09:54:13.325Z',
                    description: '(uk) zara home by zara',
                    code: -21,
                    display: true,
                    market: 114,
                    parents: {
                        Mercado: 114
                    }
                },
                {
                    _id: '5e58ef7711db0e25137ae0cf',
                    brand: 1,
                    country: 'GB',
                    locations: [ 9707 ],
                    warehouses: [
                        {
                            code: 'ZARAGBNOR',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.941Z',
                    updated_at: '2020-02-28T10:46:14.941Z',
                    description: 'Reino unido',
                    code: 6,
                    display: true,
                    market: 114,
                    parents: {
                        Mercado: 114
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 119
            },
            description: 'Hong kong sar',
            header: true,
            display: true,
            code: '119',
            children: [
                {
                    _id: '6050c365075f1d52ffa4e9c7',
                    brand: 1,
                    country: 'HK',
                    locations: [ 14662 ],
                    warehouses: [
                        {
                            code: 'ZHBYZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2021-03-16T14:40:37.269Z',
                    updated_at: '2021-03-16T14:40:37.269Z',
                    description: '(hk) zh by zara',
                    code: -24,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef7711db0e840e7ae0da',
                    brand: 1,
                    country: 'HK',
                    locations: [ 10270 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.218Z',
                    updated_at: '2020-02-28T10:46:15.218Z',
                    description: 'Hong kong sar',
                    code: 740,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef778751509b2a8875de',
                    brand: 1,
                    country: 'SG',
                    locations: [ 12075 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.063Z',
                    updated_at: '2020-02-28T10:46:15.063Z',
                    description: 'Singapur',
                    code: 706,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef7711db0e9ffc7ae0d5',
                    brand: 1,
                    country: 'TH',
                    locations: [ 12077 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.163Z',
                    updated_at: '2020-02-28T10:46:15.163Z',
                    description: 'Thailandia',
                    code: 680,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef774788ccf65cd9dd4a',
                    brand: 1,
                    country: 'VN',
                    locations: [ 12078 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.177Z',
                    updated_at: '2020-02-28T10:46:15.177Z',
                    description: 'Vietnam',
                    code: 690,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef7711db0e06117ae0d4',
                    brand: 1,
                    country: 'MY',
                    locations: [ 12076 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.123Z',
                    updated_at: '2020-02-28T10:46:15.123Z',
                    description: 'Malasia',
                    code: 701,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                },
                {
                    _id: '5e58ef7787515066828875fa',
                    brand: 1,
                    country: 'MO',
                    locations: [ 9628 ],
                    warehouses: [
                        {
                            code: 'ZARAHKSHA',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.652Z',
                    updated_at: '2020-02-28T10:46:15.652Z',
                    description: 'Macao sar',
                    code: 743,
                    display: true,
                    market: 119,
                    parents: {
                        Mercado: 119
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 130
            },
            description: 'India',
            header: true,
            display: true,
            code: '130',
            children: [
                {
                    _id: '5e58ef774788ccb75bd9dd4f',
                    brand: 1,
                    country: 'IN',
                    locations: [ 12140 ],
                    warehouses: [
                        {
                            code: 'ZARAINLUH',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.243Z',
                    updated_at: '2020-02-28T10:46:15.243Z',
                    description: 'India',
                    code: 664,
                    display: true,
                    market: 130,
                    parents: {
                        Mercado: 130
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 141
            },
            description: 'Australia',
            header: true,
            display: true,
            code: '141',
            children: [
                {
                    _id: '5e58ef7811db0e30257ae0f8',
                    brand: 16,
                    country: 'AU',
                    locations: [ 12612 ],
                    warehouses: [
                        {
                            code: 'ZARAAUSYD',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.767Z',
                    updated_at: '2020-02-28T10:46:15.767Z',
                    description: 'Australia',
                    code: 800,
                    display: true,
                    market: 141,
                    parents: {
                        Mercado: 141
                    }
                },
                {
                    _id: '5e58ef77875150771e8875da',
                    brand: 16,
                    country: 'NZ',
                    locations: [ 12613 ],
                    warehouses: [
                        {
                            code: 'ZARAAUSYD',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:14.942Z',
                    updated_at: '2020-02-28T10:46:14.942Z',
                    description: 'Nueva zelanda',
                    code: 804,
                    display: true,
                    market: 141,
                    parents: {
                        Mercado: 141
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 145
            },
            description: 'Italia',
            header: true,
            display: true,
            code: '145',
            children: [
                {
                    _id: '5e58efa68751506b9488760f',
                    brand: 1,
                    country: 'IT',
                    locations: [ 9708 ],
                    warehouses: [
                        {
                            code: 'ZARAITMIL',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:47:02.471Z',
                    updated_at: '2020-02-28T10:47:02.471Z',
                    description: 'Italia',
                    code: 5,
                    display: true,
                    market: 145,
                    parents: {
                        Mercado: 145
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 146
            },
            description: 'Worldwide',
            header: true,
            display: true,
            code: '146',
            children: [
                {
                    _id: '5e676d2e436a615094ff5145',
                    brand: 1,
                    country: 'WW',
                    locations: [ 9771 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-03-10T10:34:22.888Z',
                    updated_at: '2020-03-10T10:34:22.888Z',
                    description: '.com internacional',
                    code: 999,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e45297ae0d1',
                    brand: 1,
                    country: 'AG',
                    locations: [ 1200 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.042Z',
                    updated_at: '2020-02-28T10:46:15.042Z',
                    description: 'Antigua barbuda',
                    code: 1200,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc58ead9dd5b',
                    brand: 1,
                    country: 'AO',
                    locations: [ 1202 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.540Z',
                    updated_at: '2020-02-28T10:46:15.540Z',
                    description: 'Angola',
                    code: 1202,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515099fd8875dd',
                    brand: 1,
                    country: 'AS',
                    locations: [ 1203 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.031Z',
                    updated_at: '2020-02-28T10:46:15.031Z',
                    description: 'Samoa americana',
                    code: 1203,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef778751503b918875f9',
                    brand: 1,
                    country: 'BB',
                    locations: [ 1205 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.649Z',
                    updated_at: '2020-02-28T10:46:15.649Z',
                    description: 'Barbados',
                    code: 1205,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e2d927ae0de',
                    brand: 1,
                    country: 'BF',
                    locations: [ 1206 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.297Z',
                    updated_at: '2020-02-28T10:46:15.297Z',
                    description: 'Burkina faso',
                    code: 1206,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc1a05d9dd67',
                    brand: 1,
                    country: 'BJ',
                    locations: [ 1207 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.683Z',
                    updated_at: '2020-02-28T10:46:15.683Z',
                    description: 'Benin',
                    code: 1207,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e57237ae0e9',
                    brand: 1,
                    country: 'BM',
                    locations: [ 1209 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.608Z',
                    updated_at: '2020-02-28T10:46:15.608Z',
                    description: 'Bermudas i.',
                    code: 1209,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc4f67d9dd52',
                    brand: 1,
                    country: 'BN',
                    locations: [ 1210 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.406Z',
                    updated_at: '2020-02-28T10:46:15.406Z',
                    description: 'Brunei darussal',
                    code: 1210,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43cc6d8e9ad73f79534a0e',
                    brand: 1,
                    country: 'BO',
                    locations: [ 1311 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:19:25.132Z',
                    updated_at: '2020-09-17T18:10:30.245Z',
                    description: 'Bolivia',
                    code: 1311,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0eb4847ae0eb',
                    brand: 1,
                    country: 'BS',
                    locations: [ 1212 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.613Z',
                    updated_at: '2020-02-28T10:46:15.613Z',
                    description: 'Bahamas',
                    code: 1212,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751507eb5887600',
                    brand: 1,
                    country: 'BW',
                    locations: [ 1213 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.771Z',
                    updated_at: '2020-02-28T10:46:15.771Z',
                    description: 'Botsuana',
                    code: 1213,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e667a7ae0dd',
                    brand: 1,
                    country: 'BZ',
                    locations: [ 1214 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.296Z',
                    updated_at: '2020-02-28T10:46:15.296Z',
                    description: 'Belice',
                    code: 1214,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150caf8887603',
                    brand: 1,
                    country: 'CG',
                    locations: [ 1216 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.770Z',
                    updated_at: '2020-02-28T10:46:15.770Z',
                    description: 'Congo',
                    code: 1216,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751502e50887602',
                    brand: 1,
                    country: 'CI',
                    locations: [ 1217 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.771Z',
                    updated_at: '2020-02-28T10:46:15.771Z',
                    description: 'Costa de marfil',
                    code: 1217,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc50eed9dd66',
                    brand: 1,
                    country: 'CK',
                    locations: [ 1218 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.687Z',
                    updated_at: '2020-02-28T10:46:15.687Z',
                    description: 'Cook islas',
                    code: 1218,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef778751502ee98875ec',
                    brand: 1,
                    country: 'CM',
                    locations: [ 1219 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.618Z',
                    updated_at: '2020-02-28T10:46:15.618Z',
                    description: 'Camerun',
                    code: 1219,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150f1ed8875f4',
                    brand: 1,
                    country: 'CV',
                    locations: [ 1220 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.650Z',
                    updated_at: '2020-02-28T10:46:15.650Z',
                    description: 'Cabo verde',
                    code: 1220,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e6ab87ae0f0',
                    brand: 1,
                    country: 'CW',
                    locations: [ 1221 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.609Z',
                    updated_at: '2020-02-28T10:46:15.609Z',
                    description: 'Curasao',
                    code: 1221,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc7d1cd9dd6d',
                    brand: 1,
                    country: 'DJ',
                    locations: [ 1223 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.821Z',
                    updated_at: '2020-02-28T10:46:15.821Z',
                    description: 'Djibouti',
                    code: 1223,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e69bd7ae0f7',
                    brand: 1,
                    country: 'DM',
                    locations: [ 1224 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.716Z',
                    updated_at: '2020-02-28T10:46:15.716Z',
                    description: 'Dominica',
                    code: 1224,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43cca38e9ad74770534a11',
                    brand: 1,
                    country: 'ET',
                    locations: [ 1314 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:20:19.252Z',
                    updated_at: '2020-09-17T18:06:29.377Z',
                    description: 'Etiopía',
                    code: 1314,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515032f08875e9',
                    brand: 1,
                    country: 'FJ',
                    locations: [ 1225 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.615Z',
                    updated_at: '2020-02-28T10:46:15.615Z',
                    description: 'Islas fiyi',
                    code: 1225,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc227dd9dd5f',
                    brand: 1,
                    country: 'FM',
                    locations: [ 1226 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.577Z',
                    updated_at: '2020-02-28T10:46:15.577Z',
                    description: 'Micronesia',
                    code: 1226,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0eb53d7ae0f6',
                    brand: 1,
                    country: 'FO',
                    locations: [ 1227 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.720Z',
                    updated_at: '2020-02-28T10:46:15.720Z',
                    description: 'Islas feroe',
                    code: 1227,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150e4018875ea',
                    brand: 1,
                    country: 'GA',
                    locations: [ 1228 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.616Z',
                    updated_at: '2020-02-28T10:46:15.616Z',
                    description: 'Gabon',
                    code: 1228,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ece7e7ae0e3',
                    brand: 1,
                    country: 'GD',
                    locations: [ 1229 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.560Z',
                    updated_at: '2020-02-28T10:46:15.560Z',
                    description: 'Granada',
                    code: 1229,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc141dd9dd70',
                    brand: 1,
                    country: 'GH',
                    locations: [ 1232 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.850Z',
                    updated_at: '2020-02-28T10:46:15.850Z',
                    description: 'Ghana',
                    code: 1232,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751506a7c8875fe',
                    brand: 1,
                    country: 'GL',
                    locations: [ 1233 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.712Z',
                    updated_at: '2020-02-28T10:46:15.712Z',
                    description: 'Groenlandia',
                    code: 1233,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e12ca7ae0f5',
                    brand: 1,
                    country: 'GM',
                    locations: [ 1234 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.716Z',
                    updated_at: '2020-02-28T10:46:15.716Z',
                    description: 'Gambia',
                    code: 1234,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc6756d9dd72',
                    brand: 1,
                    country: 'GP',
                    locations: [ 1235 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.854Z',
                    updated_at: '2020-02-28T10:46:15.854Z',
                    description: 'Guadalupe',
                    code: 1235,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788ccbb66d9dd5c',
                    brand: 1,
                    country: 'GQ',
                    locations: [ 1236 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.541Z',
                    updated_at: '2020-02-28T10:46:15.541Z',
                    description: 'Guinea ecuator.',
                    code: 1236,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc829ad9dd62',
                    brand: 1,
                    country: 'HT',
                    locations: [ 1240 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.577Z',
                    updated_at: '2020-02-28T10:46:15.577Z',
                    description: 'Haiti',
                    code: 1240,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc275ed9dd51',
                    brand: 1,
                    country: 'JE',
                    locations: [ 1241 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.407Z',
                    updated_at: '2020-02-28T10:46:15.407Z',
                    description: 'Jersey',
                    code: 1241,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e2c447ae0e4',
                    brand: 1,
                    country: 'JM',
                    locations: [ 1242 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.559Z',
                    updated_at: '2020-02-28T10:46:15.559Z',
                    description: 'Jamaica',
                    code: 1242,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788ccd8c0d9dd64',
                    brand: 1,
                    country: 'KE',
                    locations: [ 1243 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.579Z',
                    updated_at: '2020-02-28T10:46:15.579Z',
                    description: 'Kenya',
                    code: 1243,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43c99b8e9ad74563534a09',
                    brand: 1,
                    country: 'KG',
                    locations: [ 1308 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:07:23.542Z',
                    updated_at: '2020-09-17T18:07:55.215Z',
                    description: 'Kyrgyzstan',
                    code: 1308,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788ccceb4d9dd59',
                    brand: 1,
                    country: 'KH',
                    locations: [ 1244 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.474Z',
                    updated_at: '2020-02-28T10:46:15.474Z',
                    description: 'Camboya',
                    code: 1244,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cce5b8d9dd5e',
                    brand: 1,
                    country: 'KI',
                    locations: [ 1245 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.541Z',
                    updated_at: '2020-02-28T10:46:15.541Z',
                    description: 'Kiribati',
                    code: 1245,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef778751504f5d8875f1',
                    brand: 1,
                    country: 'KM',
                    locations: [ 1246 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.619Z',
                    updated_at: '2020-02-28T10:46:15.619Z',
                    description: 'Comoras',
                    code: 1246,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e3a8c7ae0ee',
                    brand: 1,
                    country: 'KN',
                    locations: [ 1247 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.611Z',
                    updated_at: '2020-02-28T10:46:15.611Z',
                    description: 'S.cristobal/ni.',
                    code: 1247,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43cc808e9ad707a5534a0f',
                    brand: 1,
                    country: 'LA',
                    locations: [ 1312 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:19:44.164Z',
                    updated_at: '2020-09-17T18:10:16.862Z',
                    description: 'Laos',
                    code: 1312,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150d72f8875ed',
                    brand: 1,
                    country: 'LC',
                    locations: [ 1249 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.622Z',
                    updated_at: '2020-02-28T10:46:15.622Z',
                    description: 'Santa lucia',
                    code: 1249,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150bd948875ee',
                    brand: 1,
                    country: 'LK',
                    locations: [ 1250 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.620Z',
                    updated_at: '2020-02-28T10:46:15.620Z',
                    description: 'Srilanka(ceylan',
                    code: 1250,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc1539d9dd57',
                    brand: 1,
                    country: 'LR',
                    locations: [ 1251 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.472Z',
                    updated_at: '2020-02-28T10:46:15.472Z',
                    description: 'Liberia',
                    code: 1251,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc29b1d9dd63',
                    brand: 1,
                    country: 'LS',
                    locations: [ 1252 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.578Z',
                    updated_at: '2020-02-28T10:46:15.578Z',
                    description: 'Lesotho',
                    code: 1252,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e0a297ae0e2',
                    brand: 1,
                    country: 'MG',
                    locations: [ 1254 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.560Z',
                    updated_at: '2020-02-28T10:46:15.560Z',
                    description: 'Madagascar',
                    code: 1254,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751506ad488760a',
                    brand: 1,
                    country: 'MH',
                    locations: [ 1255 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.883Z',
                    updated_at: '2020-02-28T10:46:15.883Z',
                    description: 'Islas marshall',
                    code: 1255,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc9911d9dd71',
                    brand: 1,
                    country: 'ML',
                    locations: [ 1256 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.850Z',
                    updated_at: '2020-02-28T10:46:15.850Z',
                    description: 'Mali',
                    code: 1256,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43c9b68e9ad72996534a0b',
                    brand: 1,
                    country: 'MN',
                    locations: [ 1309 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:07:50.676Z',
                    updated_at: '2020-09-17T18:08:32.759Z',
                    description: 'Mongolia',
                    code: 1309,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e3e347ae104',
                    brand: 1,
                    country: 'MQ',
                    locations: [ 1258 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.904Z',
                    updated_at: '2020-02-28T10:46:15.904Z',
                    description: 'Martinica',
                    code: 1258,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc3136d9dd6c',
                    brand: 1,
                    country: 'MR',
                    locations: [ 1259 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.730Z',
                    updated_at: '2020-02-28T10:46:15.730Z',
                    description: 'Mauritania',
                    code: 1259,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751502f0c887604',
                    brand: 1,
                    country: 'MU',
                    locations: [ 1261 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.808Z',
                    updated_at: '2020-02-28T10:46:15.808Z',
                    description: 'Mauritius isl.',
                    code: 1261,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc41d6d9dd73',
                    brand: 1,
                    country: 'MV',
                    locations: [ 1262 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.851Z',
                    updated_at: '2020-02-28T10:46:15.851Z',
                    description: 'Maldivas',
                    code: 1262,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc4eb8d9dd61',
                    brand: 1,
                    country: 'MW',
                    locations: [ 1263 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.579Z',
                    updated_at: '2020-02-28T10:46:15.579Z',
                    description: 'Malawi',
                    code: 1263,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e3b8f7ae0e5',
                    brand: 1,
                    country: 'MZ',
                    locations: [ 1264 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.559Z',
                    updated_at: '2020-02-28T10:46:15.559Z',
                    description: 'Mozambique',
                    code: 1264,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150348a88760b',
                    brand: 1,
                    country: 'NA',
                    locations: [ 1265 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.950Z',
                    updated_at: '2020-02-28T10:46:15.950Z',
                    description: 'Namibia',
                    code: 1265,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc4d42d9dd55',
                    brand: 1,
                    country: 'NG',
                    locations: [ 1267 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.473Z',
                    updated_at: '2020-02-28T10:46:15.473Z',
                    description: 'Nigeria',
                    code: 1267,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43c9a48e9ad7fa56534a0a',
                    brand: 1,
                    country: 'NP',
                    locations: [ 1307 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:07:32.861Z',
                    updated_at: '2020-09-17T18:07:15.101Z',
                    description: 'Nepal',
                    code: 1307,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cca75fd9dd65',
                    brand: 1,
                    country: 'NR',
                    locations: [ 1268 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.684Z',
                    updated_at: '2020-02-28T10:46:15.684Z',
                    description: 'Nauru',
                    code: 1268,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e06197ae0ff',
                    brand: 1,
                    country: 'PG',
                    locations: [ 1271 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.823Z',
                    updated_at: '2020-02-28T10:46:15.823Z',
                    description: 'Papua n.guinea',
                    code: 1271,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43c9d18e9ad76a0e534a0c',
                    brand: 1,
                    country: 'PK',
                    locations: [ 1310 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:08:17.810Z',
                    updated_at: '2020-09-17T18:08:57.561Z',
                    description: 'Pakistan',
                    code: 1310,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150009b8875e2',
                    brand: 1,
                    country: 'PW',
                    locations: [ 1273 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.145Z',
                    updated_at: '2020-02-28T10:46:15.145Z',
                    description: 'Palau',
                    code: 1273,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e67c87ae0df',
                    brand: 1,
                    country: 'RE',
                    locations: [ 1274 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.298Z',
                    updated_at: '2020-02-28T10:46:15.298Z',
                    description: 'Reunion',
                    code: 1274,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150e12e8875ff',
                    brand: 1,
                    country: 'RW',
                    locations: [ 1275 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.772Z',
                    updated_at: '2020-02-28T10:46:15.772Z',
                    description: 'Ruanda',
                    code: 1275,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0ee7097ae101',
                    brand: 1,
                    country: 'SB',
                    locations: [ 1276 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.855Z',
                    updated_at: '2020-02-28T10:46:15.855Z',
                    description: 'Islas salomon',
                    code: 1276,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc2c56d9dd47',
                    brand: 1,
                    country: 'SC',
                    locations: [ 1277 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.158Z',
                    updated_at: '2020-02-28T10:46:15.158Z',
                    description: 'Seychelles',
                    code: 1277,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc8e2ed9dd4d',
                    brand: 1,
                    country: 'SL',
                    locations: [ 1279 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.243Z',
                    updated_at: '2020-02-28T10:46:15.243Z',
                    description: 'Sierra leona',
                    code: 1279,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ea5c57ae0f2',
                    brand: 1,
                    country: 'SM',
                    locations: [ 1280 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.660Z',
                    updated_at: '2020-02-28T10:46:15.660Z',
                    description: 'San marino',
                    code: 1280,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150b2ec8875e7',
                    brand: 1,
                    country: 'SN',
                    locations: [ 1281 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.368Z',
                    updated_at: '2020-02-28T10:46:15.368Z',
                    description: 'Senegal',
                    code: 1281,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e4d2d7ae0fb',
                    brand: 1,
                    country: 'SR',
                    locations: [ 1282 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.768Z',
                    updated_at: '2020-02-28T10:46:15.768Z',
                    description: 'Surinam',
                    code: 1282,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc77c0d9dd4e',
                    brand: 1,
                    country: 'ST',
                    locations: [ 1283 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.244Z',
                    updated_at: '2020-02-28T10:46:15.244Z',
                    description: 'S.tome/principe',
                    code: 1283,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e75327ae0ed',
                    brand: 1,
                    country: 'SZ',
                    locations: [ 1285 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.610Z',
                    updated_at: '2020-02-28T10:46:15.610Z',
                    description: 'Swazilandia',
                    code: 1285,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751502cb5887605',
                    brand: 1,
                    country: 'TD',
                    locations: [ 1287 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.808Z',
                    updated_at: '2020-02-28T10:46:15.808Z',
                    description: 'Tchad',
                    code: 1287,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc8e7bd9dd58',
                    brand: 1,
                    country: 'TG',
                    locations: [ 1288 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.471Z',
                    updated_at: '2020-02-28T10:46:15.471Z',
                    description: 'Togo',
                    code: 1288,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e6c0a7ae0f9',
                    brand: 1,
                    country: 'TL',
                    locations: [ 1290 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.767Z',
                    updated_at: '2020-02-28T10:46:15.767Z',
                    description: 'Timor-leste',
                    code: 1290,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515062b28875f3',
                    brand: 1,
                    country: 'TO',
                    locations: [ 1291 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.621Z',
                    updated_at: '2020-02-28T10:46:15.621Z',
                    description: 'Tonga',
                    code: 1291,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0eeaa27ae102',
                    brand: 1,
                    country: 'TT',
                    locations: [ 1292 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.855Z',
                    updated_at: '2020-02-28T10:46:15.855Z',
                    description: 'Trinidad tobago',
                    code: 1292,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788ccb113d9dd69',
                    brand: 1,
                    country: 'TV',
                    locations: [ 1293 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.729Z',
                    updated_at: '2020-02-28T10:46:15.729Z',
                    description: 'Tuvalu',
                    code: 1293,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515064b48875fd',
                    brand: 1,
                    country: 'TZ',
                    locations: [ 1294 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.650Z',
                    updated_at: '2020-02-28T10:46:15.650Z',
                    description: 'Tanzania',
                    code: 1294,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751503cb2887608',
                    brand: 1,
                    country: 'UG',
                    locations: [ 1295 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.828Z',
                    updated_at: '2020-02-28T10:46:15.828Z',
                    description: 'Uganda',
                    code: 1295,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5f43cc948e9ad718b6534a10',
                    brand: 1,
                    country: 'UZ',
                    locations: [ 1313 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-08-24T14:20:04.092Z',
                    updated_at: '2020-09-17T18:09:58.485Z',
                    description: 'Uzbekistan',
                    code: 1313,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e55d57ae103',
                    brand: 1,
                    country: 'VA',
                    locations: [ 1296 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.854Z',
                    updated_at: '2020-02-28T10:46:15.854Z',
                    description: 'Ciudad vaticano',
                    code: 1296,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ec9757ae0f1',
                    brand: 1,
                    country: 'VC',
                    locations: [ 1297 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.660Z',
                    updated_at: '2020-02-28T10:46:15.660Z',
                    description: 'S.vicente y gr.',
                    code: 1297,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc71b6d9dd6f',
                    brand: 1,
                    country: 'VG',
                    locations: [ 1298 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.820Z',
                    updated_at: '2020-02-28T10:46:15.820Z',
                    description: 'I.virgenes brit',
                    code: 1298,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc17f7d9dd60',
                    brand: 1,
                    country: 'VU',
                    locations: [ 1300 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.578Z',
                    updated_at: '2020-02-28T10:46:15.578Z',
                    description: 'Vanuatu',
                    code: 1300,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc2bbfd9dd6b',
                    brand: 1,
                    country: 'WS',
                    locations: [ 1302 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.730Z',
                    updated_at: '2020-02-28T10:46:15.730Z',
                    description: 'Samoa',
                    code: 1302,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e8d1e7ae0ea',
                    brand: 1,
                    country: 'ZM',
                    locations: [ 1305 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.609Z',
                    updated_at: '2020-02-28T10:46:15.609Z',
                    description: 'Zambia',
                    code: 1305,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150073c8875f7',
                    brand: 1,
                    country: 'ZW',
                    locations: [ 1306 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.651Z',
                    updated_at: '2020-02-28T10:46:15.651Z',
                    description: 'Zimbabwe',
                    code: 1306,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515028d08875e8',
                    brand: 1,
                    country: 'AI',
                    locations: [ 1201 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.502Z',
                    updated_at: '2020-02-28T10:46:15.502Z',
                    description: 'Anguilla',
                    code: 1201,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e35917ae0fa',
                    brand: 1,
                    country: 'AX',
                    locations: [ 1204 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.768Z',
                    updated_at: '2020-02-28T10:46:15.768Z',
                    description: 'Aland islands',
                    code: 1204,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150073e8875fc',
                    brand: 1,
                    country: 'BL',
                    locations: [ 1208 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.648Z',
                    updated_at: '2020-02-28T10:46:15.648Z',
                    description: 'St. barthélemy',
                    code: 1208,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0eec5f7ae0ef',
                    brand: 1,
                    country: 'BQ',
                    locations: [ 1211 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.614Z',
                    updated_at: '2020-02-28T10:46:15.614Z',
                    description: 'Bnr, eutt, saba',
                    code: 1211,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ec38f7ae0f3',
                    brand: 1,
                    country: 'CC',
                    locations: [ 1215 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.661Z',
                    updated_at: '2020-02-28T10:46:15.661Z',
                    description: 'Cocos',
                    code: 1215,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e93d07ae0fd',
                    brand: 1,
                    country: 'CX',
                    locations: [ 1222 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.823Z',
                    updated_at: '2020-02-28T10:46:15.823Z',
                    description: 'Christmas iland',
                    code: 1222,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150223c887606',
                    brand: 1,
                    country: 'GF',
                    locations: [ 1230 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.810Z',
                    updated_at: '2020-02-28T10:46:15.810Z',
                    description: 'French guiana',
                    code: 1230,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ee8747ae0e7',
                    brand: 1,
                    country: 'GG',
                    locations: [ 1231 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.609Z',
                    updated_at: '2020-02-28T10:46:15.609Z',
                    description: 'Guernsey',
                    code: 1231,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc3f4bd9dd54',
                    brand: 1,
                    country: 'GS',
                    locations: [ 1237 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.470Z',
                    updated_at: '2020-02-28T10:46:15.470Z',
                    description: 'So.geor.swch il',
                    code: 1237,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0ec7607ae0e0',
                    brand: 1,
                    country: 'GU',
                    locations: [ 1238 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.561Z',
                    updated_at: '2020-02-28T10:46:15.561Z',
                    description: 'Guam',
                    code: 1238,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150846a887609',
                    brand: 1,
                    country: 'GY',
                    locations: [ 1239 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.828Z',
                    updated_at: '2020-02-28T10:46:15.828Z',
                    description: 'Guyana',
                    code: 1239,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc0779d9dd6e',
                    brand: 1,
                    country: 'KY',
                    locations: [ 1248 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.820Z',
                    updated_at: '2020-02-28T10:46:15.820Z',
                    description: 'Cayman islands',
                    code: 1248,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e1a667ae0fe',
                    brand: 1,
                    country: 'MF',
                    locations: [ 1253 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.822Z',
                    updated_at: '2020-02-28T10:46:15.822Z',
                    description: 'Saint martin',
                    code: 1253,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515017158875eb',
                    brand: 1,
                    country: 'MP',
                    locations: [ 1257 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.617Z',
                    updated_at: '2020-02-28T10:46:15.617Z',
                    description: 'Northenmarianai',
                    code: 1257,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e32fc7ae0e1',
                    brand: 1,
                    country: 'MS',
                    locations: [ 1260 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.558Z',
                    updated_at: '2020-02-28T10:46:15.558Z',
                    description: 'Montserrat',
                    code: 1260,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7811db0e68eb7ae100',
                    brand: 1,
                    country: 'NC',
                    locations: [ 1266 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.855Z',
                    updated_at: '2020-02-28T10:46:15.855Z',
                    description: 'New caledonia',
                    code: 1266,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef77875150c1128875f8',
                    brand: 1,
                    country: 'NU',
                    locations: [ 1269 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.651Z',
                    updated_at: '2020-02-28T10:46:15.651Z',
                    description: 'Niue',
                    code: 1269,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef788751501fe188760c',
                    brand: 1,
                    country: 'PF',
                    locations: [ 1270 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.950Z',
                    updated_at: '2020-02-28T10:46:15.950Z',
                    description: 'French polynesi',
                    code: 1270,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0eb0bd7ae0d9',
                    brand: 1,
                    country: 'PM',
                    locations: [ 1272 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.180Z',
                    updated_at: '2020-02-28T10:46:15.180Z',
                    description: 'Stpierre&miquel',
                    code: 1272,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef78875150ebb688760d',
                    brand: 1,
                    country: 'SH',
                    locations: [ 1278 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.951Z',
                    updated_at: '2020-02-28T10:46:15.951Z',
                    description: 'St.helena ascen',
                    code: 1278,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef784788cc326ed9dd74',
                    brand: 1,
                    country: 'SX',
                    locations: [ 1284 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.853Z',
                    updated_at: '2020-02-28T10:46:15.853Z',
                    description: 'Sint maarten',
                    code: 1284,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7787515098db8875fb',
                    brand: 1,
                    country: 'TC',
                    locations: [ 1286 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.653Z',
                    updated_at: '2020-02-28T10:46:15.653Z',
                    description: 'Turks&caicos is',
                    code: 1286,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef7711db0e54817ae0f4',
                    brand: 1,
                    country: 'TK',
                    locations: [ 1289 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.612Z',
                    updated_at: '2020-02-28T10:46:15.612Z',
                    description: 'Tokelau',
                    code: 1289,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef778751503e368875f6',
                    brand: 1,
                    country: 'VI',
                    locations: [ 1299 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.652Z',
                    updated_at: '2020-02-28T10:46:15.652Z',
                    description: 'Virgin islands',
                    code: 1299,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788ccd4c6d9dd5a',
                    brand: 1,
                    country: 'WF',
                    locations: [ 1301 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.473Z',
                    updated_at: '2020-02-28T10:46:15.473Z',
                    description: 'Wallis & futuna',
                    code: 1301,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                },
                {
                    _id: '5e58ef774788cc9569d9dd68',
                    brand: 1,
                    country: 'YT',
                    locations: [ 1304 ],
                    warehouses: [
                        {
                            code: 'ZARAESALO',
                            main: 1,
                            weight: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.683Z',
                    updated_at: '2020-02-28T10:46:15.683Z',
                    description: 'Mayotte',
                    code: 1304,
                    display: true,
                    market: 146,
                    parents: {
                        Mercado: 146
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 147
            },
            description: 'Brasil',
            header: true,
            display: true,
            code: '147',
            children: [
                {
                    _id: '5e58ef7711db0e12dd7ae0d7',
                    brand: 16,
                    country: 'BR',
                    locations: [ 12952 ],
                    warehouses: [
                        {
                            code: 'ZARABRSAO',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-02-28T10:46:15.162Z',
                    updated_at: '2020-02-28T10:46:15.162Z',
                    description: 'Brasil',
                    code: 508,
                    display: true,
                    market: 147,
                    parents: {
                        Mercado: 147
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 155
            },
            description: 'Argentina',
            header: true,
            display: true,
            code: '155',
            children: [
                {
                    _id: '5ec41584d12f6820a8489ed9',
                    brand: 16,
                    country: 'AR',
                    locations: [ 9753 ],
                    warehouses: [
                        {
                            code: 'ZARAARBUE',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-05-19T17:21:08.321Z',
                    updated_at: '2020-05-19T17:21:08.321Z',
                    description: 'Argentina',
                    code: 528,
                    display: true,
                    market: 155,
                    parents: {
                        Mercado: 155
                    }
                }
            ]
        },
        {
            parents: {
                Mercado: 183
            },
            description: 'Chile',
            header: true,
            display: true,
            code: '183',
            children: [
                {
                    _id: '5f1817c7ccca313049c477a1',
                    brand: 16,
                    country: 'CL',
                    locations: [ 13823 ],
                    warehouses: [
                        {
                            code: 'ZARACLCON',
                            weight: 1,
                            main: 1
                        }
                    ],
                    deleted: false,
                    created_at: '2020-07-22T10:41:11.708Z',
                    updated_at: '2020-12-10T12:49:16.386Z',
                    description: 'Chile',
                    code: 512,
                    display: true,
                    market: 183,
                    parents: {
                        Mercado: 183
                    }
                }
            ]
        }
    ],
    country: [],
    market: [
        {
            _id: '5f463d835ed9191d373b37c2',
            brand: 1,
            countries: [
                'AL',
                'BA',
                'CH',
                'ES',
                'GR',
                'MT',
                'NO',
                'PT',
                'SA',
                'BH',
                'CO',
                'EG',
                'AE',
                'ID',
                'IL',
                'JO',
                'KW',
                'LB',
                'MA',
                'OM',
                'QA',
                'RS',
                'PH',
                'XK',
                'DZ',
                'MK',
                'ME',
                'BT',
                'BD',
                'ER',
                'TJ',
                'PS',
                'NF',
                'FK',
                'AD',
                'TN',
                'GT',
                'HN',
                'CR',
                'NI',
                'KZ',
                'SV',
                'GE',
                'CY',
                'IS',
                'AM',
                'PA',
                'PR',
                'AZ',
                'IE'
            ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.805Z',
            updated_at: '2021-01-13T12:56:49.181Z',
            description: 'Alovera',
            code: 1,
            display: true
        },
        {
            _id: '5e58efba87515005c5887614',
            brand: 1,
            countries: [ 'CN' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.805Z',
            updated_at: '2020-02-28T10:47:22.805Z',
            description: 'Mainland china',
            code: 2,
            display: true
        },
        {
            _id: '5e58efba11db0ed0de7ae108',
            brand: 1,
            countries: [ 'AT', 'BE', 'CZ', 'DK', 'HU', 'LU', 'NL', 'PL', 'SE', 'SK', 'HR', 'SI', 'UA', 'FI' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.803Z',
            updated_at: '2021-01-13T12:56:49.527Z',
            description: 'Polonia 2',
            code: 3,
            display: true
        },
        {
            _id: '5e58efba875150905a887611',
            brand: 1,
            countries: [ 'KR' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.773Z',
            updated_at: '2020-02-28T10:47:22.773Z',
            description: 'Corea',
            code: 5,
            display: true
        },
        {
            _id: '5e58efba11db0e0d9c7ae109',
            brand: 1,
            countries: [ 'JP' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.800Z',
            updated_at: '2020-02-28T10:47:22.800Z',
            description: 'Japon',
            code: 6,
            display: true
        },
        {
            _id: '5e58efba8751504dd7887610',
            brand: 1,
            countries: [ 'MX' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.740Z',
            updated_at: '2020-02-28T10:47:22.740Z',
            description: 'México',
            code: 7,
            display: true
        },
        {
            _id: '5e58efba4788cca602d9dd79',
            brand: 1,
            countries: [ 'BG', 'DE', 'EE', 'LT', 'LV', 'RO' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.803Z',
            updated_at: '2021-01-13T10:43:45.014Z',
            description: 'Polonia',
            code: 8,
            display: true
        },
        {
            _id: '5e58efba4788ccb757d9dd78',
            brand: 1,
            countries: [ 'RU' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.755Z',
            updated_at: '2020-02-28T10:47:22.755Z',
            description: 'Rusia',
            code: 9,
            display: true
        },
        {
            _id: '5e58efba11db0efdab7ae10b',
            brand: 1,
            countries: [ 'US' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.877Z',
            updated_at: '2020-02-28T10:47:22.877Z',
            description: 'Usa',
            code: 10,
            display: true
        },
        {
            _id: '5e58efba4788cc981bd9dd7e',
            brand: 1,
            countries: [ 'TW' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.885Z',
            updated_at: '2020-02-28T10:47:22.885Z',
            description: 'Taiwan, china',
            code: 11,
            display: true
        },
        {
            _id: '5e58efba4788cc2f74d9dd7a',
            brand: 1,
            countries: [ 'FR', 'MC' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.806Z',
            updated_at: '2020-02-28T10:47:22.806Z',
            description: 'Francia',
            code: 12,
            display: true
        },
        {
            _id: '5e58efba8751504c05887616',
            brand: 16,
            countries: [ 'ZA', 'PE', 'UY', 'PY' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.857Z',
            updated_at: '2020-12-10T12:50:12.615Z',
            description: 'Marchamalo sur',
            code: 13,
            display: true
        },
        {
            _id: '5e58efba11db0e931b7ae105',
            brand: 1,
            countries: [ 'CA' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.739Z',
            updated_at: '2020-02-28T10:47:22.739Z',
            description: 'Canada',
            code: 100,
            display: true
        },
        {
            _id: '5e58efba11db0e44837ae106',
            brand: 1,
            countries: [ 'TR' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.759Z',
            updated_at: '2020-02-28T10:47:22.759Z',
            description: 'Turquia',
            code: 110,
            display: true
        },
        {
            _id: '5e58efba11db0e37357ae10a',
            brand: 1,
            countries: [ 'GB' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.845Z',
            updated_at: '2021-01-13T10:43:44.718Z',
            description: 'Northampton',
            code: 114,
            display: true
        },
        {
            _id: '5e58efba4788cc945ed9dd7c',
            brand: 1,
            countries: [ 'HK', 'MO', 'MY', 'SG', 'TH', 'VN' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.851Z',
            updated_at: '2020-02-28T10:47:22.851Z',
            description: 'Hong kong sar',
            code: 119,
            display: true
        },
        {
            _id: '5e58efba8751500920887615',
            brand: 1,
            countries: [ 'IN' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.807Z',
            updated_at: '2020-02-28T10:47:22.807Z',
            description: 'India',
            code: 130,
            display: true
        },
        {
            _id: '5e58efba875150ac9e887612',
            brand: 16,
            countries: [ 'AU', 'NZ' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.770Z',
            updated_at: '2020-02-28T10:47:22.770Z',
            description: 'Australia',
            code: 141,
            display: true
        },
        {
            _id: '5e58efba11db0e54d07ae107',
            brand: 1,
            countries: [ 'IT' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.800Z',
            updated_at: '2020-02-28T10:47:22.800Z',
            description: 'Italia',
            code: 145,
            display: true
        },
        {
            _id: '5e58efba4788ccec06d9dd7b',
            brand: 1,
            countries: [
                'AG',
                'AI',
                'AO',
                'AS',
                'AX',
                'BB',
                'BF',
                'BJ',
                'BL',
                'BM',
                'BN',
                'BQ',
                'BS',
                'BW',
                'BZ',
                'CC',
                'CG',
                'CI',
                'CK',
                'CM',
                'CV',
                'CW',
                'CX',
                'DJ',
                'DM',
                'FJ',
                'FM',
                'FO',
                'GA',
                'GD',
                'GF',
                'GG',
                'GH',
                'GL',
                'GM',
                'GP',
                'GQ',
                'GS',
                'GU',
                'GY',
                'HT',
                'JE',
                'JM',
                'KE',
                'KH',
                'KI',
                'KM',
                'KN',
                'KY',
                'LC',
                'LK',
                'LR',
                'LS',
                'MF',
                'MG',
                'MH',
                'ML',
                'MP',
                'MQ',
                'MR',
                'MS',
                'MU',
                'MV',
                'MW',
                'MZ',
                'NA',
                'NC',
                'NG',
                'NR',
                'NU',
                'PF',
                'PG',
                'PM',
                'PW',
                'RE',
                'RW',
                'SB',
                'SC',
                'SH',
                'SL',
                'SM',
                'SN',
                'SR',
                'ST',
                'SX',
                'SZ',
                'TC',
                'TD',
                'TG',
                'TK',
                'TL',
                'TO',
                'TT',
                'TV',
                'TZ',
                'UG',
                'VA',
                'VC',
                'VG',
                'VI',
                'VU',
                'WF',
                'WS',
                'WW',
                'YT',
                'ZM',
                'ZW',
                'BO',
                'ET',
                'KG',
                'MN',
                'NP',
                'NG',
                'PK',
                'LA',
                'UZ'
            ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.806Z',
            updated_at: '2020-10-28T14:40:13.469Z',
            description: 'Worldwide',
            code: 146,
            display: true
        },
        {
            _id: '5e58efba4788cc270ad9dd7d',
            brand: 16,
            countries: [ 'BR' ],
            deleted: false,
            created_at: '2020-02-28T10:47:22.860Z',
            updated_at: '2020-02-28T10:47:22.860Z',
            description: 'Brasil',
            code: 147,
            display: true
        },
        {
            _id: '5ec4177fd12f680895489eda',
            brand: 16,
            countries: [ 'AR' ],
            deleted: false,
            created_at: '2020-05-19T17:29:35.236Z',
            updated_at: '2020-05-19T17:29:35.236Z',
            description: 'Argentina',
            code: 155,
            display: true
        },
        {
            _id: '5fd2198547eb0b86e5a8e30f',
            brand: 16,
            countries: [ 'CL' ],
            deleted: false,
            created_at: '2020-12-10T12:50:13.158Z',
            updated_at: '2020-12-10T12:50:13.158Z',
            description: 'Chile',
            code: 183,
            display: true
        }
    ],
    tag: [
        {
            code: 'PVP',
            description: 'pvp.filter',
            key: 'commercial_tag',
            fav: true,
            display: true
        },
        {
            code: 'NEW',
            description: 'NEW',
            key: 'commercial_tag',
            fav: true,
            display: true
        },
        {
            code: 'JO MALONE',
            description: 'JO MALONE',
            display: true,
            fav: true
        }
    ],
    device: [
        {
            code: 'web',
            description: 'Desktop',
            display: true
        },
        {
            code: 'app_i',
            description: 'iOS',
            display: true
        },
        {
            code: 'app_a',
            description: 'Android',
            display: true
        },
        {
            code: 'web_m',
            description: 'Mobile',
            display: true
        },
        {
            code: 'app_t',
            description: 'iPod',
            display: true
        },
        {
            code: 'mp',
            description: 'MiniProgram',
            display: true
        },
        {
            code: 'app_m',
            description: 'App',
            hide: true
        },
        {
            code: 'tm',
            description: 'Tmall',
            hide: true
        }
    ]
};
