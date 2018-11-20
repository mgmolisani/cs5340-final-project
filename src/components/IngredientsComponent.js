import React from 'react'

export default class IngredientsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAllIng() {
        if (this.props.ingredients) {
            let x = 0;
            let ing = this.props.ingredients.map((value) => {
                x++;
                    return <li key={x}
                        className="list-group-item list-group-item-action">
                        {value.name} : {value.quantity}{value.uom.displayName} </li>
                }
            );
            return ing;
        }
    }


    render() {
        return (
            <div>
                < ul className="list-group" style={{width: "142%"}}>
                    <li className="list-group-item active" style={{backgroundColor: "red", borderColor: "red"}}>
                        <h3>INGREDIENTS </h3>
                    </li>
                    {this.renderAllIng()}
                </ul>

            </div>

        )
    }
}