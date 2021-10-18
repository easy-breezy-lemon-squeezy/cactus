import React from "react";
import s from './ProfileInfo.module.css';
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Полное имя</b>: <Field placeholder={"Full name"} name={"fullName"} component={Input}/>
        </div>
        <div>
            <b>В поиске работы</b>:  <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
        </div>

        <div>
            <b>Профессиональные навыки</b>: <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"}
                                                  component={Textarea} />
        </div>


        <div>
            <b>Обо мне</b>: <Field placeholder={"About me"} name={"aboutMe"} component={Textarea} />
        </div>
        <div>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: <Field placeholder={key} name={"contacts." + key} component={Input} /></b>
            </div>
        })}
        </div>
        <div><button>Сохранить</button></div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;