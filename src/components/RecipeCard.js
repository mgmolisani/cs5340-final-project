import React from 'react'


const RecipeCard = (props) => {

    return(
        <div className="dib br3 pa2 ma2 grow bw1 b--gray ba shadow-5 w-95">
            <div className="inline-flex bg-light-red br3 ba b--black w-95"
                style={{height: 175, width: 350}}>
                <img className="w-50 h-100 br b--black"
                     style={{objectFit: 'cover'}}
                     src={props.icon}/>
                <h2 className="pl2 pr2 tl white w-50 h-100"
                    style={{fontWeight: 'bold', fontFamily: 'Trebuchet MS'}}>{props.name}</h2>
            </div>
            <div>
                <h4>{props.description}</h4>
            </div>
            <div className="bt b--black pa2">
                <i className=" fl fa fa-play-circle fa-3x red"/>
                <a href='' className="tc pt3 fr red" style={{fontWeight: 'bold', fontSize: 'large'}}>Details ></a>
            </div>
        </div>
    )

};

export default RecipeCard;