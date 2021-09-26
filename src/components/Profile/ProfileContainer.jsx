import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import userPhoto from '../../../src/assets/images/user.jpg'
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.iserId;

        if(!userId){
            userId = 18985;
        }

        this.props.getProfile(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );

    }
}


let mapStateToProps  = (state) =>({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withRouter
)(ProfileContainer);