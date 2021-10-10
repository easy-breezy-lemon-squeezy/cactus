import but from "./ButtonWrap.module.css";

function buttonWrap(props) {
    return (
        <button onClick={props.onClick} className={but.button}>{props.buttonText}</button>
    );
}

export default buttonWrap;