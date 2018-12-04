import React from 'react';
import IngredientsComponent from "../components/IngredientsComponent";
import {css} from 'emotion';
import Link from 'react-router-dom/es/Link';

export default class CookingSideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={css({
                flex: '0 0 25%',
                display: 'flex',
                flexDirection: 'column'
            })}>
                <div className={css({
                    display: 'flex',
                    flex: '0 0 auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottom: '2px solid grey',
                    fontSize: '2em',
                    height: '3em'
                })}>
                    <div className={css({
                        flex: '0 0 auto',
                        color: 'white',
                        backgroundColor: 'darkred',
                        border: '3px solid darkred',
                        textAlign: 'center',
                        padding: '0.25em 0.75em',
                        borderRadius: '100vh',
                        whiteSpace: 'nowrap'
                    })}>
                        Ingredients
                    </div>
                </div>
                <div className={css({
                    flex: '1 1 auto'
                })}>
                    <IngredientsComponent ingredients={this.props.recipe.ingredients}/>
                </div>
                <div className={css({
                    flex: '0 0 auto'
                })}>
                    <Link to={'/'}>
                        <button className={css({
                            color: 'white',
                            backgroundColor: 'red',
                            cursor: 'pointer',
                            border: 0,
                            borderRadius: '0.3em',
                            whiteSpace: 'nowrap',
                            padding: '0.5em',
                            margin: '0.75em',
                            fontSize: '2em'
                        })}>
                            <i className="fa fa-chevron-left" style={{marginRight: 5}}/>
                            Back
                        </button>
                    </Link>
                </div>
            </div>

        );
    }
}