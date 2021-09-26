import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    getUsers, getCurrentPage, follow, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (pageNumber) =>{
        this.props.getCurrentPage(pageNumber, this.props.pageSize);
    }
    render (){
        return (
            <>  {this.props.isFetching ? <Preloader/> : null}
                 <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange} users={this.props.users}
                        follow={this.props.follow} unfollow={this.props.unfollow}
                        followSuccess={this.props.followSuccess} unfollowSuccess={this.props.unfollowSuccess}
                        currentPage={this.props.currentPage}
                />
            </>

        );

    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage,
        getUsers, getCurrentPage, follow, unfollow}),
    withAuthRedirect
)(UsersContainer);