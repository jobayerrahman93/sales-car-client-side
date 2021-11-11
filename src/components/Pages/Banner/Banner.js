import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {


    return (
        <div className="banner-section text-center ">

            <div className="row h-100">

                <div className="col-md-6 text-light d-flex align-items-center justify-content-center ">
                    <div>
                    <h3>2016 ATURA ILX</h3>
                    <h6>High Performance & Outstanding Technology Combined</h6>
                    <Link to="/explore">
                    <button className="btn btn-info">Explore</button>
                    </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;