import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://sales-car.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);


  return (
    <div id="service" className="services-section my-5 pt-5">
      <h1 className="py-5 text-center section-title">
        <span className="text-danger">Our</span> Services
        <br/>

        {
            services.length==0 && <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          { services.map((service) => (
            <div key={service._id} className="col">
              <div className="card h-100">
                <img
                  src={service.img}
                  className="card-img-top services-img"
                  alt="..."
                  height={277}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <h6 className="text-dark">Price:$ {service.price}</h6>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="">
                  <Link to={`/carDetails/${service._id}`}>
                    <button className="btn btn-danger fs-6 m-2">
                      Purchase
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Services;
