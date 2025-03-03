import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.userCard}>
            <div className={styles.userAvatar}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small || userPhoto}
                         alt={`Фото пользователя ${user.name || 'Без имени'}`}/>
                </NavLink>
            </div>
            <div>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userStatus}>{user.status}</div>
                <div className={styles.userActions}>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unfollow(user.id)}
                            className={`${styles.unfollow} ${followingInProgress.some(id => id === user.id)}`}>
                            Отписаться
                        </button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}
                            className={`${styles.follow} ${followingInProgress.some(id => id === user.id)}`}>
                            Подписаться
                        </button>}
                </div>
            </div>
        </div>
    )

}

export default User;

