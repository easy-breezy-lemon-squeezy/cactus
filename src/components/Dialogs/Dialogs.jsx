import dialogs from "./Dialogs.module.css";
import ButtonWrap from "../common/buttons/ButtonWrap/ButtonWrap.jsx";
import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);
function Dialogs(props) {

    let dialogsComponents = props.messagesPage.dialogs.map( d=> <Dialog name={d.name} id={d.id} key={d.id}/>);
    let messagesComponents = props.messagesPage.messages.map( m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }
    return (

        <div className={dialogs.page}>
            <div className={dialogs.dialogs}>
                {dialogsComponents}
            </div>
            <div className={dialogs.messages}>
                {messagesComponents}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={dialogs.textarea} component={Textarea} name={"newMessageBody"} placeholder={"Введите сообщение"}
            validate={[required, maxLength50]}/>
            <ButtonWrap className={dialogs.button} buttonText={'Отправить'}/>
        </form>
)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;