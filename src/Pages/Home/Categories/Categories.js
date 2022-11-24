import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Laptops from '../../Laptops/Laptops';

const Categories = () => {
    const [name, setName] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categoriesName')
        .then(res =>res.json())
        .then(data => setName(data))
     },[])
    return (
        <div>
            <div>
             <h2 className='text-yellow-800 text-3xl text-center p-6 mt-12'>Categories By Brand</h2>
            </div>
            <div className='mx-auto w-96'>
                
                 {/* {
                    name.map(catagory => <Laptops
                    key={catagory._id}
                    catagory={catagory}

                    ></Laptops>)
                 } */}
               <Link to="/apple" className='px-4'><button className="btn btn-outline btn-primary ">Apple</button></Link>
                
               <Link to="/samsung" className='px-4'><button className="btn btn-outline btn-primary ">Ausus</button></Link>
                
               <Link to="/asus" className='px-4'><button className="btn btn-outline btn-primary ">Samsung</button></Link>
                
               
                
            </div>
         
        </div>
    );
};

export default Categories;