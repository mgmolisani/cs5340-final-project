import React from 'react'


export default class StepItemComponent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div>
                {this.props.selected !== this.props.step.order ?

                    <li className="list-group-item"
                        style={{
                            fontSize: 35,
                            marginBottom: 5,
                            marginTop: 5,
                            backgroundColor: "#cccccc"
                        }}>
                        <div className="flex-container">
                            {this.props.selected > this.props.step.order ? <span>
                                    <i className="fa  fa-check-circle fa-lg"
                                       onClick={() => this.props.setOrder(this.props.step.order)} style={{color: "red"}}></i>
                                </span>
                                :
                                <div style={{
                                    marginTop: 10,
                                    marginRight: 5,
                                    width: 46,
                                    height: 46,
                                    borderRadius: 23,
                                    backgroundColor: " #D9D9D9",
                                    borderStyle: "solid",
                                    display: "inline-block"
                                }}>
                                    <div style={{textAlign: "center", fontSize: 30}}>{this.props.step.order}</div>

                                </div>
                            }
                            <div style={{display: "inline", marginLeft: 10}}>
                                {this.props.step.info}
                            </div>
                        </div>

                    </li>

                    :

                    <li className="list-group-item list-group-item-action"
                        style={{fontSize: 45}}>

                        <div>
                            <div className="flex-container">
                                <div style={{
                                    marginTop: 10,
                                    marginRight: 5,
                                    width: 46,
                                    height: 46,
                                    borderRadius: 23,
                                    backgroundColor: " #f2f2f2",
                                    borderStyle: "solid",
                                    display: "inline-block"
                                }}>
                                    <div style={{textAlign: "center", fontSize: 30}}>{this.props.step.order}</div>
                                </div>
                                <div style={{display: "inline", marginLeft: 10}}>
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