import React from 'react';

function changePosition(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(changePosition(-100, 100))

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y:0 }
    }
    //state = {}
    render() {
        return (
            <button style={{ "marginTop": "100px", "marginLeft": "100px" }}
                onClick={this.state.changePosition}>
                click me!
            </button>
        )
    }
}

export default Button