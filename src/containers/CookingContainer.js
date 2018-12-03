import React from 'react';
import {data} from '../model/Data';
import CookingSideBar from "./CookingSideBar";
import StepsContainer from "./StepsContainer";
import {css} from 'emotion';
import StepItemComponent from '../components/StepItemComponent';

const scheduledRecipe = data.schedule[0];

export default class CookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: data.schedule[0].recipes[0],
            currentStep: 1
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setToCurrentStep = this.setToCurrentStep.bind(this);
    }

    static updateCurrentStep(stepNumber) {
        scheduledRecipe.currentStep = stepNumber;
        return scheduledRecipe.currentStep;
    }

    nextStep() {
        if (this.state.currentStep < this.state.recipe.steps.length) {
            this.setState((state, props) => ({
                currentStep: CookingContainer.updateCurrentStep(state.currentStep + 1)
            }));
        }
    }

    prevStep() {
        if (this.state.currentStep > 1) {
            this.setState((state, props) => ({
                currentStep: CookingContainer.updateCurrentStep(state.currentStep - 1)
            }));
        }
    }

    setToCurrentStep(stepNumber) {
        this.setState({currentStep: CookingContainer.updateCurrentStep(stepNumber)});
    }

    handleKeyDown(event) {
        event.preventDefault();
        switch (event.key) {
            case ' ':
            case 'ArrowDown':
                this.nextStep();
                break;
            case 'ArrowUp':
                this.prevStep();
                break;
            default:
        }
    }
    //
    // componentDidMount() {
    //     document.addEventListener('keydown', this.handleKeyDown);
    // }
    //
    // componentWillUnmount() {
    //     document.removeEventListener('keydown', this.handleKeyDown);
    // }

    render() {
        return (
            <div className={css({
                display: 'flex',
                flex: '1 1 auto',
                width: '100%'
            })}>
                <CookingSideBar recipe={this.state.recipe}/>
                <StepsContainer recipe={this.state.recipe}
                                handleKeyDown={this.handleKeyDown}>
                    {this.state.recipe.steps.map((step, index) => {
                        return <StepItemComponent key={index}
                                                  step={step}
                                                  complete={step.order < this.state.currentStep}
                                                  selected={step.order === this.state.currentStep}
                                                  isLast={this.state.recipe.steps.length === step.order}
                                                  nextStep={this.nextStep}
                                                  setToCurrentStep={() => this.setToCurrentStep(step.order)}
                        />;
                    })}
                </StepsContainer>
            </div>
        );
    }
}