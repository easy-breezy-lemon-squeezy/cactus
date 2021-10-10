import newPost from "./NewPost.module.css";
import ButtonWrap from "../../../common/buttons/ButtonWrap/ButtonWrap";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

function NewPost(props) {
    let addPost = (values) => {
        props.onAddPost(values.newPostText);
    }

    return (
        <div className={newPost.post}>
            <AddNewPostFormRedux onSubmit={addPost}/>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"} className={newPost.textarea} placeholder="Что у вас нового?" component={Textarea}
                   validate={[required, maxLength10]}
            />
            <ButtonWrap buttonText={'Опубликовать'}/>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);

export default NewPost;