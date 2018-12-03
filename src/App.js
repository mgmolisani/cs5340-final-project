import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import {css} from 'emotion';
import Header from './components/Header';
import MyRecipes from './components/MyRecipes';
import HomeScreen from './components/HomeScreen';
import GroceryListDesktop from "./components/GroceryListDesktop";
import CookingContainer from "./containers/CookingContainer";
import Data from './model/Data';

export default class App
    extends Component {

    static data = new Data();

    render() {
        console.log(App.data);
        return (
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflowX: 'hidden'
            })}>
                <Header/>
                <div className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflowX: 'hidden'
                })}>
                    <Switch>
                        <Route path="/recipes">
                            {() => <MyRecipes data={App.data}/>}
                        </Route>
                        <Route path="/groceries">
                            {() => <GroceryListDesktop data={App.data}/>}
                        </Route>
                        <Route path="/cooking/:id">
                            {({match}) => <CookingContainer id={parseInt(match.params.id)} data={App.data}/>}
                        </Route>
                        <Route path="/">
                            {() => <HomeScreen data={App.data}/>}
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
