export type FilterState = {
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    sort: string;
    searchQuery: string;
    itemsPerPage: number;
    pageNum: number;
};

type Rating = { type: 'FILTER_BY_RATING'; payload: number; };
type Sort = { type: 'SORT_BY_PRICE'; payload: string; };
type FastDelivery = { type: 'FILTER_BY_DELIVERY'; };
type Stock = { type: 'FILTER_BY_STOCK'; };
type Clear = { type: 'CLEAR_FILTERS'; };
type Search = { type: 'FILTER_BY_SEARCH'; payload: string; };
type ItemsPerPage = { type: 'SET_ITEMS_PER_PAGE'; payload: number; };
type PageNum = { type: 'SET_PAGE_NUM'; payload: number; };

export type FilterActions =
    Rating |
    Sort |
    FastDelivery |
    Stock |
    Clear |
    Search |
    ItemsPerPage |
    PageNum;