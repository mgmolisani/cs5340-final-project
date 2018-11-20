import React from 'react';
import {css} from 'emotion';


export default class IngredientsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAllIng() {
        if (this.props.ingredients) {
            return this.props.ingredients.map((value) => {
                    return(<div className={css({
                        flex: '0 0 auto',
                        fontSize: '1em',
                        height: '2em',
                        textAlign: 'center',
                        margin: '0.5em',
                        padding: '0.5em',
                        whiteSpace: 'nowrap',
                        fontWeight: 'bolder'
                    }) }>
                        <div className="list-group-item list-group-item-action">
                            {value.name} : {value.quantity}{value.uom.displayName} </div>
                    </div>)
                }
            );
        }
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className={css({
                            flex: '0 0 auto',
                            fontSize: '1.5em',
                            height: '2.5em',
                            color: 'white',
                            backgroundColor: 'darkred',
                            textAlign: 'center',
                            margin: '0.5em',
                            padding: '0.5em',
                            whiteSpace: 'nowrap',
                            fontWeight: 'bolder',
                            border: "solid",
                            borderRadius: '1em'
                        })}>
                            INGREDIENTS
                        </div>

                    </li>
                    {this.renderAllIng()}
                </ul>

            </div>

        );
    }
}