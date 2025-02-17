import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, "минимальная длина - 2 символа")
        .max(20, "максимальная длина - 20 символов")
        .required("Required"),
    password: Yup.string()
        .min(8, "пароль должен состоять более 8 символов")
        .required("обязательные поля")
});
export default loginFormSchema;
