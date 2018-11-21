import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
import {css} from 'emotion';
import CookingContainer from './containers/CookingContainer';
import Header from './components/Header';

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
                    {/*<GroceryListDesktop/>
                    <Calendar selections={this.state.selections}
                              handleDaySelection={this.handleDaySelection}/>
                    <RecipeList schedule={data.schedule.filter(scheduleItem => {
                        return this.state.selections.some(selection => {
                            return scheduleItem.date.isSame(selection, 'day');
                        });
                    })}/>
                    <MyRecipes/>*/}
                    <CookingContainer/>
                </div>
                {/*<AddToCartModal/>*/}
            </div>
        );
    }
}
