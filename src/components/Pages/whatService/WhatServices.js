import React from 'react';
import './WhatServices.css';

const WhatServices = () => {
    return (
        <>

        <div className="what-services">
            <div className="container text-center">
                <h1>What services for you</h1>
                <p className='mx-auto w-md-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae a eos, veritatis ut impedit exercitationem magnam totam</p>



                <div className="row justify-content-between mt-5 pt-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="what-box">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <h6>Top buy and sell car</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui deleniti suscipit, dignissimos officia unde autem quibusdam quos laborum et nemo?</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="what-box">
                        <i class="fa-solid fa-money-bill-1"></i>
                        <h6>Easy Payment</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui deleniti suscipit, dignissimos officia unde autem quibusdam quos laborum et nemo?</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="what-box">
                        <i class="fa-solid fa-person-through-window"></i>
                        <h6>Easy to use</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui deleniti suscipit, dignissimos officia unde autem quibusdam quos laborum et nemo?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default WhatServices;