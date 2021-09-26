import React from 'react';
import styles from "./Users.module.css";
import userPhoto from '../../../src/assets/images/user.jpg'
import {NavLink} from "react-router-dom";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(p =>{

                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {props.onPageChange(p)}}>{p}</span>
                })
            }
            {props.users.map(u =>
                <div key={u.id}>
                    <div className={styles.row}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id);}
                                }>Отписаться</button>
                                : <button onClick={() => {props.follow(u.id);}}>Подписаться</button>}
                        </div>
                    </div>
                    <div className={styles.row}>
                    <span>
                        {console.log(u)}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    </div>
                </div>

            )}
        </div>
    );
}
export default Users;