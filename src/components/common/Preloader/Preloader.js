import React from 'react';
import preolader from "../../../assets/images/preolader.gif";

function Preloader(props) {
    return (
        <img src={preolader} alt={"Загрузка"}/>
    );
}

export default Preloader;