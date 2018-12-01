import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import MyRecipes from './components/MyRecipes';
import HomeScreen from "./components/HomeScreen";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
