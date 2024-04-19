import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { CartState } from '../context/CartContext';
import { FilterActions } from '../types/Filter';

type Props = {
    rating: number;
    isFiltersChild: boolean;
    filterDispatch: React.Dispatch<FilterActions>;
};
const FilterRating = ({ isFiltersChild }: Props) => {

    const {
        filterState: { byRating },
        filterDispatch
    } = CartState();

    const handleClick = (idx: number) => {
        if (isFiltersChild) {
            filterDispatch({ type: 'FILTER_BY_RATING', payload: idx + 1 });
        }
    };
    return (
        <div className='flex items-center'>
            <span className='mr-2'>Rating</span>
            {[...Array(5)].map((_, idx) => (
                <span
                    key={idx}
                    onClick={() => handleClick(idx)}
                    className={isFiltersChild ? 'cursor-pointer' : ''}
                >
                    {byRating > idx ? (
                        <AiFillStar />
                    ) : (
                        <AiOutlineStar />
                    )}
                </span>
            ))}
        </div>
    );
};
export default FilterRating;