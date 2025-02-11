import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
    return (
        <header className={s.header}>
            <img src='https://www.mgutu-vf.ru/img/vk_1.png' alt="ВКонтакте" className={s.logo} />
            <div className={s.log}>вконтакте</div>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div className={s.login}>{login}</div>
                    : <NavLink to='/login' className={s.loginLink}>Войти/Зарегистрироваться</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
