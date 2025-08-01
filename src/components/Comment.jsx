import '../styles/Comment.css'
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Comment({review}) {

    const usersProfiles = useSelector(state => state.usersProfiles.value)
    const currentUserProfile = usersProfiles.find( userProfile => userProfile.id === review.userProfileId)


  return (
    <div className="review">
        <div>
            <div >
                <FaUser className='userIcon' />
            </div>
            <div className='rew name'>
                {currentUserProfile.firstName} {currentUserProfile.lastName}
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
