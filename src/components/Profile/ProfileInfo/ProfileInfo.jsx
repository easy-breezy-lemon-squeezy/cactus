
import profileInfo from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css"
import ProfileInfoDataForm from "./ProfileInfoDataForm";
import {useState} from "react";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile, userId }) {
    let [editMode, setEditMode] = useState(false);

    if (!profile){
        return <Preloader/>
    }
    let photoLarge = profile.photos.large;
    if(!photoLarge){
        photoLarge = userPhoto;
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={profileInfo.profileInfo}>
            {/*<div className={profileInfo.header}> <img src={header_photo} alt="photo" /></div>*/}
            <div className={profileInfo.page_info}>
                <div className={profileInfo.page_infoPhoto}>
                    <div className={profileInfo.photo}><img src={photoLarge} alt={"Аватар"} /></div>
                    {isOwner && <div className={profileInfo.inputWrapper}><input placeholder={"Редактировать фото"} type={"file"} onChange={onMainPhotoSelected}/></div>}
                </div>

                <div className={profileInfo.info}>
                    <h3>{profile.fullName}</h3>
                    <div><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
                    {editMode
                        ? <ProfileInfoDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/>}
                </div>

            </div>

        </div>
    );
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <b>Полное имя</b>: {profile.fullName}
        </div>
        <div>
            <b>В поиске работы</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>Профессиональные навыки</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>Обо мне</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner ? <div><button onClick={goToEditMode}>Редактировать</button></div> : <div></div>}
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;