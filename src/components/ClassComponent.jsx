import React from "react";

export default class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Grisel"
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        if(this.state.name === 'Grisel'){
            this.setState({name:'Bianca'})
        } else {
            this.setState({name:'Grisel'})
        }


    }
    render(){
        console.log(this);
        return (
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName}> Cambiar nombre </button>
        </div>
        )
    }
}


 