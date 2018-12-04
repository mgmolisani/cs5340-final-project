import React from 'react';
import PropTypes from 'prop-types';
import StartRecipeButton from './StartRecipeButton';
import AddToCartButton from './AddToCartButton';
import ResetButton from './ResetButton';

const RecipeListItem = props => {
    const scheduleId = props.scheduledRecipe.id;
    const {recipe, currentStep, isFinished} = props.scheduledRecipe;
    const {name, description, icon} = recipe;

    const renderStartButtons = () => {
        if (currentStep === 0 && !isFinished) {
            return <StartRecipeButton id={scheduleId}>
                <span className='fa fa-play-circle'/> Start
            </StartRecipeButton>;
        } else if (currentStep > 0 && !isFinished) {
            return <StartRecipeButton id={scheduleId}>
                <span className='fa fa-play-circle'/> Continue
            </StartRecipeButton>;
        }
        return null;
    };

    return (
        <div style={{
            display: 'flex',
            margin: '0.5em 0',
            padding: '0.75em',
            borderRadius: '0.5em',
            backgroundColor: 'white',
            boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)'
        }}>
            <img src={icon}
                 alt={name}
                 style={{
                     height: '4em',
                     width: '4em',
                     flex: '0 0 auto',
                     borderRadius: '0.5em',
                     objectFit: 'cover'
                 }}/>
            <div style={{
                flex: '0 0 auto',
                padding: '0 0.5em'
            }}>
                <h4 style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: 0
                }}>
                    {name}
                </h4>
                <p style={{
                    margin: 0
                }}>
                    {description}
                </p>
            </div>
            <div style={{
                display: 'flex',
                flex: '1 1 0',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <AddToCartButton/>
                {currentStep > 0 && !isFinished && <ResetButton id={scheduleId}
                                                                updateScheduledRecipe={props.updateScheduledRecipe}/>}
                {renderStartButtons()}
            </div>
        </div>
    );
};

RecipeListItem.propTypes = {
    scheduledRecipe: PropTypes.object.isRequired
};

RecipeListItem.defaultProps = {};

export default RecipeListItem;