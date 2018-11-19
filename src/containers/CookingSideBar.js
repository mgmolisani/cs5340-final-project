import React from 'react'
import {data} from '../model/Data'
import UtensilsComponent from "../components/UtensilsComponent";
import IngredientsComponent from "../components/IngredientsComponent";

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
                <div className="flex-container" style={{margin: 10, marginTop: 200}}>
                    <i className="fa fa-chevron-left btn-lg"
                       style={{backgroundColor: "red", borderColor: "red", color: "white"}}>
                        <a className=" btn-lg"
                           style={{
                               fontSize: "x-large", fontWeight: "bolder",
                               backgroundColor: "red", borderColor: "red", color: "white"
                           }}>
                            BACK
                        </a>
                    </i>


                </div>
            </div>

        )
    }
}