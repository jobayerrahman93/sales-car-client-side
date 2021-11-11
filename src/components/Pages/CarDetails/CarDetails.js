import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const CarDetails = () => {
    const { carID } = useParams();
    const {user}=useAuth();
    const [singleCar, setSingleCar] = useState({});

    useEffect(() => {
        fetch(`https://protected-stream-55313.herokuapp.com/carDetails/${carID}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, []);


    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const handlePlaceOrder=()=>{
       
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;

        const orderDetails={orderName:singleCar.name,name,email,address,status:"pending"};

        fetch("https://protected-stream-55313.herokuapp.com/carDetails/order",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Successfully place an order")
            }
        })

    }


    return (
        <div className="booking-details-section text-center">
            <h1 className="my-5">Place Order</h1>


            <div className="row container">
                <div className="col-md-6">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={singleCar.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singleCar.name}</h5>
                            <p className="card-text">{singleCar.description}</p>
                            <p className="card-text">{singleCar.price}</p>
                        </div>
                    </div>
                </div>



                <div className="col-md-6 text-start">
                    <div>
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" ref={nameRef} value={user.displayName} readOnly className="form-control" id="exampleInputName" />
                    </div>

                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} value={user.email} readOnly className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    <div>
                        <label htmlFor="exampleInputName" className="form-label">Adreess</label>
                        <input ref={addressRef} type="text" className="form-control" id="exampleInputName" />
                    </div>

                    <div className="my-3">
                        <button onClick={handlePlaceOrder} className="btn btn-info">Place order</button>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default CarDetails;