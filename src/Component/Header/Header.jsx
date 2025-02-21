import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import Logotip from "../../assets/images/VK Text Logo.png"

const Header = (props) => {
    return (
        <header className={s.header}>
            {/* Логотип */}
            <img src={Logotip} className={s.logo} alt="Логотип VK" />

            {/* Строка поиска */}
            <div className={s.searchBar}>
                <input type="text" className={s.searchInput} placeholder="Поиск" />
            </div>

            {/* Блок логина / выхода */}
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <NavLink className={s.login} onClick={props.logout} to='/login'>Выйти</NavLink></div>
                    : <NavLink to='/login' className={s.login}>Войти</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
