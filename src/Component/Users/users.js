import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++, pages.length < 10) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    let curPL = curP + 1;
    let slicedPages = pages.slice(curPF, curPL);
    return <div>
        <div >
            {slicedPages.map(p => {
                return <button  onClick={(e) => {
                    props.onPageChanged(p);
                }} className={styles.selectedPage}>{p}</button>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink className={styles.userLink} to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>
                        {props.unfollow(u.id)}}
                                  className={styles.unfollow}>Отписаться</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>
                        {props.follow(u.id)}}
                                  className={styles.follow}>Подписаться</button>}
                </div>
            </span>
            <span>
                <span>
               <div className={styles.loc}>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                <span>
                    <div className={styles.loc}>{"u.location.country"}</div>
                    <div className={styles.loc}>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
        }
    </div>;
}
export default Users

