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
            search: ''
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

    renderButton() {
        const isScheduled = this.state.recipes.filter(r => r.selected === true).length > 0;
        return <button className={css({
            fontSize: '2em',
            height: '5em',
            width: '8em',
            padding: '0.75em',
            borderRadius: '100vh',
            zIndex: 10,
            color: isScheduled ? 'red' : 'white',
            backgroundColor: isScheduled ? 'white' : 'red',
            border: '3px solid red',
            boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)',
        })}>
            <div className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })}>
                {isScheduled ? 'Schedule Recipe(s)' : 'Add New Recipe'}
                <i className={isScheduled ? 'fa fa-calendar fa-2x fa-fw' : 'fa fa-plus fa-2x fa-fw'}/>
            </div>
        </button>;
    }

    selectRecipe(id) {
        for (let i = 0; i < this.state.recipes.length; i++) {
            if (this.state.recipes[i].id === id) {
                const recipes = [...this.state.recipes];
                recipes[i].selected = !recipes[i].selected;
                this.setState({recipes});
            }
        }
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
                    {this.renderButton()}
                </div>
            </div>
        );
    }

}

export default MyRecipes;