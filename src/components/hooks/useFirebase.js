import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthtication from "../Firebase/firebase.init";

initializeAuthtication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [admin,setAdmin]=useState(false);
    // const [token,setToken]=useState('');




    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        console.log(name);

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
                console.log(user);
            
                const newUser = { email, displayName: name };

                saveUser(email, name,"POST");
                console.log(newUser);
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


                // history.replace("/");

            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
                console.log(errorMessage);
            }).finally(() => setIsLoading(false));
    }


    // sign in with email

    const LoginUser = (email, password, location, history) => {

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setAuthError('');
                    console.log(user)
                const destination = location?.state?.from || "/";
                history.replace(destination);



            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage)
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

    const saveUser = (email, displayName,method) => {

        const users = { email, displayName };

        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    //  get admin 

     useEffect(()=>{

        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
        },[user.email]);





console.log("firebase admin",admin);

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