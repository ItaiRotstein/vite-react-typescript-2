import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

type Props = {
    rating: number;
};

const Rating = ({rating}: Props) => {
    return (
        <div className='flex items-center'>
            <span className='mr-2'>Rating</span>
            {[...Array(5)].map((_, idx) => (
                <span
                    key={idx}
                >
                    {rating > idx ? (
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