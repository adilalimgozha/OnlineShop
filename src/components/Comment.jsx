import '../styles/Comment.css'
import { FaUser } from "react-icons/fa";

export default function Comment({review}) {

  return (
    <div className="review">
        <div>
            <div >
                <FaUser className='userIcon' />
            </div>
            <div className='rew name'>
                {review.reviewerName}
            </div>
        </div>
        
        
        <div className='review-block'>
            <div className='rew rating'>
                Rating: {review.rating}
            </div>
            <div className='rew comment'>
                {review.comment}
            </div>
            <div className='rew date'>
                {review.date}
            </div>
        </div>

    </div>
  )
}
