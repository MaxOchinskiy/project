import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
console.log(s);



const Nav =()=> {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>👤 Профиль</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>👥 Пользователи</NavLink>
        </div>
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>🗪 Мессенджер</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}> &#128478; Лента</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>🎧 Музыка</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings"
                     className={navData => navData.isActive ? s.active : s.item}> &#9881; Настройки</NavLink>
        </div>
    </nav>
};

export default Nav;
