import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dummy extends Component {
    constructor(props){
       super(props);
    }
    componentDidMount(){
        if(this.inpRef)
            this.inpRef.focus();
        console.log(this.inpRef);
    }
    render() {
        return (
            <div>
                dummy
                <input type="text" ref={(o)=>{this.inpRef=o}}/>
            </div>
        )
    }
}
