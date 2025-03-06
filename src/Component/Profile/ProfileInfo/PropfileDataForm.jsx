import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Импорт валидации Yup
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ profile, onSubmit }) => {
    // Функция для замены `null` на `""`
    const getSafeValue = (value) => (value === null ? "" : value);


    // Схема валидации
    const validationSchema = Yup.object({
        aboutMe: Yup.string().required("Поле 'Обо мне' обязательно!"),
        lookingForAJobDescription: Yup.string().test(
            "is-required",
            "Поле 'Описание поиска работы' обязательно!",
            function (value) {
                return this.parent.lookingForAJob ? Boolean(value) : true;
            }
        )

    });

    return (
        <Formik
            initialValues={{
                fullName: getSafeValue(profile.fullName),
                lookingForAJob: profile.lookingForAJob || false,
                lookingForAJobDescription: getSafeValue(profile.lookingForAJobDescription),
                aboutMe: getSafeValue(profile.aboutMe),
                contacts: Object.keys(profile.contacts).reduce((acc, key) => {
                    acc[key] = getSafeValue(profile.contacts[key]);
                    return acc;
                }, {}),
            }}
            validationSchema={validationSchema} // Подключение схемы валидации
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <b>Полное Имя: </b>
                        <Field placeholder="Full name" name="fullName" />
                    </div>
                    <div>
                        <b>Поиск работы: </b>
                        <Field type="checkbox" name="lookingForAJob" />
                    </div>
                    {values.lookingForAJob && (
                        <div>
                            <b>Мои профессиональные навыки:</b>
                            <Field as="textarea" name="lookingForAJobDescription" />
                            <ErrorMessage name="lookingForAJobDescription" component="div" className={s.error} />
                        </div>
                    )}
                    <div>
                        <b>Обо мне: </b>
                        <Field as="textarea" name="aboutMe" />
                        <ErrorMessage name="aboutMe" component="div" className={s.error} />
                    </div>

                    {/* Контакты */}
                    <div>
                        <b>Контакты:</b>
                        {Object.keys(profile.contacts).map((key) => (
                            <div key={key}>
                                <b>{key}:</b>
                                <Field placeholder={key} name={`contacts.${key}`} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <button type="submit" className={s.red}>Сохранить</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;




