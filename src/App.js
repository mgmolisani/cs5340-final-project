import React, {Component} from 'react';
import Calendar from './components/Calendar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import CookingContainer from "./containers/CookingContainer";

export default class App
    extends Component {
    render() {
        return (
            <CookingContainer/>
        );
    }
}
