import {useState,useEffect} from 'react'
import axios from 'axios'




export default ()=>{
    const[results,setResults] = useState([])


    const callYelp = (searchQuery,) =>{
        
        axios.get('https://yelpapicors.herokuapp.com/',{
            params:{
                term:searchQuery,
                location:'san jose'
            }
        })
        .then((res)=>{
            
            let {businesses} = res.data;
            setResults(businesses);
        })
        .catch((err)=>{console.log(err)})
    
    }

    useEffect(()=>{
        callYelp('pasta')
    },[])

    return [results,callYelp]
}