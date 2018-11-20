import React from 'react';

export default class IngredientsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAllIng() {
        if (this.props.ingredients) {
            return this.props.ingredients.map((value) => {
                    return <li
                        className="list-group-item list-group-item-action"> {value.name} : {value.quantity}{value.uom.displayName} </li>;
                }
            );
        }
    }

    render() {
        return (
            <div>
                <ul className="list-group" style={{width: "142%"}}>
                    <li className="list-group-item active" style={{backgroundColor: "red", borderColor: "red"}}>
                        <h3>INGREDIENTS </h3>
                    </li>
                    {this.renderAllIng()}
                </ul>

            </div>

        );
    }
}