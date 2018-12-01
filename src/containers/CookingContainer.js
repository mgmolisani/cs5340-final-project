import React from 'react';
import {data} from '../model/Data';
import CookingSideBar from "./CookingSideBar";
import StepsContainer from "./StepsContainer";
import {css} from 'emotion';

export default class CookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getRecipe = this.getRecipe.bind(this);
        this.state = {
            recipe: {}
        };
    }

    componentDidMount() {
        this.getRecipe(0);
    }

    getRecipe = (id) => {
        const recipe = data.recipes[id];
        this.setState({recipe});
    };

    render() {
        return (
            <div className={css({
                display: 'flex',
                width: '100%'
            })}>
                <CookingSideBar recipe={this.state.recipe}/>
                <StepsContainer recipe={this.state.recipe}/>
            </div>
        );
    }
}