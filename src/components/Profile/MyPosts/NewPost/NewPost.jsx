import newPost from "./NewPost.module.css";
import ButtonWrap from "../../../Buttons/ButtonWrap/ButtonWrap";
import React from "react";

function NewPost(props) {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.onAddPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={newPost.post}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={newPost.textarea} placeholder="Что у вас нового?"/>
            <ButtonWrap onClick={addPost} buttonText={'Опубликовать'}/>
        </div>
    );
}

export default NewPost;