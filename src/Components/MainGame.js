import React from 'react';

//Import images
import Flag from '../redFlag.png';
import Mine from '../mineImg.png';
import Number1 from '../number1.png';
import Number2 from '../number2.png';

//Import components
import Scoreboard from './Scoreboard';
import GameStatus from './GameStatus';

/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/


//Create function to display game board
class MainGame extends React.Component {

    constructor(props) {
        super(props);

        //Initial state variables
        this.state = {
            boardSize: 0,
            Flags: 0,
            Mines: 0,
            gameScoreArray: 0,
            gameStatus: "On Going",
            createdArray: false,

            // Blocks is an array of blocks on the board.
            Blocks: [{
                id: 0,
                blockStatus: "normal",
                mineStatus: false,
                flagStatus: false,
                numberHint: 0,
                emptyBlockSection: 0
            }],

            // blockArray contains the code for each block on the game board.
            blockArray: []
        };
          //Binding for each function so that "this" works correctly
          this.revealedBlock = this.revealedBlock.bind(this);
          this.placeFlag = this.placeFlag.bind(this);
          this.newArray = this.newArray.bind(this);
          this.displayBoard = this.displayBoard.bind(this);
          this.getScore = this.getScore.bind(this);
          this.resetGame = this.resetGame.bind(this);
          this.isNumberHint1 = this.isNumberHint1.bind(this);
          this.isNumberHint2 = this.isNumberHint2.bind(this);
          this.isMine = this.isMine.bind(this);
          this.hasWon = this.hasWon.bind(this);
          this.arraysEqual = this.arraysEqual.bind(this);
    }

    //If the clicked block has a mine, show the icon of the mine
    isMine(index, newArray, tempArray) {

        //Change status of block that was clicked on to "exposed" in temp array
        newArray[index].blockStatus = "exposed";

        tempArray[index] = 
        <div className="block uncovered" 
            id={index} 
            onClick={() => this.revealedBlock(index)} 
            onContextMenu={(e) => {e.preventDefault(); this.placeFlag(index)}}>
                <img className="mine" src={Mine} alt="Mine / bomb" />
        </div>;
        
        //"Game over" message
        let winOrLose = "Game Over!";

        this.setState(
            {Blocks: newArray, 
                blockArray: tempArray, 
            gameStatus: winOrLose}, 
            () => {console.log("blockArray and Blocks item index '" + index + "' updated with mine");
        
        }); 

    }

    //Showing number hints

    isNumberHint1(index, newArray, tempArray) {

        //Change status of block that was clicked on to "exposed" in temp array
        newArray[index].blockStatus = "exposed";

        //If clicked, show image of the "1"
        tempArray[index] = 
        <div className="block uncovered" 
            id={index} 
            onClick={() => this.revealedBlock(index)} 
            onContextMenu={(e) => {e.preventDefault(); this.placeFlag(index)}}>
            {<img className="num1" src={Number1} alt="number 1" />}
        </div>;
            
        this.setState({
            blockArray: tempArray, 
            Blocks: newArray}, 
            () => console.log("blockArray item index '" + index + "' updated with number hint")
        );  

    }
    isNumberHint2(index, newArray, tempArray) {
    
        //Change status of block that was clicked on to "exposed" in temp array
        newArray[index].blockStatus = "exposed";

        //If clicked, show image of the "2"
        tempArray[index] = 
        <div className="block uncovered" 
        id={index} 
        onClick={() => this.revealedBlock(index)} 
        onContextMenu={(e) => {e.preventDefault(); this.placeFlag(index)}}>
            {<img className="num2" src={Number2} alt="number 2" />}
        </div>;
            
        this.setState(
            {blockArray: tempArray, 
                Blocks: newArray}, 
            () => console.log("blockArray and Blocks item index '" + index + "' updated")); 
    
    }


    //If there is no hint under the clicked block, show blank
    isEmptyBlock(index, newArray, tempArray) {

        //Change status of block that was clicked on to "exposed" in temp array
        newArray[index].blockStatus = "exposed";

        //If clicked, show blank
        tempArray[index] = 
        <div className="block uncovered" 
            id={index} 
            onClick={() => this.revealedBlock(index)} 
            onContextMenu={(e) => {e.preventDefault(); this.placeFlag(index)}}>
                &nbsp;
        </div>;

        this.setState(
            {blockArray: tempArray,
                Blocks: newArray}, 
            () => console.log("blockArray item index '" + index + "' updated")
        ); 

    }

    //Exposing what is underneath a block when the user clicks on it

