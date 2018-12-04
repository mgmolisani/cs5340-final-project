import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {css} from 'emotion';
import Calendar from './Calendar';
import RecipeList from './RecipeList';
import moment from 'moment';
import DataService from '../model/Data';

export default class HomeScreen
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRecipesByDate: []
        };
        this.updateScheduledRecipe = this.updateScheduledRecipe.bind(this);
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
            this.fetchScheduledRecipesForDate(date);
        }
    }

    fetchScheduledRecipesForDate(date) {
        DataService.findScheduledRecipesForDate(date)
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

    componentDidMount() {
        this.fetchScheduledRecipesForDate(moment());
    }

    updateScheduledRecipe(scheduledRecipe) {
        this.setState((state, props) => {
            const newSelectedRecipesByDate = [...state.selectedRecipesByDate];
            const selectedDate = newSelectedRecipesByDate.find(selectedDate => selectedDate.date.isSame(scheduledRecipe.date, 'day'));
            const index = selectedDate.recipes.findIndex(recipe => recipe.id === scheduledRecipe.id);
            selectedDate.recipes[index] = scheduledRecipe;
            return {selectedRecipesByDate: newSelectedRecipesByDate};
        });
    }

    render() {
        return (
            <div className={css({
                display: 'flex',
                flex: '1 1 auto',
            })}>
                <Calendar selections={this.state.selectedRecipesByDate.map(selection => selection.date)}
                          handleDaySelection={this.handleDaySelection}/>
                <RecipeList schedule={this.state.selectedRecipesByDate}
                            updateScheduledRecipe={this.updateScheduledRecipe}/>
            </div>
        );
    }
}