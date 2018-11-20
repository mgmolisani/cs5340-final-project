import React, {Component} from 'react';
import {data} from '../model/Data';
import SearchBox from './SearchBox';
import RecipeCardContainer from './RecipeCardContainer';

class MyRecipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            search: ''
        };

    }

    componentDidMount() {
        const recipes = data.recipes;
        this.setState({recipes: recipes});
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    };

    render() {
        const filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.state.search);
        });

        return (
            <div className='tc'
            style={{
                flex: '1 1 auto'
            }}>
                <div className="ma3">
                    <SearchBox search={this.onSearchChange}/>
                </div>
                <RecipeCardContainer recipes={filteredRecipes}/>
            </div>
        );
    }

}

export default MyRecipes;