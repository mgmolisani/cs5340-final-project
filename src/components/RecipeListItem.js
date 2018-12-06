import React from 'react';
import PropTypes from 'prop-types';
import StartRecipeButton from './StartRecipeButton';
import AddToCartButton from './AddToCartButton';
import ResetButton from './ResetButton';
import DataService from '../model/Data';
import AddToCartModal from "./AddToCartModal";

export default class RecipeListItem extends React.Component {
    constructor(props) {
        super(props);
        this.switchModal = this.switchModal.bind(this);
        this.accept = this.accept.bind(this);
        this.state = {
            displayModal: false
        };
    }

    renderStartButtons() {
        const {scheduledRecipe} = this.props;
        const scheduleId = scheduledRecipe.id;
        const {recipe, currentStep, isFinished} = scheduledRecipe;
        if (!isFinished) {
            if (currentStep === 0) {
                return <StartRecipeButton id={scheduleId}>
                    <span className='fa fa-play-circle'/> Start
                </StartRecipeButton>;
            } else if (currentStep > 0) {
                return <StartRecipeButton id={scheduleId}>
                    <span className='fa fa-play-circle'/> Continue
                </StartRecipeButton>;
            }
        } else {
            return <StartRecipeButton id={scheduleId}
                                      onClick={() => DataService.resetRecipe(scheduleId)}>
                <span className='fa fa-play-circle'/> Restart
            </StartRecipeButton>;
        }
    }

    switchModal() {
        this.setState({displayModal: !this.state.displayModal})
    }
    accept() {
       let h= DataService.addRecipeToGroceryList(this.props.scheduledRecipe.recipe.id);
        console.log(h);
        this.setState({displayModal: !this.state.displayModal});
    }

    render() {
        return (<div style={{
                display: 'flex',
                margin: '0.5em 0',
                padding: '0.75em',
                borderRadius: '0.5em',
                backgroundColor: 'white',
                boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)'
            }}>
                <img src={this.props.scheduledRecipe.recipe.icon}
                     alt={this.props.scheduledRecipe.recipe.name}
                     style={{
                         height: '4em',
                         width: '4em',
                         flex: '0 0 auto',
                         borderRadius: '0.5em',
                         objectFit: 'cover'
                     }}/>
                <div style={{
                    flex: '1 1 auto',
                    padding: '0 0.5em',
                    overflow: 'hidden'
                }}>
                    <h4 style={{
                        overflow: 'hidden',
                        margin: 0
                    }}>
                        {this.props.scheduledRecipe.recipe.name}
                    </h4>
                    <p style={{
                        margin: 0,
                        overflow: 'hidden'
                    }}>
                        {this.props.scheduledRecipe.recipe.description}
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    flex: '1 1 0',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <AddToCartButton displayModal={this.switchModal}/>
                    {this.props.scheduledRecipe.currentStep > 0 && !this.props.scheduledRecipe.isFinished &&
                    <ResetButton id={this.props.scheduledRecipe.id}
                                 updateScheduledRecipe={this.props.updateScheduledRecipe}/>}
                    {this.renderStartButtons()}
                    {this.state.displayModal ? <AddToCartModal accept={this.accept} name={this.props.scheduledRecipe.recipe.name}
                                                                    displayModal={this.switchModal}/> : null}
                </div>
            </div>
        )
    }
}

// RecipeListItem.propTypes = {
//     scheduledRecipe: PropTypes.object.isRequired
// };
//
// RecipeListItem.defaultProps = {};
//
// export
// default
// RecipeListItem;