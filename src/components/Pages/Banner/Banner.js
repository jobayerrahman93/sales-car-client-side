import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {


    return (
        <div className="banner-section text-center ">

            <div className="row h-100">

                <div className="col-md-6 text-light d-flex align-items-center justify-content-center ">
                    <div className='ms-5'>
                    <h3>2016 ATURA ILX</h3>
                    <p className='my-4'>High Performance & Outstanding Technology Combined.Look around the engine bay for an etched or raised marking indicating the size of the engine. On some automobiles there is an EPA sticker under the hood that states the average gas consumption as well as the size of the engine.</p>
                    <Link to="/explore">
                    <button className="btn btn-danger">Explore</button>
                    </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;