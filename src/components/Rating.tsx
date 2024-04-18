import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

type Props = {
    rating: number;
    setRate: React.Dispatch<React.SetStateAction<number>>;
    isFromFilters: boolean;
};
const Rating = ({ rating, setRate, isFromFilters }: Props) => {

    return (
        <div className='flex items-center'>
            <span className='mr-2'>Rating</span>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => setRate(index + 1)}
                    className={isFromFilters ? 'cursor-pointer' : ''}
                >
                    {rating > index ? (
                        <AiFillStar />
                    ) : (
                        <AiOutlineStar />
                    )}
                </span>
            ))}
        </div>
    );
};
export default Rating;