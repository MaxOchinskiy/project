import React from "react";
import DialogsItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import {Navigate} from "react-router-dom";



const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogsElement = state.dialogData.map(d=> <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messagesData.map(m=> <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange =(e) => {
      let body=e.target.value;
      props.updateNewMessageBody(body);


    }
    if (!props.isAuth )return <Navigate to="/login"/> ;

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>

            {dialogsElement}
        </div>

        <div className={s.messages}>
            <div>{messagesElement}</div>
            <div>
                <div><textarea className={s.text} value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div><button className={s.pus} onClick={onSendMessageClick}>Send</button></div>
            </div>

        </div>
    </div>);
}
export default Dialogs;