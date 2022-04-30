import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SharedNavigation from '../../Shared/Navigation/SharedNavigation';

const MyOrders = () => {
    const { user } = useAuth();
    const [myAllOrder, setMyAllOrder] = useState([]);

    useEffect(() => {

        fetch("https://sales-car.herokuapp.com/myOrder")
            .then(res => res.json())
            .then(data => {
              
                // console.log(data);
                const singleUser = data.filter(single => single.email == user.email);
                
                    setMyAllOrder(singleUser);
        
            })
    }, [myAllOrder]);


    // console.log(myAllOrder);


   
    const deleteMyOrder=(id)=>{

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
                fetch(`https://sales-car.herokuapp.com/myOrder/${id}`,{
               method:"DELETE",
           })
           .then(res=>res.json())
           .then(data=>console.log(data))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

    //    const dltConfirm=window.confirm('are you sure want to delete this item ?')

    //    if(dltConfirm){
    //        fetch(`https://sales-car.herokuapp.com/myOrder/${id}`,{
    //            method:"DELETE",
    //        })
    //        .then(res=>res.json())
    //        .then(data=>console.log(data))
    //    }
    }

    
    let rowCount=1;
    return (
        <>


        <SharedNavigation></SharedNavigation>
        
            <div className="my-order">
            <div className="container">
                <h1 className="my-5 ">My Order</h1>

             <div className="table-responsive">
             <table className="table table-responsive table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAllOrder.map(myOrder => <tr key={myOrder._id}>
                                <th scope="row">{rowCount++}</th>
                                <td>{myOrder.orderName}</td>
                                <td>{myOrder.name}</td>
                                <td>{myOrder.email}</td>
                                <td>{myOrder.address}</td>
                                <td>{myOrder.status}</td>
                                <td>
                                    <Link to={`/myOrder/${myOrder._id}`}>
                                        <button onClick={()=>{deleteMyOrder(myOrder._id)}} className="btn btn-danger text-light"><i class="fa-solid fa-trash"></i></button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
             </div>
            </div>


        </div>
            
        </>
    );
};

export default MyOrders;