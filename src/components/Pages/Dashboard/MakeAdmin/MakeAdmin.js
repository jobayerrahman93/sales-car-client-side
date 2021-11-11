import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email,setEmail]=useState('');
    const [successAdmin,setSuccessAdmin]=useState(false);

    

    const handleOnBlur=(e)=>{

        setEmail(e.target.value)
        

    }


    const handleOnSubmit=(e)=>{

       
        const user={email};

        fetch("http://localhost:5000/dashboard/makeAdmin", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount>0){
                    setSuccessAdmin(true);
                }
            })

        e.preventDefault();

    }

    return (
        <div className="text-center">
            <h2 className="my-5">Make an admin</h2>


            {
                successAdmin && <div class="alert alert-success w-50 mx-auto my-5" role="alert">
                Make Admin Successfully
              </div>
            }

            <form onSubmit={handleOnSubmit}>
                <input
                 type="email" 
                 role="role" 
                 onBlur={handleOnBlur}
                 id="" />
                 <button className="btn btn-primary mx-3" type="submit">Make Admin</button>

            </form>
        </div>
    );
};

export default MakeAdmin;