import React from 'react';
import StepItemComponent from "../components/StepItemComponent";
import {css} from 'emotion';
import {data} from '../model/Data';

const scheduledRecipe = data.schedule[0];

export default class StepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: data.schedule[0].recipes[0],
            currentStep: 1
        };
        this.nextStep = this.nextStep.bind(this);
        this.setToCurrentStep = this.setToCurrentStep.bind(this);
    }

    renderAllSteps() {
        return this.state.recipe.steps.map((step, index) => {
                return <StepItemComponent key={index}
                                          step={step}
                                          complete={step.order < this.state.currentStep}
                                          selected={step.order === this.state.currentStep}
                                          isLast={this.props.recipe.steps.length === step.order}
                                          nextStep={this.nextStep}
                                          setToCurrentStep={() => this.setToCurrentStep(step.order)}
                />;

            }
        );
    }

    static updateCurrentStep(stepNumber) {
        scheduledRecipe.currentStep = stepNumber;
        return scheduledRecipe.currentStep;
    }

    nextStep() {
        this.setState((state, props) => ({
            currentStep: StepsContainer.updateCurrentStep(this.state.currentStep + 1)
        }));
    }

    setToCurrentStep(stepNumber) {
        this.setState({currentStep: StepsContainer.updateCurrentStep(stepNumber)});
    }

    render() {
        return (
            <div className={css({
                flex: '0 0 auto',
                width: '75%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'darkgrey',
                minHeight: '100%',
                overflow: 'hidden'
            })}>
                <div className={css({
                    flex: '0 0 auto',
                    fontSize: '2em',
                    height: '3em',
                    color: 'white',
                    backgroundColor: 'darkred',
                    textAlign: 'center',
                    margin: 0,
                    padding: '1em',
                    whiteSpace: 'nowrap'
                })}>
                    {this.state.recipe.name}
                </div>
                <div style={{
                    flex: '1 1 auto',
                    width: '100%',
                    overflowY: 'auto',
                    padding: '0 1em',
                    boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)'
                }}>
                    {this.renderAllSteps()}
                </div>
            </div>

        );
    }
}