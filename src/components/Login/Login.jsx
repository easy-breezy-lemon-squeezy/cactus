import React from 'react';
import {Field, reduxForm} from "redux-form";
import ButtonWrap from '../common/buttons/ButtonWrap/ButtonWrap.jsx'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormControls.module.css"
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
            { props.error && <div className={style.formSummaryControl}>{props.error}</div> }
            <div>
                <ButtonWrap buttonText={'Войти'}/>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth )
    {
        return (<Redirect to={"/profile"}/>)
        
    }
    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
}
const mapStateToProps  = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);