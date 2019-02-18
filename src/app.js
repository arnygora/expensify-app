import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouters} from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<AppRouters/>, document.getElementById('app'));

