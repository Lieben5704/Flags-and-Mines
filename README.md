# Flags and Mines (MineSweeper Game)

### 1. Project Description

This project is a minesweeper game created using **React, CSS and HTML**.

### Table of Contents
1. Project description
2. How to use
3. Installation
4. Running the game
5. Game rules
6. Credits

## How to use
### Home Page
On the home page, you will find a brief welcome message followed by a navigation menu with two options. You can either **"Play game"** or view the **"Game Help"** section.

### Main Game
On the Main Game page, you will find a header with the **game name** and the **navigation menu**. 
Below this you can find the **gameboard**, and to the right of the board you will find the *score panel*.

### Game help
On this page you will find **rules on how the game is played and how you can win or lose**.

## Installation

In your **terminal**, use the following command to download the repository content:

**git clone https://github.com/Lieben5704/L2T12-Capstone_Flags_and_Mines.git**

OR alternatively you can download the ZIP file

## Running the game

In your terminal, navigate to the main folder of the game, then use the following command to start the app: **npm start**. 
Your browser should open on http://localhost:3000

## Game rules

### Introduction
Flags and Mines is puzzle/thinking game available on most computers. Each block on the board is clickable and clicking on it can reveal a few surprises. While most of these blcoks are harmless, some of them when clicked on, trigger a mine/bomb which results in you losing the game. Other blcoks can contain hints that could guide you on where these mines could be, while others are blank blcoks. The game can be won if the player exposes all blocks that DO NOT contain mines.

### Rules:
On the right side of the page you will find a block that will give you details about the board you are playing. It will show you how many mines there are, how many flags you have placed, and what your game status is.
The first move of the game depends mainly on luck, click on any random block on your board, and hopefully there is no mine concealed underneath. Clicking on a block will either reveal a mine, a blank block, or a number hint. By landing on a mine, you lose the game and will have to restart, but if you landingon a block with a number hint, you can use it to guide your next move. Blank blocks are difficult because they don'y give you much information, but they allow you to make another move.

### Number Hints
Number hints are used as **a guide** on what your next move should be. If you click on a block, and a number appears, this is a number hint. If a number '1' appears, that means the block you clicked on is touched by '1' mine. If you see a number '2' it means that the block is being touched by '2' mines. However, this could mean that the mine is toucking either the sides, or corners of the block, so ultimately there ar 8 possibilities.

### Red Flags
If there is a block that you suspect might be hiding a mine under it, you can right-click on that block to place a flag on it without triggering the mine. You can see the amount of flags you have placed in the block on the right-hand-side of the board.

### Winning or losing
**Losing** - The game is lost when the player clicks on a mine. This can happen at any time throughout the game, even at the very start.

**Winning** - In order to win the game, the player must uncover all blocks without mines underneath without triggering any hidden mines. The player must then place flags on all blocks that have mines underneath.

## Credits
The autor of this project is: **Matthew Liebenberg** 

