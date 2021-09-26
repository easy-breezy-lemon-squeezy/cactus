import dialog from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

function Dialog(props) {

    return (
        <div className={dialog.dialog + ' ' + dialog.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>

    );
}

export default Dialog;