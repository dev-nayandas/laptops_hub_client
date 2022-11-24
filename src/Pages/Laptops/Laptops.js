import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Laptops = () => {
    const [name, setName] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categoriesName')
        .then(res =>res.json())
        .then(data => setName(data))
     },[])

   
   const laptops = useLoaderData()
    return (
        <div>
            <h1>This is Categories page {laptops.length}</h1>
                  
        </div>
    );
};

export default Laptops;