import { useState } from "react";


const StateFull = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(password.length < 6){
            setError("Password must be 6 or more character");
        }else{
            setError('')
            console.log(email, password)
        }

    } 

    const handleEmailChange = e =>{
       console.log(e.target.value) 
       setEmail(e.target.value)
    }
    const handlePassword = e =>{
        console.log(e.target.value)
        setPassword(e.target.value);
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePassword} type="password" id="" name="password" />
                <br />
                <input type="submit" value={'submit'}/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFull;