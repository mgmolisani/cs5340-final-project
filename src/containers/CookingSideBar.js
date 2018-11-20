import React from 'react'
import {data} from '../model/Data'
import UtensilsComponent from "../components/UtensilsComponent";
import IngredientsComponent from "../components/IngredientsComponent";
import {css} from 'emotion';

export default class CookingSideBar extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="row">
                    <IngredientsComponent ingredients={this.props.recipe.ingredients}/>
                </div>
                {/*<div className="row" style={{margin:10}}>*/}
                {/*<UtensilsComponent utensils={this.props.recipe.utensils}/>*/}
                {/*</div> */}

                <div style={{position: "absolute", bottom: 32, marginLeft: 25, width: 20}}>

                    <button className={css({
                        color: 'white',
                        backgroundColor: 'red',
                        cursor: 'pointer',
                        border: 0,
                        borderRadius: '0.3em',
                        whiteSpace: 'nowrap',
                        padding: '0.5em',
                        marginTop: '0.75em',
                        fontSize: 30
                    })}>
                        <i  className="fa fa-chevron-left"  style={{marginRight: 5}}/>
                        BACK
                    </button>

                </div>
            </div>

        )
    }
}