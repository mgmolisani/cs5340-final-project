import React from 'react';
import PropTypes from 'prop-types';
import RecipeListDay from './RecipeListDay';
import {css} from 'emotion';

const RecipeList = props => {
    const hasSelection = () => {
        if (props.schedule.length > 0) {
            return <React.Fragment>
                {props.schedule.map(day => {
                    return <RecipeListDay key={day.date}
                                          date={day.date}
                                          recipes={day.recipes}
                                          updateScheduledRecipe={props.updateScheduledRecipe}/>;
                })}
                {/*<h3 className={css({
                    textAlign: 'center',
                    margin: 'auto',
                    width: '70%',
                    color: '#505050',
                    textShadow: '0px 1px 0px rgba(255,255,255,.5)'
                })}>
                    Add all meals to your grocery list <span><AddToCartButton/></span>
                </h3>*/}
            </React.Fragment>;
        } else {
            return <h3 className={css({
                textAlign: 'center',
                margin: 'auto',
                width: '70%',
                padding: '3em 0',
                color: '#505050',
                textShadow: '0px 1px 0px rgba(255,255,255,.5)'
            })}>
                You do not have any days selected. Use the calendar to select days.
                <br/><br/>
                Scheduled meals for the selected days will appear here.
            </h3>;
        }
    };

    return (
        <div className={css({
            flex: '0 0 auto',
            width: '40em',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'darkgrey',
            minHeight: '100%',
            overflow: 'hidden'
        })}>
            <div style={{
                flex: '0 0 auto',
                fontSize: '2em',
                height: '3em',
                color: 'white',
                backgroundColor: 'darkred',
                textAlign: 'center',
                margin: 0,
                padding: '1em',
                whiteSpace: 'nowrap'
            }}>
                Planned Recipes
            </div>
            <div style={{
                flex: '1 1 auto',
                overflowY: 'auto',
                padding: '1em',
                boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)'
            }}>
                {hasSelection()}
            </div>
        </div>
    );
};

RecipeList.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.object).isRequired
};

RecipeList.defaultProps = {};

export default RecipeList;