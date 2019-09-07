
import React from 'react';
import {useState} from 'react';

export default function Main() {
    const [age, incAge]=useState(0);
    return (
        <div>
            {"main component"}
            <h1>{`age is ${age}`}</h1>
            <button onClick={()=>incAge(age+1)}>{'+'}</button>
        </div>
    )
}
