import {useState, useEffect} from 'react';
import UseCounter from './UseCounter';

const CounterExample = () =>{


  const count = UseCounter(true);
 
    
    return (
        <div>
            Welcome
            <div>Count :  {count}</div>
            <button > Increment</button>
  
        </div>
    )
}

export default CounterExample;