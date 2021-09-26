import new_post from "../../../../new.jpg";
import post from "./Post.module.css";
import avatar_photo from "../../../../avatar.jpg";
import Like from "../../../Buttons/Like/Like";

function Post(props) {
    return (

            <div className={post.post}>
                <div className={post.wrap}>
                    <div className={post.author}><img src={avatar_photo} alt="photo" /></div>
                    <div className={post.content}>
                        <p>{props.message}</p>
                        {/*<img className={post.photo} src={new_post} alt="logo" />*/}
                    </div>

                </div>
                <div className={post.like} >
                    <Like count={props.likesCount}/>
                </div>
            </div>

    );
}

export default Post;