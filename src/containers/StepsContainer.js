import React from 'react'
import StepItemComponent from "../components/StepItemComponent";
import Step1Component from "../components/Step1Component";
import Step2Component from "../components/Step2Component";
import Step3Component from "../components/Step3Component";

export default class StepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.nextButton = this.nextButton.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.state = {
            selected: 1,
            display: 0
        }

    }

    renderSteps() {
        return (

            <div>
                <div>
                    {this.state.display === 0 ?
                        <Step1Component step={null}/>
                        :
                        <Step1Component step={this.props.recipe.steps[this.state.display - 1]}
                                        selected={this.state.selected} setOrder={(order) => this.setSelected(order)}/>
                    }
                </div>
                < div>
                    <Step2Component step={this.props.recipe.steps[this.state.display]}
                                    max={this.props.recipe.steps.length} next={this.nextButton}/>
                </div>
                < div>
                    {this.state.display === this.props.recipe.steps.length - 1 ?
                        <Step1Component step={null}/>
                        :
                        <Step1Component step={this.props.recipe.steps[this.state.display + 1]}/>
                    }
                </div>
            </div>


        )
    }

    nextButton() {
        if (this.state.selected < this.props.recipe.steps.length) {
            this.setState({display: this.state.display + 1})
            this.setState({selected: this.state.selected + 1})
        }
    }

    setSelected(order) {

        this.setState({selected: order+1})
        this.setState({display: order})
    }


    render() {
        return (

            <div className="flex-container" style={{display: "flex", flexDirection: "column"}}>
                <div className="bd-highlight"
                     style={{
                         textAlign: "center",
                         fontWeight: "bolder",
                         fontSize: "xx-large",
                         borderStyle: "outset",
                         color: "red",
                         fontFamily: "Verdana"
                     }}>
                    <h1>{this.props.recipe.name} </h1>
                </div>
                {this.props.recipe.steps ? this.renderSteps() : null}
            </div>

        )
    }
}