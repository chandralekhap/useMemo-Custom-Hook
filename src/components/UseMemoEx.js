import {useState, useEffect, useMemo} from 'react'

const UseMemoEx = ()=>{

    const [count, setCount] = useState(0)
    const [count2, setCount2]  = useState(0)

    const onClickHandler  = () =>{

        setCount ((prevCount)=>(prevCount+1))
    }


    const onClickHandler2  = () =>{
        setCount2((prevCount)=>(prevCount+1))

       
    }
    const isEven = useMemo( ()=>
    {

        console.log( ' in isEven' ,count)
        var i=0;
      while(i<=1000000000)
      i++
        {

        }
        if(count % 2 ===  0)
        return true;
        else
        return false;
    }, [count])
   
    return (

        <div>
            Welcome
            <div>count: {count}</div>
            <button onClick = {onClickHandler}> increment count1</button>

            { isEven ? 'Even': 'Odd'}

                 <div>count2: {count2}</div>
            <button onClick = {onClickHandler2}> increment count2</button>
        </div>
    )
}

export  default UseMemoEx ;