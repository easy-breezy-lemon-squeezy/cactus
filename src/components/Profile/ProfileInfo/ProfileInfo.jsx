import header_photo from "../../../header-photo.jpg";
import avatar_photo from "../../../avatar.jpg";
import profileInfo from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile){
        return <Preloader/>
    }
    let photoLarge = props.profile.photos.large;
    if(!photoLarge){
        photoLarge = userPhoto;
    }
    return (
        <div className={profileInfo.profileInfo}>
            <div className={profileInfo.header}> <img src={header_photo} alt="photo" /></div>
            <div className={profileInfo.page_info}>
                <div className={profileInfo.photo}><img src={photoLarge} alt="photo" /></div>
                <div className={profileInfo.info}>
                    <h3>{props.profile.fullName}</h3>
                    <div className={profileInfo.row_info}><ProfileStatus status={props.profile.aboutMe}/></div>
                    <div className={profileInfo.row_info}><p>Контакты: </p> <p>{props.profile.contacts.instagram}</p></div>
                </div>

            </div>

        </div>
    );
}

export default ProfileInfo;