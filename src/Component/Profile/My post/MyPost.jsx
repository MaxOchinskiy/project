import React from "react";
import { Field, Form, Formik } from "formik";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = React.memo(props => {
    const postsElement = [...props.posts]
        .reverse()
        .map(p => (
        <Post message={p.message} key={p.id}  />
    ));

    const onAddPost = (values, { resetForm }) => {
        props.addPost(values.newPostText);
        resetForm(); // Очистка формы после отправки
    };

    return (
        <div className={s.log}>
            <h3>Мои посты</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
});

const AddNewPostForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ newPostText: "" }}
            validate={values => {
                const errors = {};
                if (!values.newPostText) {
                    errors.newPostText = "Пост не может быть пустым";
                }
                return errors;
            }}
            onSubmit={onSubmit}>
            {({ errors, touched, values, dirty }) => (
                <Form>
                    <div className={s.post}>
                        <Field className={s.text} name="newPostText" component="textarea" placeholder="Что у вас нового?" />
                        {errors.newPostText && touched.newPostText && dirty && (
                            <div className={s.error}>{errors.newPostText}</div>
                        )}
                    </div>
                    <button className={s.mypost} type="submit">Опубликовать</button>
                </Form>
            )}

        </Formik>
    );
};

export default MyPost;
