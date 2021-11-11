import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services,setServices]=useState([]);
 

    useEffect(()=>{
        fetch('https://protected-stream-55313.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data.slice(0,6)))
    },[]);

    return (
        <div className="services-section">
        <h1 className="py-5 text-center"><span className="text-danger">Our</span> Services</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
               
              

                {
                    services.map(service => <div key={service._id} className="col">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <h5 className="text-secondary">Price: $ {service.price}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="">
                           
                                <Link  to={`/carDetails/${service._id}`}>
                                    <button className="btn btn-outline-warning m-2">Purchase</button>
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

export default Services;