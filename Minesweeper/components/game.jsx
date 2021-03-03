import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

export default class Game extends React.Component{
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = { board: board };
        this.restartGame = this.restartGame.bind(this);
        this.updateGame = this.updateGame.bind(this);
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10);
        this.setState({ board: board });
    }

    updateGame() {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    render() {
        if (this.state.board.lost() || this.state.board.won()) {
            const text = this.state.board.won() ? "You w0n!" : "You l0st!";
                <div>
                        <p>{text}</p>
                        <button onClick={this.restartGame}>Play Again</button>
                </div>;
        }

        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        );
    }
}