import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
increment(){
   /*  this.setState({
        count: this.state.count + 1
    }); */
    this.setState(prevStat => ({ //TOUJOURS UTILISER setState SANS CHANGER LE STATE DIRECTEMENT
        count: prevStat.count +1
    }))
}
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick = {()=>this.incrementFive()}>INCREMENT</button>
            </div>
        )
    }
}

export default Counter;
