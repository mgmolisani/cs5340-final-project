import React from 'react';
import StepItemComponent from "../components/StepItemComponent";
import {css} from 'emotion';

export default class StepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.nextButton = this.nextButton.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.state = {
            selected: 1
        };

    }

    renderAllSteps() {
        if (this.props.recipe.steps) {
            return this.props.recipe.steps.map((value) => {
                    return <StepItemComponent step={value}
                                              selected={this.state.selected}
                                              setOrder={(order) => this.setSelected(order)}
                                              isLast={this.props.recipe.steps.length === value.order}
                                              next={() => this.nextButton()}/>;

                }
            );
        }
    }

    nextButton() {
        this.setState({selected: this.state.selected + 1});
    }

    setSelected(order) {
        this.setState({selected: order});
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
                    {this.props.recipe.name}
                </div>
                <div style={{
                    flex: '1 1 auto',
                    width: '100%',
                    overflowY: 'auto',
                    padding: '1em',
                    boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)'
                }}>
                    {this.renderAllSteps()}
                </div>
            </div>

        );
    }
}