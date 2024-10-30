import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(1);


    const handelAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleRemove = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
    return(
        <div style={{border: "2px solid green", padding: "10px"}}>
            <h3>Counter: {count}</h3>
           <button onClick={handelAdd}>add</button>
           <button onClick={handleRemove}>Remove</button>
        </div>
    )
}