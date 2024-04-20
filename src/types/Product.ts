export type Product = {
        _id: number;
        name: string;
        price: string;
        image: string;
        fastDelivery: boolean;
        inStock: number;
        rating: number;
        qty: string;
};

type GetProducts = { type: 'GET_PRODUCTS'; payload: []; };

export type ProductActions = GetProducts;
