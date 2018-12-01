import React, {Component} from 'react';
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
import CookingContainer from './containers/CookingContainer';

export default class App
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selections: [moment()]
        };
        this.handleDaySelection = this.handleDaySelection.bind(this);
    }

    handleDaySelection(date) {
        const selections = [...this.state.selections];
        const match = selections.findIndex(selection => {
            return selection.isSame(date, 'day');
        });
        if (match !== -1) {
            selections.splice(match, 1);
        } else {
            selections.push(date);
        }
        this.setState({selections});
    }

    render() {
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
                    flex: '1 1 auto',
                })}>
                    <CookingContainer/>
                </div>
                {/*<SchedulingModal/>*/}
                {/*<AddToCartModal/>*/}
            </div>
        );
    }
}
