import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {

    const [manageServices,setManageServices]=useState([]);

    useEffect(()=>{
        fetch("https://sales-car.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setManageServices(data))
    },[]);

    const handleDelete=(id)=>{
        fetch(`https://sales-car.herokuapp.com/services/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){

                const remaining=manageServices.filter(manageService=>manageService._id !==id);
                setManageServices(remaining)
            }
        })
    }

    return (
        <div className="container">
            <h1 className="my-5 fw-bold">Manage Products</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            {
                manageServices.map(service=> <div key={service._id} className="col">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                
                            </div>
                            <div className="">
                           
                                <Link  to={`/dashboard/manageProducts/${service._id}`}>
                                    <button onClick={()=>handleDelete(service._id)} className="btn btn-danger m-2">Delete</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                )
            }


        </div>
        </div>
    );
};

export default ManageProducts;