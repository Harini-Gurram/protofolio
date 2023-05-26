import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function FetchData(){
    const [records,setRecords]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
    },[])
    return(
        <div>
            
        </div>
    )
}

export default FetchData