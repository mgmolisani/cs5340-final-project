import React from 'react'


export default class Step2Component extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div style={{fontSize: 45, border: "solid", marginLeft: 1, padding: 5}}>

                <div style={{height: 215, display: "flex", flexDirection: "column"}}>
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
                            justifyContent: "center",
                            alignItems: "center"

                        }} onClick={this.props.next}>
                            <div style={{fontSize: 30}}>{this.props.step.order}</div>
                        </div>
                        <div style={{flexShrink: 1, marginLeft: 10}}>
                            {this.props.step.info}
                        </div>
                    </div>
                    <div className="flex-container"
                         style={{display: "flex", justifyContent: "flex-end", marginRight: 10, flexShrink:0}}>
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
            </div>

        )
    }
}