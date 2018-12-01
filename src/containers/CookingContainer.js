import React from 'react';
import {data} from '../model/Data';
import CookingSideBar from "./CookingSideBar";
import StepsContainer from "./StepsContainer";
import {css} from 'emotion';

export default class CookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: data.schedule[0].recipes[0]
        };
    }

    render() {
        return (
            <div className={css({
                display: 'flex',
                flex: '1 1 auto',
                width: '100%'
            })}>
                <CookingSideBar recipe={this.state.recipe}/>
                <StepsContainer recipe={this.state.recipe}/>
            </div>
        );
    }
}