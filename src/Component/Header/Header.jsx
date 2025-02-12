import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import Logotip from "../../assets/images/VK Text Logo.png"
const Header = ({ isAuth, login }) => {
    return (
        <header className={s.header}>
            <img src={Logotip} className={s.logo} />
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
