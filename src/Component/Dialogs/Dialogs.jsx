import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const Dialogs = (props) => {
    const { messagesPage, isAuth, sendMessage } = props;
    const { dialogData, messagesData } = messagesPage;

    if (!isAuth) return <Navigate to="/login" />;

    const dialogsElement = dialogData.map(d => (
        <DialogsItem name={d.name} key={d.id} id={d.id} />
    ));
    const messagesElement = messagesData.map(m => (
        <Message message={m.message} key={m.id} />
    ));

    const addNewMessage = (values, { resetForm }) => {
        sendMessage(values.newMessageBody);
        resetForm(); // Корректное очищение формы
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElement}</div>
            <div>{messagesElement}</div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
};

const AddMessageForm = ({ onSubmit }) => {
    return (
        <Formik initialValues={{ newMessageBody: "" }} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <div>
                        <Field
                            className={s.text}
                            name="newMessageBody"
                            component="textarea"
                            placeholder="Введите сообщение..."
                        />
                    </div>
                    <button className={s.pus} type="submit">
                        Написать
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Dialogs;

