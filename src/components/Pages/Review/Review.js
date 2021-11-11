import React, { useState } from 'react';

const Review = () => {

    const [ratingData, setRatingData] = useState('');


    const handleOnSubmit = (e) => {

        fetch("https://protected-stream-55313.herokuapp.com/review",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ratingData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Successfully Reviewed")
            }
        })


        e.preventDefault();
    }


    const handleOnChange = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newData = { ...ratingData };
        newData[field] = value;
        setRatingData(newData);

        console.log(newData);
    }


    return (
        <div className="text-center">
            <div className="container">
                <h3 className="my-5">REVIEW</h3>

                <form className="w-50 mx-auto my-5" onSubmit={handleOnSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            name="rating"
                            onBlur={handleOnChange}
                            className="form-control"
                            min="0"
                            max="5"
                            placeholder="please give integer rating number"
                            aria-label="Rating Number"
                            aria-describedby="basic-addon2" />
                    </div>
                    <div className="form-floating">
                        <textarea
                            name="comment"
                            onBlur={handleOnChange}
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                      
                    </div>

                    <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;