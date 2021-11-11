import React from 'react';
import './pageUnavailable.css';

const PageUnavailable = () => {
    return (
        <div className="page-unavailable text-center">
            <h1 className="my-5">Page not found !! 404</h1>

            <div className="unavailable text-center">
                <img src={"https://i.ibb.co/N9tHqLR/enroll-4780bed5.png"} width="500px" />
            </div>
        </div>
    );
};

export default PageUnavailable;