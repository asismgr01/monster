import React from "react";

class Test extends React.Component{
    constructor(){
        super();
        this.handle1 = this.handle.bind(this)
    }
    handle(){
        console.log(this)
    }
    /*
    handle1(){
        console.log(this);
    }*/
    handle2 = () => (
        console.log(this)
    )

    render(){
        return( 
            <div>
                <button onClick={this.handle}>Press1</button>
                <button onClick={this.handle1}>Press2</button>
                <button onClick={this.handle2}>Press3</button>
            </div>
        ) 
    }
}

export default Test