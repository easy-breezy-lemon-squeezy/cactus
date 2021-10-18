import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div className={profile.page}>
           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                        savePhoto={props.savePhoto} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
           <MyPostsContainer/>
        </div>
    );
}

export default Profile;