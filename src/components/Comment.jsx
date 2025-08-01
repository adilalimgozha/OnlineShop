import { useState } from 'react';
import '../styles/Comment.css'
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Comment({review}) {

    const [userProfile, setUserProfile] = useState()

    const usersProfiles = useSelector(state => state.usersProfiles.value)

    useEffect(() => {
        if (usersProfiles.length > 0){
            const found = usersProfiles.find( userProfile => userProfile.id === review.userProfileId)
            setUserProfile(found)
                
        }
    },[usersProfiles])

    if (!userProfile){
        return <div>Loading...</div>
    }


  return (
    <div className="review">
        <div>
            <div >
                <FaUser className='userIcon' />
            </div>
            <div className='rew name'>
                {userProfile.firstName} {userProfile.lastName}
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
