
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Main() {
    const [age, incAge]=useState(0);
    return (
        <div>
            {"main component"}
            <h1>{`age is ${age}`}</h1>
            <button onClick={()=>incAge(prevAge=>prevAge+1)}>{'+'}</button>
            <Link to='/dummy'>Dummy</Link>
        </div>
    )
}
