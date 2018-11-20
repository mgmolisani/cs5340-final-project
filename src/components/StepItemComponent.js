import React from 'react'


export default class StepItemComponent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div>
                {this.props.selected !== this.props.step.order ?
                    <div >
                    <li className="list-group-item"
                        style={{
                            fontSize: 35,
                            margin:5,
                            backgroundColor: "#cccccc",
                            border:"solid"
                        }}>
                        <div className="flex-container" style={{display: "flex"}}>
                            {this.props.selected > this.props.step.order ?
                                <div>
                                    <i className="fa  fa-check-circle fa-lg"
                                       onClick={() => this.props.setOrder(this.props.step.order)}
                                       style={{color: "red"}}></i>
                                </div>

                                :
                                <div className="flex-container" style={{
                                    display:"flex",
                                    marginTop: 10,
                                    marginRight: 5,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: " #D9D9D9",
                                    borderStyle: "solid",
                                    flexShrink: 0,
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <div style={{fontSize: 30}}>{this.props.step.order}</div>

                                </div>
                            }
                            <div style={{flexShrink: 1, marginLeft: 10}}>
                                {this.props.step.info}
                            </div>
                        </div>

                    </li>
                    </div>
                    :

                    <li className="list-group-item list-group-item-action"
                        style={{fontSize: 40, border:"solid", marginTop:5, marginBottom:5, marginLeft:1}}>

                        <div>
                            <div className="flex-container" style={{display: "flex"}}>
                                <div className="flex-container" style={{
                                    display: "flex",
                                    marginTop: 10,
                                    marginRight: 5,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: " #f2f2f2",
                                    borderStyle: "solid",
                                    flexShrink: 0,
                                    justifyContent:"center",
                                    alignItems:"center"

                                }}>
                                    <div style={{ fontSize: 30}}>{this.props.step.order}</div>
                                </div>
                                <div style={{flexShrink: 1, marginLeft: 10}}>
                                    {this.props.step.info}
                                </div>
                            </div>
                            <div className="flex-container" style={{display: "flex", justifyContent: "flex-end"}}>
                                {this.props.step.order !== this.props.max
                                    ?
                                    <button className="btn-outline-success btn-lg"
                                            style={{fontWeight: "bold"}} onClick={this.props.next}>Next
                                    </button>
                                    :
                                    <button className="btn btn-lg"
                                            style={{
                                                fontWeight: "bolder",
                                                backgroundColor: "red",
                                                color: "white",
                                                borderColor: "red"
                                            }}>Finish
                                    </button>
                                }
                            </div>
                        </div>

                    </li>
                }
            </div>

        )
    }
}