import React, { useEffect, useState } from 'react'

function Hooksdem() {
    const [count , setCount]=useState(0)
    useEffect(
        ()=>{
            document.getElementById('123').value=count;
        },[count]
    )
  return (
    <div>
        <input type='text' id="123"></input>
        <button onClick={()=>setCount(count+1)}>Click</button>
        {count}
    </div>
  )
}

export default Hooksdem