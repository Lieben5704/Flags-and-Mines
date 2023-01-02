import React from 'react';

/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/

 
//Game rules
function gameRules() {
    return (

        <div id="top" className="help">
            <h1><u>Flags and Mines Rules</u></h1>
            <h2><br></br>Introduction</h2>
            <p>Flags and Mines is puzzle/thinking game available on most computers. 
                Each block on the board is clickable and clicking on it can reveal a few surprises. While most of these blcoks are harmless, some of them when clicked on, trigger a mine/bomb which results in you losing the game.
                Other blcoks can contain hints that could guide you on where these mines could be, while others are blank blcoks. The game can be won if the player exposes all blocks that DO NOT contain mines.
            </p>

    <div>
        <h2>Rules:</h2>
    </div>
            <p>On the right side of the page you will find a block that will give you details about the board you are playing. 
                It will show you how many mines there are, how many flags you have placed, and what your game status is.
            </p>
            
            <p>The first move of the game depends mainly on luck, click on any random block on your board, and hopefully there is no mine concealed underneath.
                Clicking on a block will either reveal a mine, a blank block, or a number hint. By landing on a mine, you lose the game and will have to restart, 
                but if you landingon a block with a number hint, you can use it to guide your next move. Blank blocks are difficult because they don'y give you much information,
                but they allow you to make another move.
            </p>

    <div>
        <h3>Number Hints</h3>
    </div>

            <div>
                <p>Number hints are used as a guide on what your next move should be. If you click on a block, and a number appears, this is a number hint.
                    If a number '1' appears, that means the block you clicked on is touched by '1' mine. If you see a number '2' it means that the block is being touched by '2' mines.
                    However, this could mean that the mine is toucking either the sides, or corners of the block, so ultimately there ar 8 possibilities.
                </p>
            </div>

    <div>
        <h3>Red Flags</h3>
    </div>

            <div>
                <p>If there is a block that you suspect might be hiding a mine under it, you can right-click on that block to place a flag on it without triggering the mine.
                    You can see the amount of flags you have placed in the block on the right-hand-side of the board.
                </p>
            </div>

    <div>
        <h3>Winning or losing</h3>
    </div>
            <div>
                <p>
                    <b>Losing</b> - The game is lost when the player clicks on a mine. This can happen at any time throughout the game, even at the very start.
                </p>

                <p>
                    <b>Winning</b> - In order to win the game, the player must uncover all blocks without mines underneath without triggering any hidden mines.
                    The player must then place flags on all blocks that have mines underneath.
                </p>
            </div>
            
        </div>
    )
}

// Export component so it can be used by App.js
export default gameRules;