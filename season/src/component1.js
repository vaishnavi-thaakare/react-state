import React from "react"

export default class Component1 extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "vaishnavi",
            email: "nehathaakare@gmail.com",
            count:0

        }
    }

    updatestate= ()=>{
        this.setState({
            name: "nikita",
            count:this.state.count+1
          
        })
    }

    render() {
        return (
            <div>
                <h1> Welcome {this.state.name}</h1>
                <p>Email :{this.state.email}</p>
                <p>Count:{this.state.count}</p>
                <button onClick={() => {
                    this.updatestate()
                }}> Update </button>
            </div>
        )
    }
}


