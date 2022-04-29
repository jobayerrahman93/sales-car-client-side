import React from 'react';
import carlogo from '../../../asssets/image/car-logo.png';
import './FooterSection.css';

const FooterSection = () => {
    return (
        <div className="py-5 footer-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <img src={carlogo} width="100" className="img-fluid" alt="" />
                 <div className="w-75">
                    <p className="mt-3 "> We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                 </div>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <h3>Quick Links</h3>
                    
                   <ul>
                   <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Confirmation</a></li>
                   </ul>
                   
                </div>

                <div className="col-md-6 col-lg-3 col-sm-12">
                    <h3>Our Services</h3>
                    
                    <ul>
                    <li><a href="">BMW</a></li>
                    <li><a href="">FORD</a></li>
                    <li><a href="">Mustang</a></li>
                    <li><a href="">Sports car</a></li>
                    </ul>
                    

                  
                </div>

                <div className="col-lg-3 col-md-6">
                <div>
                        <h3>News Letter</h3>
                        <div className="input-group mb-3 mt-4">
                        <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"/>
                        <button className="btn btn-danger" type ="button" id="button-addon2">Submit</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </div >
    );
};

export default FooterSection;