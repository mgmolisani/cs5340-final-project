import React from 'react'
import {data} from '../model/Data'
import CookingSideBar from "./CookingSideBar";
import StepsContainer from "./StepsContainer";

export default class CookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getRecpie = this.getRecpie.bind(this);
        this.state = {
            recipe: ''
        }
    }

    componentDidMount() {
        this.getRecpie(0)
    }

    getRecpie = (id) => {
        var recipe = data.recipes[id];
        this.setState({recipe});
    }

    render() {
        return (
            <div className="container-fluid h-100" >
                <div className="row" >
                    <div className="col-lg-3, col-md-3" style={{borderRightStyle:"solid", marginTop:10}}>
                        <CookingSideBar recipe={this.state.recipe}/>
                    </div>
                    <div className="col-lg-9, col-md-9" style={{marginTop:10, paddingLeft:0}}>
                        <StepsContainer recipe={this.state.recipe}/>
                    </div>
                </div>
            </div>
        )
    }
}