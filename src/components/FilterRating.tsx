import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { CartState } from '../context/CartContext';

const FilterRating = () => {

    const {
        filterState: { byRating },
        filterDispatch
    } = CartState();

    const handleClick = (idx: number) => {
            filterDispatch({ type: 'FILTER_BY_RATING', payload: idx + 1 });
    };
    return (
        <div className='flex items-center'>
            <span className='mr-2'>Rating</span>
            {[...Array(5)].map((_, idx) => (
                <span
                    key={idx}
                    onClick={() => handleClick(idx)}
                    className={'cursor-pointer'}
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