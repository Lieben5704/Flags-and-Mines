import React from 'react';

// Import React bootstrap Button
import Button from "react-bootstrap/Button";


/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/

 
//Display scoreboard
class Scoreboard extends React.Component {
    constructor(props) {
        super(props);

        //Initial state variables
        this.state = {
            GameStatusMsg: "new game",
            Blocks: [{
                id: 0,
                blockStatus: "normal",
                mineStatus: false,
                flagStatus: false,
                numberHint: 0
            }]
        }
    };

    //Game reset function
    reset(Blocks) {
        let array = Blocks.slice();

        for (let i = 0; i <= 81; i++) {
            if (array[i].blockStatus === "exposed") {
                array[i].blockStatus = "normal";
            } 

            if (array[i].flagStatus === true) {
                array[i].flagStatus = false;
            } 

        } 

        this.setState({Blocks: array}, () => {
            console.log("won or lost message is currently: " + this.state.GameStatusMsg);

            this.props.resetGame(this.state.Blocks, this.state.GameStatusMsg);
        })
        
    }

    render() {
        return (
            <div className="scoreAndRestart">
            <div className="scoreboard">
                <div className="innerBoard">
                    <h2>Info</h2>
                    <p>Flags: {this.props.score[0]}</p>
                    <p>Mines: {this.props.score[1]}</p>
                    <p>Game state: {this.props.gameState}</p>
                </div>
            </div>
                <Button variant="primary" 
                        className="restartButton" 
                        onClick={() => this.reset(this.props.Blocks, )}>
                            Restart game?
                </Button>
            </div>
        );
    }
}

// Export component so it can be used by App.js
export default Scoreboard;