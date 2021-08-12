export interface FiltersConfigMiddleware {
    endpoints?: {
        sections?: string;
        products?: string;
        product_lines?: string;
        campaigns?: string;
        markets?: string;
        platforms?: string;
        warehouses?: string;
    };
    baseUrl?: string;
    auth?: string;
}
