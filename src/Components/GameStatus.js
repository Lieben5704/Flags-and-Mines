import React from 'react';

// Import react bootstrap button
import Button from "react-bootstrap/Button";


/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments
 
 Helpfull links 
 https://www.youtube.com/watch?v=5Xew--ycx0o&ab_channel=Academind
 */


//Let the user know if they won or lost the game
class WonOrLost extends React.Component {
    constructor(props) {
        super(props);

        //Initial state variables
        this.state = {
            gameStatus: "new game",
            createdArray: false,
            Blocks: [{
                id: 0,
                blockStatus: "normal",
                mineStatus: false,
                flagStatus: false,
                numberHint: 0
            }]
        }

        //Binding to ensure that "this" works
        this.messageExists = this.messageExists.bind(this);
        this.reset = this.reset.bind(this);
        this.restartButton = this.restartButton.bind(this);
        this.displayOrNot = this.displayOrNot.bind(this);

    }

    messageExists(message) {
        //determine the game status, display message if won or lost, else do nothing
        if (message !== "On Going" && message!== "new game") {
            if (message === "Game Over!") {
                return <h1 className="lost">{message}</h1>  
            } else {
                return <h1 className="won">{message}</h1>  
            }
        }
    }

    reset(Blocks) {

        //Clone of main Blocks
        let array = Blocks.slice();

        //Reset values
        for (let i = 0; i <= 81; i++) {
            if (array[i].blockStatus === "exposed") {
                array[i].blockStatus = "normal";
            } 

            if (array[i].flagStatus === true) {
                array[i].flagStatus = false;
            } 

        } 

        //Set Blocks to default values
        this.setState({Blocks: array}, () => {
            console.log("won or lost message is currently: " + this.state.gameStatus);

            this.props.resetGame(this.state.Blocks, this.state.gameStatus);//Call resetGame
        })
    }

    //Display restart game button if the game is won or lost
    restartButton(message) {
        if (message !== "On Going" && message!== "new game") {
            return <Button variant="primary" className="restartButton" onClick={() => this.reset(this.props.Blocks)}>Restart game?</Button>
        }
    } 
    
    displayOrNot (message) {
        if (message !== "On Going" && message!== "new game") {
            return <div className="gameResult">
                {this.messageExists(message)}
                {this.restartButton(message)}
            </div>;
        }
    
    }

    render() {
        return (
            <div>
                {this.displayOrNot(this.props.message)}
            </div>
        );
    }
}

// Export component so it can be used by App.js
export default WonOrLost;