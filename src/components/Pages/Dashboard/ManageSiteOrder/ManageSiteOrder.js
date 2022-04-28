import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageSiteOrder = () => {

    const [allOrders,setALLOrder]=useState([]);

    useEffect(()=>{

        fetch("https://sales-car.herokuapp.com/dashboard/manageAllOrder")
        .then(res=>res.json())
        .then(data=>setALLOrder(data))

    },[allOrders]);

    const handleDelete=(id)=>{
        
        // sweetalert2
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                    fetch(`https://sales-car.herokuapp.com/manageAllOrder/${id}`,{
                    method:"DELETE"
                    
                })
                .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = allOrders.filter(remain => remain._id !== id);
                            setALLOrder(remaining);
                            
        
                        }
                    })

             
            }
          })




    
        // const dltConfirm= window.confirm("are you want to delete this item ?")

        // if(dltConfirm){
        //     fetch(`https://sales-car.herokuapp.com/manageAllOrder/${id}`,{
        //     method:"DELETE"
            
        // })
        // .then(res => res.json())
        //     .then(data => {
        //         if (data.deletedCount > 0) {
    
        //             const remaining = allOrders.filter(remain => remain._id !== id);
        //             setALLOrder(remaining)

        //         }
        //     })
        // }

    }

    

    const {status}=allOrders;
    const updatePending={
        status:"shipped"
    }

    const handleUpdateStatus=(id)=>{

        fetch(`https://sales-car.herokuapp.com/manageAllOrder/${id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatePending)

        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }

    let rowCount=1;

    return (
        <div className="">

            <div className="container">
                <h1 className="my-5">All Order</h1>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(manage => <tr key={manage._id}>
                                <th scope="row">{rowCount++}</th>
                                <td>{manage.orderName}</td>
                                <td>{manage.name}</td>
                                <td>{manage.email}</td>
                                <td>{manage.address}</td>
                                <td>{manage.status}</td>
                                <td>
                                    <Link to={`/dashboard/manageAllOrder`}>
                                        <button onClick={() => handleUpdateStatus(manage._id)} className="btn btn-dark text-light">Update status</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/dashboard/manageAllOrder`}>
                                        <button onClick={() => { handleDelete(manage._id) }} className="btn btn-danger text-light">X</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageSiteOrder;