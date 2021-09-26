import like from "./Like.module.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Like(props) {
    return (
        <div className={like.like}>
            <div className={like.icon}> <FontAwesomeIcon icon={faHeart} /></div>
            <span>{props.count}</span>
        </div>

    );
}

export default Like;