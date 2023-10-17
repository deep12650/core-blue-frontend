export type PaginatorInfo = {
    total: number;
    currentPage: number;
    hasMorePages: boolean;
}

export type Products = {
    paginatorInfo: PaginatorInfo;
    data: Product[];
}

export type Product = {
    id: number;
    name: string;
    variants: Variant[];
}

export type Variant = {
    id: number;
    name: string;
    price: number;
    description: string;
    sku: string;
    is_active: boolean;
}
