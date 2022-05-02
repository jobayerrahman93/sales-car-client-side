import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import initializeAuthtication from "../Firebase/firebase.init";

initializeAuthtication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        // console.log(name);

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
                // console.log(user);

                const newUser = { email, displayName: name };

                saveUser(email, name, "POST");
                // console.log(newUser);
                setUser(newUser);



                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    alert("Registered Successfully")
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                history.replace("/");

            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
                console.log(errorMessage);
            }).finally(() => setIsLoading(false));
    }


    // sign in with email

    const LoginUser = (email, password, location, history) => {
console.log(email,password);
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setAuthError('');
                // console.log(user);

                // sweet alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  });



                const destination = location?.state?.from || "/";
                history.replace(destination);





            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage)
                console.log(errorMessage);
            }).finally(() => setIsLoading(false));
    }


    // Observer
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });



    }, []);




    //logOut

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});

            }).catch((error) => {
                // An error happened.
            }).finally(() => setIsLoading(false));
    }




    // save user

    const saveUser = (email, displayName, method) => {

        const users = { email, displayName };

        fetch("https://sales-car.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => data)

    }


    //  get admin 

    useEffect(() => {

        fetch(`https://sales-car.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);





    // console.log("firebase admin",admin);

    return {
        registerUser,
        logOut,
        user,
        admin,
        LoginUser,
        isLoading,
        authError

    }
};

export default useFirebase;