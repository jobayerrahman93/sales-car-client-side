import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExploreCar = () => {
    const [services,setServices]=useState([]);
 

    useEffect(()=>{
        fetch('https://sales-car.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return (
        <div className="services-section my-3">
        <h1 className="py-5 text-center"><span className="text-danger">Our</span> Services</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
               
              

                {
                    services.map(service => <div key={service._id} className="col">
                        <div className="card h-100">
                            <img src={service.img} height={277} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <h4 className="text-success">Price: $ {service.price}</h4>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="">
                           
                                <Link  to={`/carDetails/${service._id}`}>
                                    <button className="btn btn-danger m-2">Purchase</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }


            </div>
        </div>
    </div>


    );
};

export default ExploreCar;