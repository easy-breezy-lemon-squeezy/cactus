import React from 'react';
import styles from "./User.module.css";
import userPhoto from '../../../avatar.jpg'
import {NavLink} from "react-router-dom";

function Users({user,followingInProgress, follow, unfollow}) {

    return (
        <div>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.avatar} alt={"Аватар"} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.col2}>

                    <div className={styles.folInfo}>
                        <p>{user.name}</p>
                        <p>{user.status}</p>


                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>Отписаться</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>Подписаться</button>
                        }
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Users;