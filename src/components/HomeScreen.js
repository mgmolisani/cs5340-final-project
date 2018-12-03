import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {css} from 'emotion';
import Calendar from './Calendar';
import RecipeList from './RecipeList';
import {findScheduledRecipesForDate} from '../model/Data';
import moment from 'moment';

export default class HomeScreen
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRecipesByDate: []
        };
        this.handleDaySelection = this.handleDaySelection.bind(this);
    }

    handleDaySelection(date) {
        const selectedRecipesByDate = [...this.state.selectedRecipesByDate];
        const match = selectedRecipesByDate.findIndex(selection => {
            return selection.date.isSame(date, 'day');
        });
        if (match !== -1) {
            selectedRecipesByDate.splice(match, 1);
            this.setState({selectedRecipesByDate});
        } else {
            findScheduledRecipesForDate(date)
                .then(scheduledRecipes => this.setState((state, props) => ({
                    selectedRecipesByDate: [
                        ...state.selectedRecipesByDate,
                        {
                            date,
                            recipes: scheduledRecipes
                        }
                    ]
                })));
        }
    }

    componentDidMount() {
        const today = moment();
        findScheduledRecipesForDate(moment())
            .then(scheduledRecipes => this.setState((state, props) => ({
                selectedRecipesByDate: [{
                    date: today,
                    recipes: scheduledRecipes
                }]
            })));
    }

    render() {
        return (
            <div className={css({
                display: 'flex',
                flex: '1 1 auto',
            })}>
                <Calendar selections={this.state.selectedRecipesByDate.map(selection => selection.date)}
                          handleDaySelection={this.handleDaySelection}/>
                <RecipeList schedule={this.state.selectedRecipesByDate}/>
            </div>
        );
    }
}