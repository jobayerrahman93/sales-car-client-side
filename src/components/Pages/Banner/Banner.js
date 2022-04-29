import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {


    return (
        <div className="banner-section  ">

             <div className="container">
             <div className="row align-items-center">

<div className="col-md-6 col-lg-4 text-light ">
    <div className=''>
    <h6 className='text-start'>New Arrival</h6>
    <h4 className='my-3'>
    2022 Tesla Electrofying Turbospeed <span>TURBO-312</span></h4>
    <Link to="/explore">
    <button className="btn btn-danger explore-btn">Explore</button>
    </Link>
    </div>
</div>


</div>
             </div>

        </div>
    );
};

export default Banner;