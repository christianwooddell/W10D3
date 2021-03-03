import React from "react";

export default class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return (
            "t"
        );
    }
}