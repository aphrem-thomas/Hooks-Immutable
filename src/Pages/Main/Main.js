
import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

export default function Main(props) {
    const [age, incAge]=useState(0);
    const count = useSelector(st=>st.counter);
    const dispatch = useDispatch();
    useEffect(()=>console.log("changed"),[count]);
    return (
        <div>
            {"main component"}
            <h1>{`age is ${count}`}</h1>
            <button onClick={()=>dispatch({type:'INC_COUNTER'})}>{'+'}</button>
            <Link to='/dummy'>Dummy</Link>
        </div>
    )
}
