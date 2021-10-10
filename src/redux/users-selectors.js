import {createSelector} from "reselect";

export const getUsersState = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsersState,  (users)=>{
    return users.filter(u => true)
})
export const getPageSizeState = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUserCountState = (state) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPageState = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetchingState = (state) => {
    return state.usersPage.isFetching
}