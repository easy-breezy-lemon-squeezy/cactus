import React from 'react';
import Paginator from "../common/Paginator/Paginator.jsx";
import User from "./User/User";
import styles from "./Users.module.css"
function Users({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) {

    return (
        <div className={styles.usersPage}>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         key={u.id}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                        />
                    )
                }
            </div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUserCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
        </div>
    );
}
export default Users;