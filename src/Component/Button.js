import React from 'react';

function randomGetal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: randomGetal(0, 100), y: randomGetal(0, 100) }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                ({this.state.x},{this.state.y})
                <button style={{ "marginTop": this.state.x + "px", "marginLeft": this.state.y + "px" }}
                    onClick={() => {
                        this.setState({
                            x: randomGetal(0, 100),
                            y: randomGetal(0, 100)

                        })
                    }
                    }>
                    click me!
            </button >
            </div>
        )
    }
}

export default Button


