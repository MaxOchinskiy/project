import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import clsx from 'clsx'; // Подключаем библиотеку clsx для условных классов

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Профиль
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/users"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Пользователи
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/dialogs"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Мессенджер
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/news"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Лента
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/music"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Музыка
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
                >
                    Настройки
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;