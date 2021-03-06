import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedNavigation from '../../Shared/Navigation/SharedNavigation';

const ExploreCar = () => {
    const [services,setServices]=useState([]);
 

    useEffect(()=>{
        fetch('https://sales-car.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return (

        <>
        <SharedNavigation></SharedNavigation>

        <div className="services-section explore-services-section">
        <h1 className="py-5 text-center section-title text-light">
        <span className="main-color">Our</span> Services
        <br/>

        {
            services.length==0 && <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </h1>
        <div className="container">

    
            <div className="row row-cols-1 row-cols-md-3 g-4">
               
              

                {
                    services.map(service => <div key={service._id} className="col">
                        <div className="card h-100">
                            <img src={service.img} height={277} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light">{service.name}</h5>
                                <h5 className="text-danger">$ {service.price}</h5>
                                <p className="card-text text-light">{service.description}</p>
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
        </>

        


    );
};

export default ExploreCar;