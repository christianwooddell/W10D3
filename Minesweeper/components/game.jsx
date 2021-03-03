import React from "react";
import * as Minesweeper from "../minesweeper";

export default class Game extends React.Component{
    constructor(props){
        super(props);
        const board = new Minesweeper.board(9, 10);
        this.state = { board: board };
        this.restartGame = this.restartGame.bind(this);
        this.updateGame = this.updateGame.bind(this);
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10);
        this.setState({ board: board })''
    }

    updateGame() {
        //come back to here after render 
    }

    render() {

    }
}