    revealedBlock(index) {

        //Show game status.
        if (this.state.gameStatus === "On Going") {

            // use slice() to clone Blocks (array with all info about each block)
            let newArray = this.state.Blocks.slice();

            // Use slice() to clone blockArray (array that has code for each block) to work on
            let tempArray = this.state.blockArray.slice();

            //First, check if there is a mine under the block, if not it is safe to continue
            if (!this.state.Blocks[index].mineStatus) {

                //Reveal what is under each block (refer to functions above)
                if (this.state.Blocks[index].numberHint === 1) {

                    this.isNumberHint1(index, newArray, tempArray);
                  
                } else {
                    
                    if (this.state.Blocks[index].numberHint === 2) {

                        this.isNumberHint2(index, newArray, tempArray);

                    } else {

                        this.isEmptyBlock(index, newArray, tempArray); 
                    } 
                
                }
            
              //If there is a mine under the clicked block, show the mine
            } else {

                this.isMine(index, newArray, tempArray);
            }
        
        //Update the game status to won or lost
        this.hasWon();
        }
    }

    /* This function checks if the 2 arrays that are passed to it as parameters are equal (have all identical values).
    I learned this from one of the github projects i used for guidance*/

    arraysEqual(array1, array2) {

        for (let i = 0; i < array2.length; i++) {
            if (array1[i] !== array2[i]) return false;
        }

        return true;
    };

    //Function to determine if the player has won or lost
    hasWon() {

        let Blocks = this.state.Blocks;

        //Array with all mines
        let arrayOfMines = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49];

        //Array for all blocks
        let array = Blocks.map(item => 
            {return item.id} 
        );

        //Array for all 'safe' blocks that have no mines underneath
        let winningArrayTemplate = array.filter(item => !arrayOfMines.includes(item));
    
        //Use pop to remove last element from array
        winningArrayTemplate.pop();

        //Array for all exposed blocks
        let exposedBlocksArray = Blocks.filter((item) => 
                {return item.blockStatus === "exposed"}
            );
        
        //Only show exposed blocks in array
        let exposedBlockIdArray = exposedBlocksArray.map((item) => item.id);
        
        let result = false;
        result = this.arraysEqual(exposedBlockIdArray, winningArrayTemplate);

        console.log("result of comparison is: " + result);

