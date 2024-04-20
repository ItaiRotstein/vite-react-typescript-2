import FilterRating from './FilterRating';
import { CartState } from '../context/CartContext';

const Filters = () => {

    const {
        filterState: {
            byStock,
            byFastDelivery,
            sort,
        },
        filterDispatch } = CartState();

    // console.log('byStock:', byStock);
    // console.log('byFastDelivery:', byFastDelivery);
    // console.log('sort:', sort);
    // console.log('byRating:', byRating);

    return (
        <div className='rounded-sm bg-slate-600 text-white p-4 flex flex-col text-sm gap-4 m-2 min-w-52'>
            <span>Filter Products</span>
            <div className='flex'>
                <input
                    type="radio"
                    name="group1"
                    id="inLine-1"
                    className='mr-1'
                    checked={sort === 'lowtohigh' ? true : false}
                    onChange={() => filterDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'lowtohigh'
                    })}
                />
                <span className=''>Ascending</span>
            </div>
            <div className='flex'>
                <input
                    type="radio"
                    name="group1"
                    id="inLine-2"
                    className='mr-1'
                    checked={sort === 'hightolow' ? true : false}
                    onChange={() => filterDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'hightolow'
                    })}
                />
                <span>Descending</span>
            </div>
            <div className='flex'>
                <input
                    type="checkbox"
                    name="group1"
                    id="inLine-3"
                    className='mr-1'
                    checked={byStock}
                    onChange={() => filterDispatch({
                        type: 'FILTER_BY_STOCK'
                    })}
                />
                <span>Include Out of Stock</span>
            </div>
            <div className='flex'>
                <input
                    type="checkbox"
                    name="group1"
                    id="inLine-4"
                    className='mr-1'
                    checked={byFastDelivery}
                    onChange={() => filterDispatch({
                        type: 'FILTER_BY_DELIVERY'
                    })}
                />
                <span>Fast Delivery Only</span>
            </div>
            <FilterRating />
            <button 
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => filterDispatch({
                type: 'CLEAR_FILTERS'
            })}
            >
                Clear Filters
            </button>
        </div>
    );
};
export default Filters;