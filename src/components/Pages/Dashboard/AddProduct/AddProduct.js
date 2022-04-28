import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();

   

    const handleSubmit = () => {

        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;

        const addService = { name, description,price, img };

        fetch('https://sales-car.herokuapp.com/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                   
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added a Product',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    // console.log(data);

                }
            })
    }

    return (
        <div className="vh-100 ">
            <div className="w-50 mx-auto add-service-info">
                <h2 className="py-5 text-center">Please add services </h2>

                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input ref={nameRef} type="text" className="form-control" id="exampleInputName" />

                <label htmlFor="exampleInputName" className="form-label">Description</label>
                <input ref={descriptionRef} type="text" className="form-control" id="exampleInputName" />

                <label htmlFor="exampleInputName" className="form-label">Price</label>
                <input ref={priceRef} type="text" className="form-control" id="exampleInputName" />

                <label htmlFor="exampleInputName" className="form-label">Image</label>
                <input ref={imgRef} type="text" className="form-control" id="exampleInputName" />

                <button onClick={handleSubmit} className="btn btn-success my-4" type="submit">Submit</button>
            </div>
        </div>
    );
};

export default AddProduct;