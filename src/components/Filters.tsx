import { useState } from 'react';
import Rating from './Rating';

const Filters = () => {
    const [rate, setRate] = useState(0)
    
    return (
        <div className='rounded-sm bg-slate-600 text-white p-4 flex flex-col text-sm gap-4 m-2 min-w-52'>
            <span>Filter Products</span>
            <div className='flex'>
                <input type="radio" name="group1" id="inLine-1" className='mr-1' />
                <span className=''>Ascending</span>
            </div>
            <div className='flex'>
                <input type="radio" name="group1" id="inLine-2" className='mr-1' />
                <span>Descending</span>
            </div>
            <div className='flex'>
                <input type="checkbox" name="group1" id="inLine-3" className='mr-1' />
                <span>Out of Stock</span>
            </div>
            <div className='flex'>
                <input type="checkbox" name="group1" id="inLine-4" className='mr-1' />
                <span>Fast Delivery Only</span>
            </div>
            <Rating rating={rate} setRate={setRate} isFromFilters={true}/>
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                Clear Filters
            </button>
        </div>
    );
};
export default Filters;