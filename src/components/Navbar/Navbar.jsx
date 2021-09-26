import navbar from "./Navbar.module.css";
import {faUserCircle, faEnvelope, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faCogs, faMusic, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={navbar.nav}>
            <li>
                <NavLink activeClassName={navbar.active} to="/profile">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faUserCircle} /></div>
                    <span>Моя страница</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={navbar.active}  to="/users">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faUserFriends} /></div>
                    <span>Пользователи</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={navbar.active} to="/dialogs">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faEnvelope} /></div>
                    <span>Сообщения</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={navbar.active}  to="/news">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faCalendar} /></div>
                    <span>Новости</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={navbar.active}  to="/music">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faMusic} /></div>
                    <span>Музыка</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={navbar.active}  to="/settings">
                    <div className={navbar.icon}><FontAwesomeIcon icon={faCogs} /></div>
                    <span>Настройки</span>
                </NavLink>
            </li>
        </nav>
    );
}

export default Navbar;