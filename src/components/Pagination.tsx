import { useEffect, useState } from 'react';
import productService from '../services/productService';
import { AppState } from '../context/AppContext';

const Pagination = () => {

    const { productState: { productsCount }, productDispatch } = AppState();
    const productsPerPage = 20;
    const pageNumbers = [];

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            try {
                productDispatch({
                    type: 'GET_PRODUCTS_COUNT',
                    payload: await productService.getProductsCount()
                });
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        getProducts();
    }, []);

    for (let i = 0; i < Math.ceil(productsCount / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = async (page: number) => {
        productDispatch({
            type: 'GET_PRODUCTS',
            payload: await productService.getProducts(page)
        });
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    const handlePrevNext = async (num: number) => {
        // if (activePage === 0) return
        productDispatch({
            type: 'GET_PRODUCTS',
            payload: await productService.getProducts(activePage + num)
        });
        setActivePage(activePage + num);
        window.scrollTo(0, 0);
    };

    const paginationClass = "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    const activePaginationClass = "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
    const disabledClass = 'flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
    // const disabledClass = 'bg-red';

    return (
        <nav aria-label="Page navigation example" className='flex justify-center'>
            <ul className="flex items-center -space-x-px h-8 text-sm">
                <li onClick={() => activePage !== 0 && handlePrevNext(-1)}>
                    <span className={activePage === 0 ? disabledClass : paginationClass}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </span>
                </li>
                {pageNumbers.map(page =>
                    <li key={page} onClick={() => handlePageClick(page)}>
                        <span className={activePage === page ? activePaginationClass : paginationClass}>{page + 1}</span>
                    </li>
                )}
                <li onClick={() => activePage !== pageNumbers.length - 1 && handlePrevNext(1)} >
                    <span className={activePage === pageNumbers.length - 1 ? disabledClass : paginationClass}>
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </span>
                </li>
            </ul>
        </nav >
    );
};
export default Pagination;