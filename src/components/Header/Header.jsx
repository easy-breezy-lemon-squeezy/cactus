import logo from "../../logo.svg";
import head from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={head.header}>
            <img src={logo} className={head.logo} alt="logo" />
            <div className={head.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Вход</NavLink>}
            </div>
        </header>
    );
}

export default Header;