import React, { Component } from 'react'
import {connect} from 'react-redux';
import {asyncInc,increment} from '../../actions/actions';
import styles from './counter.scss';
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
               <div className={styles.buttons}>
                    <button onClick={this.increment}>Increment</button>
                    {this.props.counter}
               </div>
                
            </div>
        )
    }
}


export default connect((state,ownProps)=>{
    console.log(state.root)
    return({counter:state.root.counter})
})(Counter)