import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    getUsers, getCurrentPage, follow, unfollow, toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetchingState, getIsFollowingInProgressState,
    getPageSizeState, getTotalUserCountState, getUsersSelector
} from "../../redux/users-selectors";




class UsersContainer extends React.Component{

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) =>{
        const {pageSize} = this.props;
        this.props.getCurrentPage(pageNumber, pageSize);
    }
    render (){
        return (
            <>  {this.props.isFetching ? <Preloader/> : null}
                 <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged} users={this.props.users}
                        follow={this.props.follow} unfollow={this.props.unfollow}
                        followSuccess={this.props.followSuccess} unfollowSuccess={this.props.unfollowSuccess}
                        currentPage={this.props.currentPage}
                        followingInProgress={this.props.followingInProgress}
                />
            </>

        );

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeState(state),
        totalUserCount: getTotalUserCountState(state),
        currentPage: getCurrentPageState(state),
        isFetching: getIsFetchingState(state),
        followingInProgress: getIsFollowingInProgressState(state)
    }
}

export default compose(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage,
        getUsers, getCurrentPage, follow, unfollow, toggleFollowingProgress})
)(UsersContainer);