        // If array of exposed blocks equals winning array, show the player that they won
        if (result === true) { 
            let msg = "You Won the Game!"; 

            this.setState(
                {gameStatus: msg}, 
                () => {console.log("Won or lost msg updated to: " + this.state.gameStatus);
                
            }); 
        } 

    }

    //Flag placement
    placeFlag(index) {

        //Only allow the player to keep clicking if the game status is on going 
        if (this.state.gameStatus === "On Going") {

            //Temporary clone of Blcoks
            let newArray = this.state.Blocks.slice();

            //Flag status
            newArray[index].flagStatus = true;
            
            //Temporary clone of blockArray
            let tempArray = this.state.blockArray.slice();

            //Show flag image
            tempArray[index] = 
                <div className="block normalBlock" 
                    id={index} 
                    onClick={() => this.revealedBlock(index)} 
                    onContextMenu={(e) => {e.preventDefault(); this.placeFlag(index)}}>
                        <img className="flag" src={Flag} alt="red flag"/>
            </div>;
                
            this.setState(
                {Blocks: newArray, 
                    blockArray: tempArray}, 
                () => {console.log("blockArray item index '" + index + "' updated with flag and Blocks updated.");
                this.getScore();
            }); 

        }

    }   

    // Function to create array that stores the values of each block on the board.
    newArray(side) {

        /*Here I was getting an error that said: 
        "Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate".

        A few of the sources i looked at also ran into this problem. they suggested i view the following website for guidance:
        https://stackoverflow.com/questions/50445512/react-native-invariant-violation-maximum-update-depth-exceeded */
        
        if (this.state.createdArray === false) {

            //Multiply side by itself
            let size = side * side;

            // Create empty array
            let array;

            //Temporary clone of Blocks
            array = this.state.Blocks.slice();

            //create empty object
            let object = {};

            //Place each object on the board using a for loop
            for (let i = 1; i <= size; i++) {

                //Add numberHint of "1" to these blocks
                if (i === 0 || i === 1 || i === 3 || i === 6 || i === 11 || i === 12 || i === 16 || i === 21 
                    || i === 22 || i === 26 || i === 27 || i === 31 || i === 32 || i === 37 || i === 41 || 
                    i === 42 || i === 47 || i === 50 || i === 52 || i === 53 || i === 57 || i === 58 || i === 59) {
                    object = {id: i, blockStatus: "normal", mineStatus: false, flagStatus: false, numberHint: 1,
                    emptyBlockSection: 0};
                    array.push(object);

                //Add numberHint of "2" to these blocks
                } else if (i === 5 || i === 10 || i === 13 || i === 15 || i === 18 || i === 20 || i === 23 ||
                    i === 25 || i === 28 || i === 30 || i === 33 || i === 35 || i === 38 || i === 40 || 
                    i === 43 || i === 48) {
                    object = {id: i, blockStatus: "normal", mineStatus: false, flagStatus: false, numberHint: 2,
                    emptyBlockSection: 0};
                    array.push(object);

                //Add mines where no hints are shown    
                } else {

                    //mineStatus = true
                    if (i === 4 || i === 9 || i === 14 || i === 19 || i === 24 || i === 29 || i === 34 || i === 39
                        || i === 44 || i === 49) {
                    
                        object = {id: i, blockStatus: "normal", mineStatus: true, flagStatus: false, numberHint: 0,
                        emptyBlockSection: 0};
                        array.push(object);

                    //If no mines, and no hints, make empty/blank blocks
                    }  else {

                        //Place these in "emptyblocksection 1"
                        if (i === 7 || i === 8 || i === 17) {
                            object = {id: i, blockStatus: "normal", mineStatus: false, flagStatus: false, 
                            numberHint: 0, emptyBlockSection: 1};
                            array.push(object);
                            
                        //Place these in "emptyblocksection 2"
                        } else {
                            object = {id: i, blockStatus: "normal", mineStatus: false, flagStatus: false, 
                            numberHint: 0, emptyBlockSection: 2};
                            array.push(object);
                        }
                    }
                }
            } 

            //New variable with value true. I will use it to change value of "createdArray"
            let state = true;

            //New variable to update GameStatus
            let msg = "On Going";

            //Update state variables
            this.setState({
                Blocks: array, 
                createdArray: state, 
                boardSize: size,
                gameStatus: msg
            }, () => {
                console.log("newArray function has run.");
                
            }); 
        }
    }

    /*Use array values to create a div for the game board with each value. Gives each div a unique ID
     and passes the index of each block to the "placeFlag" function to be used when the user clicks on a block. */

    displayBoard(side) {

        if (this.state.blockArray.length === 0 || this.state.blockArray === null || this.state.gameStatus === "new game") {
            //clone blockArray
            let tempArray = [];

            // "side"represents the number of blocks on each side of the game board
            let size = side * side;
            
            //New array with numbers 1 to "size"
            for (let j = 0; j <= size - 1; j++) {
                tempArray.push(j);
            }

            // Use map navigate through each element in array and add the div for each block to "board"
            //key = id
            let board = tempArray.map((element) => 
                //when user right clicks, add a flag to the block instead of showing the context menu
                <div className="block normalBlock" id={element} onClick={() => this.revealedBlock(element)} onContextMenu={(e) => {e.preventDefault(); this.placeFlag(element)}}>{element + 1}</div>

            );

            if (this.state.gameStatus === "new game") {
                let msg = "On Going";
                this.setState({gameStatus: msg}, () => console.log("won or lost msg reset to 'On Going'"));
            }

            //Update blockArray
            this.setState({blockArray: board}, () => {
                console.log("Displayboard function has run and blockArray was updated");
                console.log("createdArray status is: " + this.state.createdArray);
                this.getScore();
            });
        }
    }

    getScore() {
        
        let numArray = [0, 0];
        let Blocks = this.state.Blocks;
        let numberOfFlags = 0;
        let numberOfMines = 0;
        let size = this.state.boardSize;

        //Display number of blocks with flags and number with mines
        for (let i = 0; i <= size; i++) {

            if (Blocks[i].flagStatus === true) {
                numberOfFlags++;
            }

            if (Blocks[i].mineStatus === true) {
                numberOfMines++;
            }

        } 

        this.setState({Flags: numberOfFlags, Mines: numberOfMines}, () => {
            console.log("Status of Flags and Mines updated");

            numArray[0] = this.state.Flags;
            numArray[1] = this.state.Mines;

            this.setState({gameScoreArray: numArray}, () => console.log("gameScoreArray is: " + this.state.gameScoreArray));
        });
        
    }

    //game reset
    resetGame(Blocks, msg) {
        this.setState({
            gameStatus: msg, 
            Blocks: Blocks

        }, () => {
            console.log("Game reset.");
            this.displayBoard(9);
        });
    }

   
    render() {
        return (
            <div className="Game">
                
                <div className="MainGame">
                    {this.newArray(9)}
                    {this.displayBoard(9)}
                    {this.state.blockArray}
                </div>

                {<GameStatus 
                    resetGame={this.resetGame} 
                    message={this.state.gameStatus} 
                    Blocks= {this.state.Blocks} 
                    createdArray = {this.state.createdArray} />}
                
                {<Scoreboard 
                    score={this.state.gameScoreArray} 
                    resetGame={this.resetGame} 
                    gameState={this.state.gameStatus} 
                    Blocks= {this.state.Blocks} />}

               

            </div>

        );

    }

}

// Export component so it can be used by App.js
export default MainGame;