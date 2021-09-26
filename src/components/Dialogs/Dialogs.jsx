import dialogs from "./Dialogs.module.css";
import ButtonWrap from "../Buttons/ButtonWrap/ButtonWrap";
import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


function Dialogs(props) {

    let newMessage = React.createRef();
    let dialogsComponents = props.messagesPage.dialogs.map( d=> <Dialog name={d.name} id={d.id} key={d.id}/>);
    let messagesComponents = props.messagesPage.messages.map( m => <Message message={m.message} key={m.id}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.onMessageChange(text);
    }

    return (

        <div className={dialogs.page}>
            <div className={dialogs.dialogs}>
                {dialogsComponents}
            </div>
            <div className={dialogs.messages}>
                {messagesComponents}
                <textarea ref={newMessage} className={dialogs.textarea} value={props.messagesPage.newMessageBody} onChange={onMessageChange} placeholder="Введите сообщение"/>
                <ButtonWrap className={dialogs.button} onClick={addMessage} buttonText={'Отправить'}/>
            </div>
        </div>
    );
}

export default Dialogs;