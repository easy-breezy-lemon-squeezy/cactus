import logo from "../../logo.svg";
import head from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={head.header}>
            <div className={head.headerWrapper}>
                <img src={logo} className={head.logo} alt="logo" />
                <div className={head.loginBlock}>
                    {props.isAuth ? <div>
                            <div className={head.loginName}>{props.login} </div>
                            <button onClick={props.logout}>Выйти</button></div> :
                        <div className={head.signIn}><NavLink to={'/login'}>Вход</NavLink></div>}
                </div>
            </div>
        </header>
    );
}

export default Header;