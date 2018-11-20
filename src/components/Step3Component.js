import React from 'react'


export default class Step3Component extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div
                    style={{
                        fontSize: 35,
                        margin: 0,
                        backgroundColor: "#cccccc",
                        height: 150
                    }}>
                    <div className="flex-container">
                        <div style={{padding:5,display: "flex"}}>
                            {this.props.selected > this.props.step.order ?
                                <div>
                                    <i className="fa  fa-check-circle fa-lg"
                                       onClick={() => this.props.setOrder(this.props.step.order)}
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

                    </div>
                </div>
            </div>
        )
    }
}