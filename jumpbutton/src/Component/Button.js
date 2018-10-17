import React from 'react';

function changePosition(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(moveButton(-100, 100))

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { position }
    }
    state = {}
    render() {
        return (
            <button style={{ "marginTop": "100px", "marginLeft": "100px" }}
                onClick={() => {
                    let position = 0;
                    if (this.state.position > 0) {
                        return
                    }
                    this.setState({
                        randomPosition: this.state.randomPosition + randomPosition
                    })
                }}>
                click me!
            </button>
        )
    }
}

export default Button