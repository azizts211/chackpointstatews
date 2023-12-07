import {useEffect, useState} from "react"
const Counter=()=>{
    let [count,setCount]=useState(0)
    let[person,setPerson]=useState({
        fullName:"aziz hashash",
        bio:"i'am a singer and songwriter",
        imgSrc:"https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",
        profession:"singer"
    })
    let[timer,setTimer]=useState(0)
    const increment=()=>{
        setCount(count + 1)
    }

    const decrement=()=>{
        if(count > 0){
       setCount(count - 1) 
        }
    }
    const reset=()=>{
setCount(count=0)
    }

 
    useEffect(()=>{
 
        setInterval(()=>setTimer(timer + 1 ), 2000)
    },[timer])

    return(
        <div>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button><br></br>
            <img style={{width:"150px",height:"150px"}} src={person.imgSrc}  />
            <p>{person.fullName}</p>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
            <h1>{timer}</h1>

        
        </div>
    )
}

export default Counter