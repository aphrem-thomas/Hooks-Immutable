import React, { Component } from 'react'
import {connect} from 'react-redux';
import {asyncInc,increment} from '../../actions/actions';

class Counter extends Component {
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this);
    }

    increment(){
        this.props.dispatch(asyncInc())
    }
    render() {
        return (
            <div>
                {/* <div className={"value"}> {this.props.counter}</div> */}
               <div className={"buttons"}>
                    <button onClick={this.increment}>Increment</button>
                    {this.props.counter}
               </div>
                
            </div>
        )
    }
}


export default connect(({ count })=>{
    console.log(count)
    return({counter:count.counter})
})(Counter)