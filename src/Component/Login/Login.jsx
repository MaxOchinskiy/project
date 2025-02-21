import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {login} from "../../redux/auth-reducer";
import s from "./login.module.css"

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Введите email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Не правильный email';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(2, "Минимальное колличество символов 2")
        .max(20, "Максимальное колличество символов 20")
        .required("Введите пароль")
});

const Login = (props) => {

    if (props.isAuth) return <Navigate to='/profile'/>

    return (
        <div className={s.login}>
            <h1>Вход</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false, messages: null}}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}

                onSubmit={(values) => {
                    props.login(values.email, values.password, values.rememberMe);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field type='email' name='email' placeholder='e-mail'/>
                            <ErrorMessage name='email' component='p'/>
                        </div>
                        <div>
                            <Field type='password' name='password' placeholder='password'/>
                            <ErrorMessage name='password' component='p'/>
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMe'/>
                            <label htmlFor='rememberMe'>Запомнить меня</label>
                        </div>
                        <button type='submit'>Войти</button>
                        <p>{props.messageError}</p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


let mapStateToProps = (state) => {
    return {
        messageError: state.auth.messageError,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);