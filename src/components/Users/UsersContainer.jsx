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
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetchingState,
    getPageSizeState, getTotalUserCountState, getUsersState, getUsersSelector
} from "../../redux/users-selectors";




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

/*let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeState(state),
        totalUserCount: getTotalUserCountState(state),
        currentPage: getCurrentPageState(state),
        isFetching: getIsFetchingState(state)
    }
}

export default compose(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage,
        getUsers, getCurrentPage, follow, unfollow})
)(UsersContainer);