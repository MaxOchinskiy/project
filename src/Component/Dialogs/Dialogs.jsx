import React, { useEffect } from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    const { messagesPage, sendMessage, updateNewMessageBody, isAuth } = props;
    const { dialogData, messagesData, newMessageBody } = messagesPage;

    useEffect(() => {
        // Фокус на поле ввода, когда сообщение изменяется
        document.querySelector('textarea')?.focus();
    }, [newMessageBody]);

    if (!isAuth) return <Navigate to="/login" />;

    const dialogsElement = dialogData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
    const messagesElement = messagesData.map(m => <Message message={m.message} key={m.id} />);

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (e) => {
        updateNewMessageBody(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {  // Ожидаем Enter без Shift (чтобы не создавать новую строку)
            e.preventDefault();
            onSendMessageClick();
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            className={s.text}
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            onKeyPress={onKeyPress}
                            placeholder='Enter your message'
                        />
                    </div>
                    <div>
                        <button className={s.pus} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
