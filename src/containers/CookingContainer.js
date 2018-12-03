import React from 'react';
import CookingSideBar from "./CookingSideBar";
import StepsContainer from "./StepsContainer";
import {css} from 'emotion';
import StepItemComponent from '../components/StepItemComponent';

export default class CookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
            currentStep: 0
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setToCurrentStep = this.setToCurrentStep.bind(this);
    }

    finishRecipe() {
        const {id, data} = this.props;
        data.finishRecipe(id)
    }

    nextStep() {
        const {recipe, currentStep} = this.state;
        const {id, data} = this.props;
        if (currentStep < recipe.steps.length) {
            data.changeCurrentStep(id, currentStep + 1)
                .then(currentStep => this.setState({currentStep}));
        }
    }

    prevStep() {
        const {currentStep} = this.state;
        const {id, data} = this.props;
        if (currentStep > 1) {
            data.changeCurrentStep(id, currentStep - 1)
                .then(currentStep => this.setState({currentStep}));
        }
    }

    setToCurrentStep(stepNumber) {
        const {id, data} = this.props;
        data.changeCurrentStep(id, stepNumber)
            .then(currentStep => this.setState({currentStep}));
    }

    handleKeyDown(event) {
        switch (event.key) {
            case ' ':
            case 'ArrowDown':
                event.preventDefault();
                this.nextStep();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.prevStep();
                break;
            default:
        }
    }

    componentDidMount() {
        const {data} = this.props;
        data.findScheduledRecipeById(this.props.id)
            .then(scheduledRecipe => {
                const {recipe, currentStep} = scheduledRecipe;
                if (currentStep === 0) {
                    data.changeCurrentStep(this.props.id, 1)
                        .then(currentStep => this.setState({
                            recipe,
                            currentStep
                        }));
                } else {
                    this.setState({
                        recipe,
                        currentStep
                    });
                }
            });
    }

    render() {
        return (
            <div className={css({
                display: 'flex',
                flex: '1 1 auto',
                width: '100%'
            })}>
                {this.state.recipe
                    ? <React.Fragment>
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
                    </React.Fragment>
                    : null
                }
            </div>
        );
    }
}