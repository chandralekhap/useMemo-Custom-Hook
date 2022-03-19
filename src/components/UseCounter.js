import {useState, useEffect} from 'react'

const UseCounter =( flag) =>{


    const [count, setCount] = useState(0)
    
    useEffect (()=>{

        

        const interval = setInterval(()=>{

            if(flag){
            setCount((prevCount)=>(prevCount+1))
            }else{
                setCount((prevCount)=>(prevCount-1))
            }
        },1000)

        return ()=>clearInterval(interval);
    }, [])

    return count;
}

export default UseCounter;