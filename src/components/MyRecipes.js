import React, {Component} from 'react';
import {data} from '../model/Data';
import SearchBox from './SearchBox';
import RecipeCardContainer from './RecipeCardContainer';
import {css} from 'emotion';

class MyRecipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            search: '',
            buttonText: 'Add New Recipe'
        };

        this.selectRecipe = this.selectRecipe.bind(this);
    }

    componentDidMount() {
        let recipes = data.recipes.map((recipe) => {
            recipe.selected = false;
            return recipe;
        });
        this.setState({recipes: recipes});
    }

    updateButton() {
        if (this.state.recipes.filter(r => r.selected === true).length > 0) {
            this.setState({buttonText: 'Schedule Recipe(s)'});
        } else {
            this.setState({buttonText: 'Add New Recipe'});
        }
    }

    selectRecipe(id) {
        for (let i = 0; i < this.state.recipes.length; i++) {
            if (this.state.recipes[i].id === id) {
                this.state.recipes[i].selected = !this.state.recipes[i].selected;
            }
        }
        this.updateButton();
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    };

    render() {
        const filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.state.search);
        });

        return (
            <div className={css({
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative'
            })}>
                <SearchBox search={this.onSearchChange}/>
                <RecipeCardContainer recipes={filteredRecipes}
                                     selectRecipe={this.selectRecipe}/>
                <div className={css({
                    position: 'fixed',
                    bottom: '2em',
                    right: '2em'
                })}>
                    <button className={css({
                        fontSize: '2em',
                        height: '5em',
                        width: '5em',
                        padding: '0.5em',
                        borderRadius: '2.5em',
                        color: 'white',
                        backgroundColor: 'red'
                    })}>
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        );
    }

}

export default MyRecipes;