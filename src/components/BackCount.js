import {useState, useEffect} from 'react'
import UseCounter from './UseCounter';

const BackCount = () =>{


  const count  = UseCounter(false);


  
    return (
        <div>
          
            <div>Count :  {count}</div>
            <button > Increment</button>
   
        </div>
    )
}

export default BackCount;