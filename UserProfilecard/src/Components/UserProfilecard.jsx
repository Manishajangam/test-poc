import './UserProfile.css'
import mani_icon from '../assets/images/mani.jpg'

const UserProfilecard= () =>
 {
  return (
  <>
    <div className='upc'>
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={mani_icon} alt=''/>
        <div className="profile-title">manishajangam</div>
        <div className="profile-description">
          I am student

        </div>
        <div className="profile-button"><a href="mailto:manishajangam@.com">Contact Me</a></div>
     </div>

    </div>
    </>
  )
}
export default UserProfilecard;
