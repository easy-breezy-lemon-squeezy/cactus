import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter, Redirect, HashRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <HashRouter>
                <HeaderContainer/>
                <div className="app-wrapper">

                    <Navbar/>
                    <div className="app-wrapper-content">
                            <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>
                            <React.Suspense fallback={<Preloader />} >
                                <Route exact path="/profile/:iserId?" render={() => <ProfileContainer/>} />
                                <Route path="/dialogs"  render={() => <DialogsContainer/>}/>
                            </React.Suspense>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <LoginPage/>}/>


                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    connect(mapStateToProps, {initializeApp}))(App);
