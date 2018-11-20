import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tachyons from 'tachyons';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import MyRecipes from './components/MyRecipes';

ReactDOM.render(
    <App/>,
    document.getElementById('root'));
registerServiceWorker();
