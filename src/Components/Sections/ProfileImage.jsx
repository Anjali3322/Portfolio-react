import profilePicture from "/public/me2.jpeg"
const ProfileImage = () => {
  return (
    <>
    <div className="profileImg">
        <div className="image">
            <img src={profilePicture} alt="" />
        </div>
        <div className="borderDiv"> </div>
    </div>
    </>
  )
}

export default ProfileImage