import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myAllOrder, setMyAllOrder] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/myOrder")
            .then(res => res.json())
            .then(data => {
              
                // console.log(data);
                const singleUser = data.filter(single => single.email == user.email);
                
                    setMyAllOrder(singleUser);
        
            })
    }, [myAllOrder]);


    // console.log(myAllOrder);


   
    const deleteMyOrder=(id)=>{
       const dltConfirm=window.confirm('are you sure want to delete this item ?')

       if(dltConfirm){
           fetch(`http://localhost:5000/myOrder/${id}`,{
               method:"DELETE",
           })
           .then(res=>res.json())
           .then(data=>console.log(data))
       }
    }


    
    let rowCount=1;
    return (
        <div>
        

            <div className="my-order">
            <div className="container">
                <h1 className="my-5">My Order</h1>

                <table className="table table-striped table-hover">
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
                                        <button onClick={()=>{deleteMyOrder(myOrder._id)}} className="btn btn-danger text-light">X</button>
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
    );
};

export default MyOrders;