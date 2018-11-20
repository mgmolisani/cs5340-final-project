import React from 'react'


export default class Step1Component extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div>

                    <div style={{
                        fontSize: 35,
                        margin: 0,
                        backgroundColor: "#cccccc",
                        height: 150
                    }}>
                        {this.props.step ?
                        <div className="flex-container" style={{display: "flex", padding: 5}}>
                            {this.props.selected > this.props.step.order ?
                                <div>
                                    <i className="fa  fa-check-circle fa-lg"
                                       onClick={() => this.props.setOrder(this.props.step.order-1)}
                                       style={{color: "red"}}></i>
                                </div>

                                :
                                <div className="flex-container" style={{
                                    display: "flex",
                                    marginTop: 10,
                                    marginRight: 5,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: " #D9D9D9",
                                    borderStyle: "solid",
                                    flexShrink: 0,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <div style={{fontSize: 30}}>{this.props.step.order}</div>

                                </div>
                            }
                            <div style={{flexShrink: 1, marginLeft: 10}}>
                                {this.props.step.info}
                            </div>
                        </div>
                            : null}
                    </div>

            </div>

        )
    }
}