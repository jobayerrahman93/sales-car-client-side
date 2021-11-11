import React from 'react';

const Brands = () => {
    return (
        <div className="my-5 container h-50 bg-light py-5">
            <h3>Brands</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-8.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-4.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-7.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-1.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Brands;