import React from 'react';
import {Field, reduxForm} from "redux-form";
import ButtonWrap from '../common/buttons/ButtonWrap/ButtonWrap.jsx'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormControls.module.css"
import logStyle from "./Login.module.css"
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={logStyle.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Запомнить меня
            </div>
            {captchaUrl && <img src={captchaUrl}  alt="captcha"/>}
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} component={Input}
                                  validate={[required]}/>}
            {error && <div className={style.formSummaryControl}>{error}</div> }
            <div>
                <ButtonWrap buttonText={'Войти'}/>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth )
    {
        return (<Redirect to={"/profile"}/>)
        
    }
    return (
        <div>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    );
}
const mapStateToProps  = (state) =>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);