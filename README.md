## React Memory Game

A memory game, based on a ReactU tutorial, found at "https://github.com/react-u/029-build-a-memory-game-using-react-hooks" and on YouTube: "https://www.youtube.com/watch?v=MLNLT_-mBA0".  I made some additions to get a little more experience using React hooks: useState and useEffect.

### My changes

This tutorial was fast so I decided to make a few small additions to make it more like a game instead of an exercise.  I added a navbar, including scoring to track matches and non-matches ("Current Score" and "Incorrect Guesses"), "Wins" and "Losses" column, and a restart button.  I added code to tally the moves: match all pairs and the player gets a win, unless he first guesses incorrectly 8 times, in which case he gets a loss. Unless the page is refreshed, the wins and losses will accumulate.  The restart button will give the user a new game (shuffled cards and cleared score values) but will not affect wins and losses.

### About this Application

React Memory Game was created to help me practice React hooks, specifically useState and useEffect.  It is hosted at https://sheltered-plateau-66597.herokuapp.com/.  It was created by ReactU and me and is maintained by me, Marjika Howarth.
