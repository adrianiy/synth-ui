export interface FiltersConfigMiddleware {
    endpoints?: {
        sections?: any;
        products?: any;
        product_lines?: any;
        campaigns?: any;
        markets?: any;
        platforms?: any;
        warehouses?: any;
    };
    baseUrl?: string;
    auth?: string;
}
