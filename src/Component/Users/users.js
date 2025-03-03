import React from "react";
import styles from "./users.module.css";
import Preloader from "../common/Preloader/Preloader";
import User from "./user";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 2) < 0) ? 0 : curP - 2; // для среза страниц
    let slicedPages = pages.slice(curPF, curPF + 10);
    return (
        <div className={styles.usersPage}>
            {props.isFetching ? <Preloader/> : null}

            <div className={styles.pagination}>
                {slicedPages.map(p => (
                    <button
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                        className={`${styles.pageButton} ${props.currentPage === p ? styles.selectedPage : ''}`}
                        key={p}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <div className={styles.usersContainer}>
                {props.users.map(u => (
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        key={u.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Users;


