import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: 50,
    };

    handleLeft = (step) => {
        this.setState({
            x: this.state.x - step,
        })
        console.log(this.state.x);
    }

    handleRight = (step) => {
        this.setState({
            x: this.state.x + step,
        })
    }

    render() { 
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.getState()}</div>
                <button onClick={() => this.handleLeft(10)} type="button" className="btn btn-danger m-2">left</button>
                <button onClick={() => this.handleRight(10)} type="button" className="btn btn-danger m-2">right</button>
            </React.Fragment>
        );
    }


    getStyle() {
        let styles = {
            width: "fit-content",
            minWidth: "50px",
            height: 50,
            backgroundColor: "chartreuse",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "10px",
            marginLeft: this.state.x + 10,
            marginTop: "10px",
        };
        
        if (this.state.x === 0) {
            styles.backgroundColor = "orange";
        }

        return styles;
    }

    getState() {
        const {x} = this.state;
        return `x: ${x}`;
    }

}
 
export default Box;