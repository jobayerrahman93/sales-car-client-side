import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ReviewSection.css';

const ReviewSection = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://sales-car.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div id='review' className=" pt-5 review-section">
            <h1 className="py-5 text-center section-title text-light"><span className="text-danger">REVI</span>EWS</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">



                    {
                        reviews.map(review => <div key={review._id} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">
                                    
                                        <Rating className="text-warning"
                                        readonly
                                        initialRating={review.rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                        />
                                       
                                    </h5>
                                    <p className="card-text">{review.comment}</p>
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

export default ReviewSection;