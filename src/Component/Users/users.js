import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    let slicedPages = pages.slice(curPF, curPF + 10);

    return (
        <div className={styles.usersPage}>
            {props.isFetching ? <Preloader /> : null}
            <div className={styles.pagination}>
                {slicedPages.map(p => {
                    return (
                        <button onClick={() => {props.onPageChanged(p);}}
                                className={`${styles.pageButton} ${props.currentPage === p ? styles.selectedPage : ''}`} key={p}>
                            {p}
                        </button>
                    )
                })}
            </div>
            <div className={styles.usersContainer}>
                {props.users.map(u => (
                    <div key={u.id} className={styles.userCard}>
                        <div className={styles.userAvatar}>
                            <NavLink className={styles.userLink} to={`/profile/${u.id}`}>
                                <img src={u.photos.small || userPhoto} className={styles.userPhoto}
                                     alt={`Фото пользователя ${u.name || 'Без имени'}`}/>
                            </NavLink>
                        </div>
                        <div className={styles.userDetails}>
                            <div className={styles.userName}>{u.name}</div>
                            <div className={styles.userStatus}>{u.status}</div>
                            <div className={styles.userActions}>
                                {u.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.unfollow(u.id)}
                                        className={`${styles.unfollow} ${props.followingInProgress.some(id => id === u.id) ? styles.disabled : ''}`}>
                                        Отписаться
                                    </button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.follow(u.id)}
                                        className={`${styles.follow} ${props.followingInProgress.some(id => id === u.id) ? styles.disabled : ''}`}>
                                        Подписаться
                                    </button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;

