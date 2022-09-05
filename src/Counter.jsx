import React from "react";
import {useState} from "react"; 
import './Button.css'


const Counter = () => {
    const [count,setCount] = useState(0)

    const handleInc = () => {
        setCount(count+1)
    }

    const handleDec = () => {
        setCount(count-1)
    }
    return ( 
        <div>
            <h1>The count is : {count}</h1>
            <div className = "btn">
                <button className="decrement" onClick={handleDec}>Plus One</button>
                <button className="increment" onClick={handleInc}>Minus One</button>
                <button className="multiply" onClick={()=> setCount(count*2)}>Multiply Two</button>
                <button className="divide" onClick={()=> setCount(Math.round(count/2))}>Divide Two</button>
            </div>
        </div>
     );
}
 
export default Counter;