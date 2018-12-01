import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
import {css} from 'emotion';
import Header from './components/Header';
import Calendar from './components/Calendar';
import RecipeList from './components/RecipeList';
import {data} from './model/Data';
import MyRecipes from './components/MyRecipes';
import SchedulingModal from './components/SchedulingModal';
import AddToCartModal from './components/AddToCartModal';
import HomeScreen from './components/HomeScreen'
import GroceryListDesktop from "./components/GroceryListDesktop";
import CookingContainer from "./containers/CookingContainer";

export default class App
    extends Component {


    render() {
        return (
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflowX: 'hidden'
            })}>
                <Header/>
                <Switch>
                    <Route path="/recipes" component={MyRecipes}/>
                    <Route path="/groceries" component={GroceryListDesktop}/>
                    <Route path="/cooking/:id" componet={CookingContainer}/>
                    <Route path="/" component={HomeScreen}/>
                </Switch>
            </div>
        );
    }
}
