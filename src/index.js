import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from './context/context';
import './index.css';
import App from './App';
ReactDom.render(
    <Provider>
    <App />
    </Provider>,
     document.getElementById('root')
     
     );
