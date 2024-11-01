import { Product } from "./product.interface";

export interface ProductPage {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: Product[]
}