import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';
import { login } from "../../redux/auth-reducer";
import s from "./login.module.css";

const validationSchemaLoginForm = Yup.object().shape({
    email: Yup.string()
        .email("Неправильный email")
        .required("Введите email"),
    password: Yup.string()
        .min(2, "Минимальное количество символов 2")
        .max(20, "Максимальное количество символов 20")
        .required("Введите пароль"),
});

export function Login(props) {
    if (props.isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className={s.login}>
            <h1>Войти ВКонтакте</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                }}
                validationSchema={validationSchemaLoginForm}
                onSubmit={(values, { setSubmitting }) => {
                    props.login(values.email, values.password, values.rememberMe);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Почта</label>
                            <Field id="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className={s.errors} />
                        </div>

                        <div>
                            <label htmlFor="password">Пароль</label>
                            <Field id="password" name="password" placeholder="Password" type="password" />
                            <ErrorMessage name="password" component="div" className={s.errors} />
                        </div>

                        <div>
                            <label>
                                <Field id="rememberMe" name="rememberMe" type="checkbox" />
                                Запомнить меня
                            </label>
                        </div>

                        <button type="submit" disabled={isSubmitting}>Войти</button>
                    </Form>
                )}
            </Formik>
            {props.errorAuth && <div className={s.errors}>{props.errorAuth}</div>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorAuth: state.auth.errorAuth,
});

export default connect(mapStateToProps, { login })(Login);








