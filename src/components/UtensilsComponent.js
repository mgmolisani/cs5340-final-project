import React from 'react'

export default class UtensilsComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    renderAllUtensils()
    {
        if(this.props.utensils) {
            let ing = this.props.utensils.map((value) => {
                    return <li class="list-group-item list-group-item-action"> {value.name} : {value.quantity} </li>
                }
            );
            return ing;
        }
    }


    render() {
        return (
            <div >
                < ul className="list-group" >
                    <li className="list-group-item active">
                        <h3> UTENSILS </h3>
                    </li>
                    {this.renderAllUtensils()}
                </ul>

            </div>

        )
    }
}