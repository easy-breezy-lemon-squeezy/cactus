import './index.css';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import MetaTags from 'react-meta-tags';

ReactDOM.render(
        <Provider store={store}>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </MetaTags>
            <App/>
        </Provider>,
    document.getElementById('root')
);
