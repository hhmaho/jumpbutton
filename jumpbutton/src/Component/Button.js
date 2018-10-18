import React from 'react';

function randomGetal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function movePosition(x, y) {
    randomGetal()
}

//console.log(movePosition(-100, 100))

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: movePosition(), y: movePosition() }
    }
    render() {
        return (
            <button style={{ "marginTop": "100px", "marginLeft": "100px" }}
                onClick={() => {
                    movePosition();
                    movePosition()
                }
                }>
                click me!
            </button >
        )
    }
}

export default Button


