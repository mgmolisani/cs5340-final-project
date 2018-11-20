import React from 'react'
import StepItemComponent from "../components/StepItemComponent";

export default class StepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.nextButton = this.nextButton.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.state = {
            selected: 1
        }

    }

    renderAllSteps() {
        if (this.props.recipe.steps) {
            let ing = this.props.recipe.steps.map((value) => {
                    return <StepItemComponent step={value} selected={this.state.selected}
                                       setOrder={(order) => this.setSelected(order)}       max={this.props.recipe.steps.length} next={() => this.nextButton()}/>

                }
            );
            return ing;
        }
    }

    nextButton() {
        this.setState({selected: this.state.selected + 1})
    }

    setSelected(order) {
        this.setState({selected: order})
    }


    render() {
        return (
            <div>
                <div className="bd-highlight"
                     style={{
                         textAlign: "center",
                         fontWeight: "bolder",
                         fontSize: "xx-large",
                         borderStyle: "outset",
                         color:"red",
                         fontFamily:"Verdana"
                     }}>
                    <h1>{this.props.recipe.name} </h1>
                </div>
                <div style={{ height:"100vh"}}>

                    <div style={{overflowY: "scroll", position:"relative",height:"90vh"}}>
                        < ul className="list-group">
                            {this.renderAllSteps()}
                        </ul>

                    </div>
                </div>
            </div>

        )
    }
}