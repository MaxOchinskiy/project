import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.mgutu-vf.ru/img/vk_1.png'/>
        <div className={s.log}>вконтакте</div>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Войти/Зарегистрироваться</NavLink>}
        </div>
</header>
}
export default Header;